"use client";

import { motion } from "framer-motion";
import styles from "./WhatsIncluded.module.css";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
    ),
    title: "Sistem GPL 35kW",
    body: "Arzătorul GPL de 35kW aduce apa la 38°C în doar 2–3 ore — de câteva ori mai rapid decât un ciubăr clasic. Priza standard de 220V alimentează doar pompa, filtrarea și luminile.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z"/>
      </svg>
    ),
    title: "Igienă clinică",
    body: "Apă igienizată clinic înainte de fiecare experiență și filtrare premium pe toată durata. Intri într-o cadă impecabilă, de fiecare dată.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="2"/>
        <path d="M16 11v-1a2 2 0 0 0-2-2"/>
      </svg>
    ),
    title: "Zero efort logistic",
    body: "Livrăm, instalăm și îți explicăm totul. La final revenim, evacuăm apa în siguranță și strângem echipamentul fără să lăsăm urme. Tu nu te ocupi de nimic.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="12" rx="2"/>
        <path d="M7 8V6a5 5 0 0 1 10 0v2"/>
        <circle cx="12" cy="14" r="1.5"/>
      </svg>
    ),
    title: "Jacuzzi Pelican Bay",
    body: "Premium, 8 persoane. Hidromasaj, lumini ambientale și izolație eficientă a cadei — confort de resort, în curtea ta.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "Suport 24/7",
    body: "Disponibili prin telefon pe toată durata experienței. Ești pe mâini bune.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Experiență personalizată",
    body: "Fiecare ofertă e adaptată locației, grupului și duratei. Nimic standard.",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="experienta" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.span
            className="label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            Servicii
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ce primești cu fiecare experiență
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={styles.feature}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <span className={styles.icon}>{f.icon}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureBody}>{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
