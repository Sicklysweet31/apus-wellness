import { useId } from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  variant?: "full" | "mark" | "nav";
  className?: string;
}

/**
 * APUS Wellness & Spa — lockup
 * Mark: giant sun clipped at the horizon behind three mountains.
 * Wordmark: APUS (serif, gold) · WELLNESS & SPA (sans, warm stone),
 * with a serif-italic gold ampersand.
 */
function Mark({ className }: { className?: string }) {
  const clipId = useId();

  return (
    <svg
      viewBox="0 0 100 58"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="100" height="40" />
        </clipPath>
      </defs>
      <circle cx="50" cy="40" r="28" stroke="#C4873A" strokeWidth="0.8" clipPath={`url(#${clipId})`} />
      <circle cx="50" cy="40" r="21" stroke="#C4873A" strokeWidth="0.35" strokeOpacity="0.28" clipPath={`url(#${clipId})`} />
      <path d="M 0,40  L 20,18 L 36,40 Z"  fill="var(--color-forest-night)" stroke="#C4873A" strokeWidth="0.8" strokeLinejoin="miter" />
      <path d="M 28,40 L 50,8  L 72,40 Z"  fill="var(--color-forest-night)" stroke="#C4873A" strokeWidth="1"   strokeLinejoin="miter" />
      <path d="M 64,40 L 80,18 L 100,40 Z" fill="var(--color-forest-night)" stroke="#C4873A" strokeWidth="0.8" strokeLinejoin="miter" />
    </svg>
  );
}

export default function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "mark") {
    return <Mark className={`${styles.mark} ${className}`} />;
  }

  const sizeClass = variant === "nav" ? styles.lockupNav : styles.lockupFull;

  return (
    <span className={`${styles.lockup} ${sizeClass} ${className}`}>
      <Mark className={styles.lockupMark} />
      <span className={styles.divider} aria-hidden="true" />
      <span className={styles.wordmark}>
        <span className={styles.word}>APUS</span>
        <span className={styles.sub}>
          Wellness <em className={styles.amp}>&</em> Spa
        </span>
      </span>
    </span>
  );
}
