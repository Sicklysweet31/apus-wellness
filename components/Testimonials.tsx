"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

/*
 * SOCIAL PROOF — structură pregătită, ascunsă până există conținut real.
 *
 * Cum se activează:
 *  1. Adaugă 3–5 testimoniale reale în `testimonials` (quote, name, location).
 *  2. Pune pozele reale în /public/gallery/ și adaugă-le în `photos`
 *     (src, alt descriptiv, width/height reale ale fișierului).
 * Componenta se afișează automat de îndată ce există conținut.
 * NU adăuga testimoniale inventate.
 */

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const testimonials: Testimonial[] = [];

const photos: Photo[] = [];

export default function Testimonials() {
  if (testimonials.length === 0 && photos.length === 0) return null;

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
            Testimoniale
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

        {testimonials.length > 0 && (
          <div className={styles.quotes}>
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name + t.location}
                className={styles.quoteCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              >
                <blockquote className={styles.quote}>„{t.quote}"</blockquote>
                <figcaption className={styles.attribution}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.location}>{t.location}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}

        {photos.length > 0 && (
          <div className={styles.photoGrid}>
            {photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                className={styles.photoCell}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className={styles.photo}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
