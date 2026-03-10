"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const contacts = [
  { name: "Mark", number: "+40 744 244 255", tel: "tel:+40744244255" },
  { name: "Istvan", number: "+40 752 344 744", tel: "tel:+40752344744" },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <motion.span
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ display: "block", marginBottom: "1.5rem" }}
        >
          Contact
        </motion.span>

        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Spune-ne despre seara ta.
        </motion.h2>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Locație. Dată. Număr de persoane. Atât.
          <br />Noi facem restul.
        </motion.p>

        {/* Minimal form */}
        <motion.form
          className={styles.form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { label: "Numele tău", type: "text", placeholder: "Mark" },
            { label: "Locația", type: "text", placeholder: "Cabana din Apuseni..." },
            { label: "Data dorită", type: "text", placeholder: "Sâmbătă, 12 Iulie" },
            { label: "Numărul tău", type: "tel", placeholder: "+40 7XX XXX XXX" },
          ].map((field) => (
            <div key={field.label} className={styles.field}>
              <label className={styles.fieldLabel}>{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className={styles.input}
              />
            </div>
          ))}

          <button type="submit" className={`btn-filled-gold ${styles.submitBtn}`}>
            Trimite →
          </button>
        </motion.form>

        {/* Phone fallback */}
        <motion.div
          className={styles.phoneRow}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className={styles.phoneLabel}>Sau sună direct:</span>
          <div className={styles.phoneNumbers}>
            {contacts.map((c) => (
              <div key={c.name} className={styles.phoneEntry}>
                <span className={styles.personName}>{c.name}</span>
                <a href={c.tel} className={styles.phone}>{c.number}</a>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
