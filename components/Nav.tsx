"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <a href="#" className={styles.wordmark}>
          <Logo variant="nav" />
        </a>
        <ul className={styles.links}>
          <li><a href="#servicii" className={styles.link}>Servicii</a></li>
          <li><a href="#experienta" className={styles.link}>Experiență</a></li>
          <li><a href="#preturi" className={styles.link}>Prețuri</a></li>
          <li><a href="#contact" className={styles.link}>Contact</a></li>
        </ul>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Deschide meniu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}>
        <div className={styles.overlayLogo}>
          <Logo variant="full" />
        </div>
        <ul className={styles.overlayLinks}>
          <li><a href="#servicii" className={styles.overlayLink} onClick={closeMenu}>Servicii</a></li>
          <li><a href="#experienta" className={styles.overlayLink} onClick={closeMenu}>Experiență</a></li>
          <li><a href="#preturi" className={styles.overlayLink} onClick={closeMenu}>Prețuri</a></li>
          <li><a href="#contact" className={styles.overlayLink} onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
}
