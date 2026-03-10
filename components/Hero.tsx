"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

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
    <section className={styles.hero}>
      <div ref={bgRef} className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          APUS WELLNESS
        </motion.span>

        <div className={styles.headline}>
          {["Apusul,", "adus", "la tine."].map((word, i) => (
            <motion.span
              key={i}
              className={`${styles.line} ${i === 2 ? styles.lineGold : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.18, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
        >
          Experiențe private de wellness livrate oriunde în Munții Apuseni.
        </motion.p>

        <motion.a
          href="#contact"
          className={`btn-outline-gold ${styles.cta}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35, ease: "easeOut" }}
        >
          Rezervă o experiență
        </motion.a>
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
