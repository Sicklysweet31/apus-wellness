import Testimonials from "./Testimonials";
import { reviews, GOOGLE_TOTAL, GOOGLE_AVERAGE, GOOGLE_PROFILE_URL } from "./reviews";
import { fetchLiveReviews } from "@/lib/featurable";

/*
 * Server: încearcă recenziile live (cu numele de pe Google), o dată pe zi.
 * Dacă sursa live lipsește sau dă eroare, arată recenziile copiate de pe Google.
 */
export default async function ReviewsSection() {
  const live = await fetchLiveReviews();

  return (
    <Testimonials
      reviews={live?.reviews ?? reviews}
      total={live?.total ?? GOOGLE_TOTAL}
      average={live?.average ?? GOOGLE_AVERAGE}
      profileUrl={live?.profileUrl ?? GOOGLE_PROFILE_URL}
    />
  );
}
