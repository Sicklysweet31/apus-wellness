"use client";

import { motion } from "framer-motion";
import styles from "./WhatWeDo.module.css";

const cards = [
  {
    number: "01",
    title: "Ne spuneți data și locul",
    body: "Ne sunați sau ne scrieți pe WhatsApp. Vă spunem dacă data e liberă și ce trebuie pregătit: un robinet și o priză.",
  },
  {
    number: "02",
    title: "Noi aducem și încălzim",
    body: "Nu e un ciubăr pe lemne: e jacuzzi cu GPL, adus, umplut și încălzit de noi, cu apă nouă pentru fiecare grup. Iarna, încălzirea durează 3–4 ore, așa că venim din timp.",
  },
  {
    number: "03",
    title: "Voi vă bucurați de seară",
    body: "Stați în apă la 38°, cu jeturile și luminile pornite. Nu puneți pe foc și nu cărați lemne. La final golim apa și strângem tot, fără să lăsăm urme.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="servicii" className={styles.section}>
      <div className={styles.header}>
        <motion.span
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Cum funcționează
        </motion.span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ritualul
        </motion.h2>
      </div>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <motion.div
            key={card.number}
            className={styles.card}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{ y: -4 }}
          >
            <span className={styles.number}>{card.number}</span>
            <span className="gold-rule" />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardBody}>{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
