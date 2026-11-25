"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";
import drumImg from "@/public/images/story-drum.webp";
import montajImg from "@/public/images/story-montaj.webp";
import searaImg from "@/public/images/story-seara.webp";
import searaAurieImg from "@/public/images/album/seara-aurie.webp";
import drumMunteImg from "@/public/images/album/drum-munte.webp";
import apusPergolaImg from "@/public/images/album/apus-pergola.webp";
import searaBraziImg from "@/public/images/album/seara-brazi.webp";
import drumPlatouImg from "@/public/images/album/drum-platou.webp";
import searaFoisorImg from "@/public/images/album/seara-foisor.webp";
import ziMesteceniImg from "@/public/images/album/zi-mesteceni.webp";

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
    caption: "Apa la 38°, fără lemne și fără foc.",
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

// Real photos from the APUS album (apus-album/inbox), no faces, plates blurred.
// The order fills a 3-column grid on desktop: portraits span two rows.
const album = [
  {
    img: searaAurieImg,
    alt: "Jacuzzi-ul APUS noaptea, cu apa luminată în auriu și roz",
    shape: "landscape",
  },
  {
    img: drumMunteImg,
    alt: "Land Rover-ul tractând remorca cu jacuzzi-ul pe un drum de țară, cu lan de porumb și munți în spate",
    shape: "landscape",
  },
  {
    img: apusPergolaImg,
    alt: "Jacuzzi cu apa limpede sub o pergolă de lemn, la apus",
    shape: "portrait",
  },
  {
    img: searaBraziImg,
    alt: "Jacuzzi cu apa portocalie noaptea, sub brazi înalți",
    shape: "portrait",
  },
  {
    img: drumPlatouImg,
    alt: "Land Rover-ul și remorca cu jacuzzi-ul pe un drum de platou, între molizi",
    shape: "landscape",
  },
  {
    img: searaFoisorImg,
    alt: "Jacuzzi cu apa galbenă noaptea, lângă un foișor, cu brazi în spate",
    shape: "landscape",
  },
  {
    img: ziMesteceniImg,
    alt: "Jacuzzi deschis lângă un gard de lemn, între mesteceni, într-o zi însorită de toamnă",
    shape: "landscape",
  },
] as const;

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

        <span className={`label ${styles.albumLabel}`}>Din albumul nostru</span>
        <div className={styles.album}>
          {album.map((shot) => (
            <figure
              key={shot.img.src}
              className={`${styles.shot} ${
                shot.shape === "portrait" ? styles.shotPortrait : styles.shotLandscape
              }`}
            >
              <Image
                src={shot.img}
                alt={shot.alt}
                fill
                placeholder="blur"
                sizes="(max-width: 768px) 85vw, 360px"
                className={styles.img}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
