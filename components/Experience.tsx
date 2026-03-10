"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experienta" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <div className={styles.imagePlaceholder} />
        </motion.div>

        <div className={styles.textSide}>
          <motion.span
            className="label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            Experiența APUS
          </motion.span>

          <motion.span
            className={styles.rule}
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          />

          <motion.h2
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mai mult decât o cadă cu apă caldă.
          </motion.h2>

          {[
            "Abur ridicându-se în aerul rece al muntelui, jeturile reglate exact după tine, 38° care topesc orice grijă — și în jur, natura, muzica și oamenii tăi.",
            "Aceasta este seara în care uiți de telefon. În care oamenii din cada cu tine devin mai apropiați. În care ziua grea a săptămânii se dizolvă complet.",
            "Acesta este apusul, adus la tine.",
          ].map((para, i) => (
            <motion.p
              key={i}
              className={`${styles.body} ${i === 2 ? styles.bodyAccent : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.12 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
