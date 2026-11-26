"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import heroImg from "@/public/images/hero.jpg";
import { CALL_HREF, WHATSAPP_HREF } from "@/lib/contact";
import { GOOGLE_TOTAL, GOOGLE_AVERAGE, GOOGLE_PROFILE_URL, heroQuotes } from "./reviews";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [quote, setQuote] = useState(0);
  const still = useReducedMotion();

  // One review at a time, a new one every 7 seconds (none when motion is reduced)
  useEffect(() => {
    if (still || heroQuotes.length < 2) return;
    const t = window.setInterval(() => setQuote((q) => (q + 1) % heroQuotes.length), 7000);
    return () => window.clearInterval(t);
  }, [still]);

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
          JACUZZI DE ÎNCHIRIAT · ZONA HUEDIN
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
          Un jacuzzi de 9 persoane, adus la casa sau la cabana voastră, pentru seara
          în care stați toți împreună, fără telefoane. Noi livrăm, montăm, umplem
          cu apă și încălzim.
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

        {/* The price next to the buttons, where the decision happens */}
        <p className={styles.price}>
          Weekendul: 1.290 lei
          <br />
          sub 145 lei de persoană dacă sunteți 9
        </p>

        {/* A real review on the first screen; a tap goes to all of them */}
        {heroQuotes.length > 0 && (
          <div className={styles.quote}>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.proof}
            >
              {GOOGLE_AVERAGE.toFixed(1).replace(".", ",")}{" "}
              <span className={styles.star} aria-hidden="true">★★★★★</span> · {GOOGLE_TOTAL} recenzii pe Google
            </a>
            <a href="#testimoniale" className={styles.quoteLink} aria-label="Citește toate recenziile">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={quote}
                className={styles.quoteBody}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className={styles.quoteText}>
                  {/* non-breaking hyphen on screen only: "m-am" stays on one line */}
                  „{heroQuotes[quote].text.replace(/-/g, "‑")}”
                </span>
                <span className={styles.quoteName}>{heroQuotes[quote].name} · Google</span>
              </motion.span>
            </AnimatePresence>
            </a>
          </div>
        )}
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
