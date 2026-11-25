/*
 * Recenziile Google live, prin Featurable (plan gratuit).
 * Se cer DOAR pe server, o dată pe zi (ISR). Numele autorilor vin de la Google
 * la fiecare reîmprospătare și nu se salvează nicăieri în cod.
 *
 * Variabile de mediu (în .env.local și în Vercel, puse de Mark):
 *   FEATURABLE_WIDGET_ID   ID-ul widgetului din contul Featurable
 *   FEATURABLE_API_KEY     cheia API (secretă; opțională dacă widgetul e public)
 *   FEATURABLE_API_BASE    opțional, implicit https://featurable.com/api/v2
 */

import type { Review } from "@/components/reviews";

export type ReviewsData = {
  reviews: Review[];
  total: number;
  average: number;
  profileUrl: string | null;
  live: boolean;
};

type FeaturableReview = {
  author?: { name?: string | null; avatarUrl?: string | null } | null;
  text?: string | null;
  originalText?: string | null;
  languageCode?: string | null;
  rating?: { value?: number | null } | null;
  publishedAt?: string | null;
};

type FeaturableResponse = {
  success?: boolean;
  widget?: {
    reviews?: FeaturableReview[];
    isExampleReviews?: boolean;
    gbpLocationSummary?: { reviewsCount?: number; rating?: number; writeAReviewUri?: string } | null;
  };
};

const DAY = 60 * 60 * 24;

function toStars(v: number | null | undefined): Review["stars"] {
  const n = Math.round(Number(v ?? 5));
  return (Math.min(5, Math.max(1, n)) as Review["stars"]);
}

export async function fetchLiveReviews(): Promise<ReviewsData | null> {
  const id = process.env.FEATURABLE_WIDGET_ID;
  if (!id) return null;

  const base = process.env.FEATURABLE_API_BASE || "https://featurable.com/api/v2";
  const key = process.env.FEATURABLE_API_KEY;

  try {
    const res = await fetch(`${base}/widgets/${encodeURIComponent(id)}`, {
      headers: { accept: "application/json", ...(key ? { "X-API-Key": key } : {}) },
      next: { revalidate: DAY, tags: ["google-reviews"] },
    });
    if (!res.ok) {
      console.error(`[reviews] Featurable ${res.status}`);
      return null;
    }

    const data = (await res.json()) as FeaturableResponse;
    const w = data.widget;
    if (!data.success || !w || w.isExampleReviews || !Array.isArray(w.reviews)) return null;

    const reviews: Review[] = w.reviews
      .map((r) => {
        // Textul original, în limba în care l-a scris clientul.
        const text = (r.originalText || r.text || "").trim();
        return {
          stars: toStars(r.rating?.value),
          lang: (r.languageCode || "").slice(0, 2).toLowerCase(),
          text,
          name: r.author?.name?.trim() || undefined,
          avatar: r.author?.avatarUrl || undefined,
        };
      })
      .filter((r) => r.text.length > 0);

    if (reviews.length === 0) return null;

    const s = w.gbpLocationSummary;
    return {
      reviews,
      total: s?.reviewsCount ?? w.reviews.length,
      average: s?.rating ?? 5,
      profileUrl: null,
      live: true,
    };
  } catch (err) {
    console.error("[reviews] Featurable fetch failed", err);
    return null;
  }
}
