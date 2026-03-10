"use client";

import { useState } from "react";
import Logo from "./Logo";
import styles from "./Footer.module.css";

const langs = ["RO", "HU", "EN"] as const;

export default function Footer() {
  const [activeLang, setActiveLang] = useState<typeof langs[number]>("RO");

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Left col */}
        <div className={styles.colLeft}>
          <Logo variant="full" className={styles.logo} />
          <p className={styles.tagline}>Apusul, adus la tine.</p>
        </div>

        {/* Right col */}
        <div className={styles.colRight}>
          <nav className={styles.footerNav}>
            {["#servicii", "#experienta", "#preturi", "#contact"].map((href, i) => (
              <a
                key={href}
                href={href}
                className={styles.navLink}
              >
                {["Servicii", "Experiență", "Prețuri", "Contact"][i]}
              </a>
            ))}
          </nav>

          {/* Language switcher */}
          <div className={styles.langSwitch}>
            {langs.map((lang) => (
              <button
                key={lang}
                className={`${styles.langBtn} ${activeLang === lang ? styles.langActive : ""}`}
                onClick={() => setActiveLang(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} APUS Wellness · Munții Apuseni, România
        </span>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ig}
          aria-label="Instagram"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
