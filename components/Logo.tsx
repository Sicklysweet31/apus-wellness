import styles from "./Logo.module.css";

interface LogoProps {
  variant?: "full" | "mark" | "nav";
  className?: string;
}

/**
 * APUS Wellness Logo — 04: Three Mountains + Giant Sun
 * A massive sun behind three mountain silhouettes (solid fill = bg color).
 * Center mountain is tallest. Sun clipped at horizon.
 */
export default function Logo({ variant = "full", className = "" }: LogoProps) {

  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 100 58"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.mark} ${className}`}
        aria-label="APUS mark"
        fill="none"
      >
        <defs>
          <clipPath id="sun-clip-mark">
            <rect x="0" y="0" width="100" height="40" />
          </clipPath>
        </defs>
        <circle cx="50" cy="40" r="28" stroke="#C4873A" strokeWidth="0.8" clipPath="url(#sun-clip-mark)" />
        <circle cx="50" cy="40" r="21" stroke="#C4873A" strokeWidth="0.35" strokeOpacity="0.28" clipPath="url(#sun-clip-mark)" />
        <path d="M 0,40  L 20,18 L 36,40 Z"  fill="#1C2120" stroke="#C4873A" strokeWidth="0.8"  strokeLinejoin="miter" />
        <path d="M 28,40 L 50,8  L 72,40 Z"  fill="#1C2120" stroke="#C4873A" strokeWidth="1"    strokeLinejoin="miter" />
        <path d="M 64,40 L 80,18 L 100,40 Z" fill="#1C2120" stroke="#C4873A" strokeWidth="0.8"  strokeLinejoin="miter" />
      </svg>
    );
  }

  if (variant === "nav") {
    return (
      <svg
        viewBox="0 0 210 32"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.nav} ${className}`}
        aria-label="APUS Wellness"
        fill="none"
      >
        <defs>
          <clipPath id="sun-clip-nav">
            <rect x="0" y="0" width="36" height="22" />
          </clipPath>
        </defs>
        <circle cx="18" cy="22" r="14" stroke="#C4873A" strokeWidth="0.7"  clipPath="url(#sun-clip-nav)" />
        <circle cx="18" cy="22" r="10" stroke="#C4873A" strokeWidth="0.3"  strokeOpacity="0.28" clipPath="url(#sun-clip-nav)" />
        <path d="M 0,22  L 7,12  L 13,22 Z" fill="#1C2120" stroke="#C4873A" strokeWidth="0.7"  strokeLinejoin="miter" />
        <path d="M 10,22 L 18,4  L 26,22 Z" fill="#1C2120" stroke="#C4873A" strokeWidth="0.85" strokeLinejoin="miter" />
        <path d="M 23,22 L 29,12 L 36,22 Z" fill="#1C2120" stroke="#C4873A" strokeWidth="0.7"  strokeLinejoin="miter" />

        <line x1="46" y1="5" x2="46" y2="27" stroke="#C4873A" strokeWidth="0.4" strokeOpacity="0.35" />

        <text x="58" y="22" fontFamily="'Cormorant Garamond', serif" fontWeight="400" fontSize="19" letterSpacing="6" fill="#C4873A">
          APUS
        </text>
        {/* Thin separator dot between APUS and WELLNESS */}
        <circle cx="120" cy="22" r="1" fill="#C4873A" fillOpacity="0.35" />
        <text x="128" y="22" fontFamily="'Jost', sans-serif" fontWeight="300" fontSize="7" letterSpacing="4" fill="#8B7355">
          WELLNESS
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 118"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.full} ${className}`}
      aria-label="APUS Wellness"
      fill="none"
    >
      <defs>
        <clipPath id="sun-clip-full">
          <rect x="0" y="0" width="200" height="64" />
        </clipPath>
      </defs>

      {/* Giant sun */}
      <circle cx="100" cy="64" r="48" stroke="#C4873A" strokeWidth="0.85" clipPath="url(#sun-clip-full)" />
      <circle cx="100" cy="64" r="37" stroke="#C4873A" strokeWidth="0.35" strokeOpacity="0.25" clipPath="url(#sun-clip-full)" />

      {/* Three mountains — solid, block the sun */}
      <path d="M 0,64   L 40,28  L 70,64 Z"   fill="#1C2120" stroke="#C4873A" strokeWidth="0.95" strokeLinejoin="miter" />
      <path d="M 56,64  L 100,8  L 144,64 Z"  fill="#1C2120" stroke="#C4873A" strokeWidth="1.15" strokeLinejoin="miter" />
      <path d="M 130,64 L 160,28 L 200,64 Z"  fill="#1C2120" stroke="#C4873A" strokeWidth="0.95" strokeLinejoin="miter" />

      <line x1="0" y1="64" x2="200" y2="64" stroke="#C4873A" strokeWidth="0.4" strokeOpacity="0.18" />

      <text x="96" y="88" fontFamily="'Cormorant Garamond', serif" fontWeight="300" fontSize="24" letterSpacing="9" fill="#C4873A" textAnchor="middle">
        APUS
      </text>
      <text x="97.5" y="103" fontFamily="'Jost', sans-serif" fontWeight="300" fontSize="7.5" letterSpacing="5" fill="#8B7355" textAnchor="middle">
        WELLNESS
      </text>
    </svg>
  );
}
