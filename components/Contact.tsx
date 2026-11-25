"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.css";
import { WHATSAPP_HREF } from "@/lib/contact";
import { track } from "@/lib/clarity";

const contacts = [
  { name: "Mark", number: "+40 744 244 255", tel: "tel:+40744244255" },
  { name: "Istvan", number: "+40 752 344 744", tel: "tel:+40752344744" },
];

const socials = [
  {
    name: "WhatsApp",
    href: WHATSAPP_HREF,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/apuswellness",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/apuswellness",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

const packages = [
  "One-Day Escape",
  "Mid-Week Retreat",
  "Weekend Resort Premium",
];

const fields = [
  { key: "name", label: "Nume și Prenume", type: "text", placeholder: "Numele complet" },
  { key: "phone", label: "Telefon (WhatsApp)", type: "tel", placeholder: "+40 7XX XXX XXX" },
  { key: "package", label: "Pachetul Dorit", type: "select", placeholder: "Alege pachetul" },
  { key: "location", label: "Locația Evenimentului (Comuna/Localitatea)", type: "text", placeholder: "Mărișel, Cluj" },
  { key: "period", label: "Perioada dorită", type: "text", placeholder: "12–14 Iulie" },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    package: "",
    location: "",
    period: "",
    company: "", // honeypot — stays empty for real users
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot — a bot filled the hidden field. Fake success, send nothing.
    if (values.company) {
      setFormState("success");
      setValues({ name: "", phone: "", package: "", location: "", period: "", company: "" });
      return;
    }

    setFormState("loading");
    setErrorMsg("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrorMsg("Formularul nu este configurat încă. Sună-ne direct.");
      setFormState("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Rezervare nouă APUS — ${values.package}`,
          from_name: "APUS Wellness & Spa",
          Nume: values.name,
          Telefon: values.phone,
          Pachet: values.package,
          Locație: values.location,
          Perioadă: values.period,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setFormState("success");
        track("formular_trimis");
        setValues({ name: "", phone: "", package: "", location: "", period: "", company: "" });
      } else {
        setErrorMsg("A apărut o eroare. Încearcă din nou.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Nu am putut trimite mesajul. Verifică conexiunea.");
      setFormState("error");
    }
  }

  return (
    <section id="contact" className={styles.section} data-place="contact">
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
          Pachet. Locație. Perioadă. Atât.
          <br />Noi facem restul.
        </motion.p>

        <AnimatePresence mode="wait">
          {formState === "success" ? (
            <motion.div
              key="success"
              className={styles.successMsg}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span>Mulțumim! Vă vom contacta în curând.</span>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className={styles.form}
              data-clarity-mask="true"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              onSubmit={handleSubmit}
            >
              {/* Honeypot — hidden from users, tempts bots */}
              <input
                type="text"
                name="company"
                className={styles.honeypot}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={values.company}
                onChange={(e) =>
                  setValues((prev) => ({ ...prev, company: e.target.value }))
                }
              />

              {fields.map((field) => (
                <div key={field.key} className={styles.field}>
                  <label className={styles.fieldLabel} htmlFor={`contact-${field.key}`}>
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={`contact-${field.key}`}
                      className={`${styles.input} ${styles.select} ${
                        values.package === "" ? styles.selectEmpty : ""
                      }`}
                      value={values.package}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, package: e.target.value }))
                      }
                      required
                      disabled={formState === "loading"}
                    >
                      <option value="" disabled>
                        {field.placeholder}
                      </option>
                      {packages.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={`contact-${field.key}`}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={styles.input}
                      value={values[field.key as keyof typeof values]}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, [field.key]: e.target.value }))
                      }
                      required
                      disabled={formState === "loading"}
                    />
                  )}
                </div>
              ))}

              {formState === "error" && (
                <p className={styles.errorMsg}>{errorMsg}</p>
              )}

              <button
                type="submit"
                className={`btn-filled-gold ${styles.submitBtn}`}
                disabled={formState === "loading"}
              >
                {formState === "loading" ? "Se trimite..." : "Verifică Disponibilitatea"}
              </button>

              <p className={styles.microCopy}>
                Te vom contacta în cel mai scurt timp pentru a confirma
                disponibilitatea echipamentului și detaliile logistice de acces.
              </p>
            </motion.form>
          )}
        </AnimatePresence>

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

          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
