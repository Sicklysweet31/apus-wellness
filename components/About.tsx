"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left — large pull quote */}
        <motion.blockquote
          className={styles.quote}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          „Am crescut în Munții Apuseni. Știm cum arată un apus perfect."
        </motion.blockquote>

        {/* Right — story text */}
        <div className={styles.textSide}>
          <motion.span
            className="label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            Povestea noastră
          </motion.span>

          <motion.span
            className={styles.rule}
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          />

          {[
            "APUS Wellness este o afacere de familie fondată de Tată și Fiu în inima Munților Apuseni din Transilvania.",
            "Numele nostru poartă două semnificații: munții care ne-au format și apusul — momentul zilei în care oamenii devin mai autentici, mai prezenți, mai apropiați.",
            "Misiunea noastră este simplă: să aducem acel moment la tine, oriunde ai fi, fără să te ocupi de nimic.",
          ].map((para, i) => (
            <motion.p
              key={i}
              className={styles.body}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
