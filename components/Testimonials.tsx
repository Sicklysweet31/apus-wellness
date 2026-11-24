"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";
import {
  reviews,
  GOOGLE_TOTAL,
  GOOGLE_AVERAGE,
  GOOGLE_PROFILE_URL,
  type Review,
} from "./reviews";

/*
 * RECENZII — toate recenziile cu text de pe profilul Google, nefiltrate,
 * în limba originală, pe o bandă care se derulează încet.
 * Datele: ./reviews.ts (fără nume de clienți).
 */

const LANG_LABEL: Record<Review["lang"], string> = {
  ro: "RO",
  hu: "HU",
  en: "EN",
};

const LONG_TEXT = 260;

function Stars({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <span className={styles.stars} aria-label={`${count} din 5 stele`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={i < count ? styles.starOn : styles.starOff}
        >
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({
  review,
  hidden,
  onToggle,
}: {
  review: Review;
  hidden?: boolean;
  onToggle: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const isLong = review.text.length > LONG_TEXT;

  return (
    <figure className={styles.card} aria-hidden={hidden || undefined}>
      <Stars count={review.stars} />
      <blockquote
        className={`${styles.text} ${isLong && !open ? styles.clamped : ""}`}
        lang={review.lang}
      >
        {review.text}
      </blockquote>
      {isLong && (
        <button
          type="button"
          className={styles.more}
          tabIndex={hidden ? -1 : 0}
          onClick={() => {
            setOpen(!open);
            onToggle(!open);
          }}
        >
          {open ? "Mai puțin" : "Citește tot"}
        </button>
      )}
      <figcaption className={styles.source}>
        Recenzie Google · {LANG_LABEL[review.lang]}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const [openCount, setOpenCount] = useState(0);
  const [touchPaused, setTouchPaused] = useState(false);

  if (reviews.length === 0) return null;

  const paused = openCount > 0 || touchPaused;
  const onToggle = (open: boolean) => setOpenCount((c) => Math.max(0, c + (open ? 1 : -1)));
  const average = GOOGLE_AVERAGE.toFixed(1).replace(".", ",");

  return (
    <section id="testimoniale" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.span
            className="label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            Recenzii
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Serile lor, în cuvintele lor.
          </motion.h2>
        </div>

        <motion.a
          href={GOOGLE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.rating}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className={styles.ratingNumber}>{average}</span>
          <Stars count={Math.round(GOOGLE_AVERAGE)} size={18} />
          <span className={styles.ratingCount}>{GOOGLE_TOTAL} recenzii pe Google</span>
        </motion.a>
      </div>

      <div
        className={`${styles.viewport} ${paused ? styles.paused : ""}`}
        onTouchStart={() => setTouchPaused(true)}
        onTouchEnd={() => setTimeout(() => setTouchPaused(false), 2500)}
      >
        <div
          className={styles.track}
          style={{ animationDuration: `${reviews.length * 9}s` }}
        >
          {reviews.map((r, i) => (
            <ReviewCard key={`a${i}`} review={r} onToggle={onToggle} />
          ))}
          {reviews.map((r, i) => (
            <ReviewCard key={`b${i}`} review={r} hidden onToggle={onToggle} />
          ))}
        </div>
      </div>

      <div className={styles.inner}>
        <p className={styles.note}>
          Toate recenziile cu text de pe profilul nostru Google, nefiltrate, în limba în care au fost scrise.{" "}
          <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className={styles.noteLink}>
            Vezi-le pe Google
          </a>
        </p>
      </div>
    </section>
  );
}
