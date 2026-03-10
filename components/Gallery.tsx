"use client";

import { motion } from "framer-motion";
import styles from "./Gallery.module.css";

const gradients = [
  // Large portrait — left
  `radial-gradient(ellipse at 65% 35%, rgba(196, 135, 58, 0.25) 0%, transparent 55%),
   radial-gradient(ellipse at 25% 75%, rgba(176, 92, 56, 0.18) 0%, transparent 45%),
   linear-gradient(155deg, #0a110a 0%, #1C2120 45%, #2D4A3E 80%, #110e0a 100%)`,
  // Top right landscape
  `radial-gradient(ellipse at 50% 30%, rgba(196, 135, 58, 0.2) 0%, transparent 60%),
   linear-gradient(135deg, #111a0f 0%, #1C2120 50%, #2a3828 100%)`,
  // Bottom right landscape
  `radial-gradient(ellipse at 40% 60%, rgba(176, 92, 56, 0.22) 0%, transparent 50%),
   linear-gradient(145deg, #0d1512 0%, #2D4A3E 60%, #1C2120 100%)`,
];

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {/* Large portrait left */}
        <motion.div
          className={`${styles.cell} ${styles.portrait}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div
            className={styles.img}
            style={{ background: gradients[0] }}
          />
        </motion.div>

        {/* Right column — two stacked */}
        <div className={styles.stackedCol}>
          {[1, 2].map((idx) => (
            <motion.div
              key={idx}
              className={`${styles.cell} ${styles.landscape}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              <div
                className={styles.img}
                style={{ background: gradients[idx] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
