"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import heroImg from "@/public/images/hero.jpg";
import { CALL_HREF, WHATSAPP_HREF } from "@/lib/contact";

const badges = [
  {
    text: "Încălzire GPL 35kW",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
    ),
  },
  {
    text: "Igienizare Clinică",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z"/>
      </svg>
    ),
  },
  {
    text: "Montaj Zero Efort",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;
    const onScroll = () => {
      bg.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero} data-place="hero">
      <div ref={bgRef} className={styles.bg}>
        <Image
          src={heroImg}
          alt="Jacuzzi-ul APUS acoperit, pe remorcă, între brazi"
          fill
          priority
          placeholder="blur"
          quality={60}
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          APUS WELLNESS &amp; SPA
        </motion.span>

        <div className={styles.headline}>
          {["Apusul,", "adus", "la tine."].map((word, i) => (
            <motion.span
              key={i}
              className={`${styles.line} ${i === 2 ? styles.lineGold : ""}`}
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.35 + i * 0.18, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          className={styles.sub}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          Livrăm experiența supremă de relaxare direct la ușa sau cabana ta.
          Jacuzzi premium de 9 persoane, cu apă la 38°C.
          Fără logistică complicată, fără efort din partea ta. Tu pui la
          dispoziție locația, noi aducem luxul.
        </motion.p>

        {/* Plain links, no motion: visible at first paint, even on slow 4G */}
        <div className={styles.actions}>
          <a href={CALL_HREF} className="btn-filled-gold">
            Sunați-ne
          </a>
          <a
            href={WHATSAPP_HREF}
            className="btn-outline-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scrieți pe WhatsApp
          </a>
        </div>

        <motion.ul
          className={styles.badges}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.55, ease: "easeOut" }}
        >
          {badges.map((badge) => (
            <li key={badge.text} className={styles.badge}>
              <span className={styles.badgeIcon} aria-hidden="true">
                {badge.icon}
              </span>
              {badge.text}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
