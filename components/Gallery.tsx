"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";
import drumImg from "@/public/images/story-drum.webp";
import montajImg from "@/public/images/story-montaj.webp";
import searaImg from "@/public/images/story-seara.webp";

const frames = [
  {
    img: drumImg,
    eyebrow: "Drumul",
    caption: "Livrăm oriunde te duce drumul.",
    alt: "Mașină tractând remorca cu jacuzzi-ul APUS peste un pod, pe un drum forestier din Munții Apuseni",
    cellClass: styles.portrait,
  },
  {
    img: montajImg,
    eyebrow: "Montajul",
    caption: "Apa la 38°C în doar 2–3 ore.",
    alt: "Echipa APUS instalând jacuzzi-ul într-o poiană însorită, lângă pădure",
    cellClass: styles.landscape,
  },
  {
    img: searaImg,
    eyebrow: "Seara",
    caption: "Restul serii e al tău.",
    alt: "Jacuzzi luminat noaptea, cu apa strălucind în întuneric",
    cellClass: styles.landscape,
  },
];

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.span
            className="label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            În imagini
          </motion.span>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Tu alegi locul. <em>Noi aducem restul.</em>
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {frames.map((frame, i) => (
            <motion.figure
              key={frame.eyebrow}
              className={`${styles.cell} ${frame.cellClass}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <Image
                src={frame.img}
                alt={frame.alt}
                fill
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.img}
              />
              <figcaption className={styles.caption}>
                <span className={styles.eyebrow}>{frame.eyebrow}</span>
                <span className={styles.captionLine}>{frame.caption}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
