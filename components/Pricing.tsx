"use client";

import { motion } from "framer-motion";
import styles from "./Pricing.module.css";
import { whatsappWith } from "@/lib/contact";

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
  ask: string;
}[] = [
  {
    tier: "featured",
    name: "Weekendul întreg",
    price: "1.290",
    availability: "Vineri–duminică sau luni",
    topChip: "Premium",
    badge: "Sub 145 lei de persoană dacă sunteți 9",
    recommended: [
      "Ziua cuiva drag, cu toți prietenii",
      "Un weekend cu prietenii, acasă sau la cabană",
      "Sărbătorile acasă",
    ],
    includes: [
      "Jacuzzi de 9 persoane, cu jeturi și lumini",
      "Încălzire cu GPL, fără lemne și fără foc",
      "Apă nouă, umplută la voi",
      "Livrare, montaj și strângere",
    ],
    ask: "Am văzut site-ul. Vreau weekendul întreg. Este liber pe data de ",
  },
  {
    tier: "mat",
    name: "Patru zile, de luni până joi",
    price: "990",
    availability: "Luni–joi · 4 zile",
    badge: "Cu 190 lei mai mult decât o seară, îl aveți patru zile.",
    recommended: ["Serile de după muncă, cu familia"],
    includes: ["Tot ce are weekendul"],
    ask: "Am văzut site-ul. Vreau patru zile, de luni până joi. Sunt libere zilele de ",
  },
  {
    tier: "mat",
    name: "O seară în timpul săptămânii",
    price: "800",
    availability: "Luni–joi · 24 de ore",
    recommended: [
      "O surpriză în doi",
      "O zi de naștere în mijlocul săptămânii",
    ],
    includes: ["Tot ce are weekendul"],
    ask: "Am văzut site-ul. Vreau o seară în timpul săptămânii, pe data de ",
  },
];

const tierClass: Record<Tier, string> = {
  mat: styles.cardMat,
  featured: styles.cardFeatured,
  vip: styles.cardVip,
};

export default function Pricing() {
  return (
    <section id="preturi" className={styles.section} data-place="preturi">
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
          <motion.p
            className={styles.includesAll}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Prețul include livrarea, montajul, încălzirea cu GPL și strângerea,
            până la 30 km de Huedin.
          </motion.p>
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
                href={whatsappWith(plan.ask)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  plan.tier === "featured" ? "btn-filled-gold" : "btn-outline-gold"
                } ${styles.btn}`}
              >
                Întrebați de o dată
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
          Pentru locații la peste 30 km de Huedin se adaugă o taxă de transport.
        </motion.p>
      </div>
    </section>
  );
}
