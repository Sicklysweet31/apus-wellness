"use client";

import { motion } from "framer-motion";
import styles from "./Pricing.module.css";

type Tier = "mat" | "featured" | "vip";

const plans: {
  tier: Tier;
  name: string;
  price: string;
  availability: string;
  recommended: string[];
  includes: string[];
  badge?: string;
  topChip?: string;
}[] = [
  {
    tier: "mat",
    name: "One-Day Escape",
    price: "800",
    availability: "Exclusiv Luni–Joi · 24 ore",
    recommended: [
      "O surpriză romantică în cuplu",
      "O seară de deconectare după birou",
      "O aniversare intimă în timpul săptămânii",
    ],
    includes: [
      "Jacuzzi Pelican Bay 8 pers.",
      "Încălzire rapidă GPL 35kW",
      "Igienizare clinică",
      "Montaj Zero Efort",
    ],
  },
  {
    tier: "featured",
    name: "Mid-Week Retreat",
    price: "990",
    availability: "Exclusiv Luni–Joi · 4 Zile / 3 Nopți",
    topChip: "★ Best Value",
    recommended: [
      "Deconectare zilnică după muncă",
      "Profesioniști remote (Work from Home & Spa)",
      "Familii sau grupuri care caută relaxare prelungită la munte",
    ],
    includes: [
      "Tot ce conține pachetul de o zi",
      "Kit simplu de menținere a apei",
    ],
    badge: "Adaugi doar 190 lei pentru încă 3 zile complete de relaxare!",
  },
  {
    tier: "vip",
    name: "Weekend Resort Premium",
    price: "1.390",
    availability: "Vineri–Duminică/Luni · tot weekend-ul",
    topChip: "Premium",
    recommended: [
      "Petreceri private",
      "Aniversări cu mulți invitați",
      "Evenimente memorabile la cabane",
    ],
    includes: [
      "Set-up complet premium",
      "Pachet Ambiance (Boxă premium, Lumini)",
      "Pachet Hospitality (Frapieră cu pahare)",
      "Surpriză de bun-venit",
      "Suport non-stop",
    ],
  },
];

const tierClass: Record<Tier, string> = {
  mat: styles.cardMat,
  featured: styles.cardFeatured,
  vip: styles.cardVip,
};

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
            Pachete
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
        </div>

        <div className={styles.cards}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${tierClass[plan.tier]}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {plan.topChip && (
                <span
                  className={`${styles.topChip} ${
                    plan.tier === "vip" ? styles.topChipVip : ""
                  }`}
                >
                  {plan.topChip}
                </span>
              )}

              <span className={styles.cardLabel}>{plan.name}</span>

              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.unit}>RON</span>
              </div>

              <p className={styles.availability}>{plan.availability}</p>

              {plan.badge && <p className={styles.savingsBadge}>{plan.badge}</p>}

              <div className={styles.listBlock}>
                <span className={styles.listTitle}>Recomandat pentru</span>
                <ul className={styles.featureList}>
                  {plan.recommended.map((r) => (
                    <li key={r} className={styles.featureItem}>
                      <span className={styles.dot} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.listBlock} ${styles.listBlockGrow}`}>
                <span className={styles.listTitle}>Include</span>
                <ul className={styles.featureList}>
                  {plan.includes.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.dot} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`${
                  plan.tier === "featured" ? "btn-filled-gold" : "btn-outline-gold"
                } ${styles.btn}`}
              >
                Rezervă Pachetul
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
          Toate pachetele includ livrare, montaj, igienizare și colectare.
          Pentru locații la peste 30 km de Huedin se adaugă o taxă de transport.
        </motion.p>
      </div>
    </section>
  );
}
