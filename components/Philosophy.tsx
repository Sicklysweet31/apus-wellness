"use client";

import { motion } from "framer-motion";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Animated gold rule — grows on entry */}
        <motion.span
          className={styles.rule}
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          O seară perfectă nu se planifică.
          <br />
          <em>Se simte.</em>
        </motion.h2>

        <motion.p
          className={styles.body}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          APUS aduce experiența direct la tine — în grădina cabanei tale,
          pe terasa vilei, sub cerul Munților Apuseni. Tu alegi locul.
          Noi aducem restul.
        </motion.p>

        <motion.span
          className={styles.rule}
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        />

      </div>
    </section>
  );
}
