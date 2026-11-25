"use client";

import { motion } from "framer-motion";
import styles from "./Requirements.module.css";

const requirements = [
  "Acces plan, lat de cel puțin 2,40 m, până la locul jacuzzi-ului.",
  "Un robinet: îl umplem cu apa voastră, cam 1.800 de litri.",
  "O priză obișnuită de 220 V, pentru pompă, filtrare și lumini.",
];

export default function Requirements() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.span
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Înainte de rezervare
        </motion.span>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          De ce aveți nevoie
        </motion.h2>

        <ol className={styles.list}>
          {requirements.map((req, i) => (
            <motion.li
              key={req}
              className={styles.item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
            >
              <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.text}>{req}</span>
            </motion.li>
          ))}
        </ol>

        <motion.p
          className={styles.footnote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Peste 30 km de Huedin se adaugă o taxă de transport.
        </motion.p>
      </div>
    </section>
  );
}
