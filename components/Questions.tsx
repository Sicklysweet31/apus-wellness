"use client";

import { motion } from "framer-motion";
import styles from "./Questions.module.css";

// The questions people ask before they book (life-os apus/growth/context.md),
// answered with known facts only. The same list feeds the FAQPage schema below.
export const questions = [
  {
    q: "Funcționează și iarna?",
    a: "Da. Iarna, apa ajunge la 38° în 3–4 ore de la montaj, așa că venim din timp.",
  },
  {
    q: "Ce trebuie să pregătim?",
    a: "Locul, un robinet și o priză. Restul aducem noi.",
  },
  {
    q: "Câți oameni încap?",
    a: "Nouă.",
  },
  {
    q: "Cât costă?",
    a: "Weekendul 1.290 lei (sub 145 lei de persoană dacă sunteți 9), patru zile de luni până joi 990 lei, o seară în timpul săptămânii 800 lei. Până la 30 km de Huedin nu plătiți nimic în plus.",
  },
  {
    q: "Apa e curată?",
    a: "Umplem jacuzzi-ul cu apă nouă pentru fiecare grup, la voi, și îl golim la final.",
  },
  {
    q: "E un ciubăr?",
    a: "Nu. Ciubărul se încălzește pe lemne. Al nostru e jacuzzi cu GPL, adus, umplut și încălzit de noi.",
  },
  {
    q: "Cum rezervăm?",
    a: "Ne sunați sau ne scrieți pe WhatsApp data și locul.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Questions() {
  return (
    <section id="intrebari" className={styles.section}>
      <div className={styles.inner}>
        <motion.span
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Întrebări
        </motion.span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ce ne întreabă lumea înainte să rezerve
        </motion.h2>

        <div className={styles.list}>
          {questions.map(({ q, a }) => (
            <details key={q} className={styles.item}>
              <summary className={styles.q}>
                {q}
                <span className={styles.plus} aria-hidden="true" />
              </summary>
              <p className={styles.a}>{a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
