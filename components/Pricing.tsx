"use client";

import { motion } from "framer-motion";
import styles from "./Pricing.module.css";

const plans = [
  {
    label: "O Zi",
    price: "600",
    unit: "lei",
    desc: "Experiența completă pentru o zi",
    features: ["Livrare & instalare", "Suport pe toată durata", "Colectare & curățare"],
  },
  {
    label: "2 Zile",
    price: "500",
    unit: "lei / zi",
    desc: "Discount pentru weekenduri și retreate",
    features: ["Livrare & instalare", "Suport pe toată durata", "Colectare & curățare"],
  },
  {
    label: "Peste 2 Zile",
    price: "450",
    unit: "lei / zi",
    desc: "Cel mai bun raport pentru vacanțe extinse",
    features: ["Livrare & instalare", "Suport pe toată durata", "Colectare & curățare"],
  },
];

export default function Pricing() {
  return (
    <section id="preturi" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.span
            className="label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            Prețuri
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Prețuri clare, fără surprize.
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fiecare experiență este personalizată în funcție de locație, durată și mărimea grupului.
          </motion.p>
        </div>

        <div className={styles.cards}>
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <span className={styles.cardLabel}>{plan.label}</span>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                {plan.unit && <span className={styles.unit}>{plan.unit}</span>}
              </div>
              <p className={styles.cardDesc}>{plan.desc}</p>
              <ul className={styles.featureList}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.dot} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn-outline-gold ${styles.btn}`}>
                Solicită ofertă
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Prețurile afișate sunt orientative — pot fi mai mici sau mai mari în funcție de cerințe.
          Distanța, numărul de persoane și serviciile adiționale influențează prețul final.
          Suntem transparenți în orice ofertă.
        </motion.p>
      </div>
    </section>
  );
}
