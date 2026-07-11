"use client";

import { motion } from "framer-motion";
import styles from "./WhatWeDo.module.css";

const cards = [
  {
    number: "01",
    title: "Alegi locația",
    body: "Fie că este curtea casei tale sau o cabană retrasă, avem nevoie doar de o sursă de apă și o priză standard de 220V pentru pompă, filtrare și lumini. De restul ne ocupăm noi.",
  },
  {
    number: "02",
    title: "Montaj Ultra-Rapid",
    body: "Spre deosebire de ciubărele clasice care se încălzesc greu, arzătorul nostru GPL de 35kW aduce apa la 38°C în doar 2–3 ore. Montajul este 100% sigur pentru proprietatea ta.",
  },
  {
    number: "03",
    title: "Zero Efort",
    body: "Te bucuri de hidromasaj și lumini ambientale alături de invitați. La final, noi evacuăm apa în siguranță și strângem echipamentul fără să lăsăm urme.",
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
