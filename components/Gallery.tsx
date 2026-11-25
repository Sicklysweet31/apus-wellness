"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";
import drumImg from "@/public/images/story-drum.webp";
import montajImg from "@/public/images/story-montaj.webp";
import searaImg from "@/public/images/story-seara.webp";
import searaAburImg from "@/public/images/album/seara-abur.webp";
import cabanaToamnaImg from "@/public/images/album/cabana-toamna.webp";
import drumMunteImg from "@/public/images/album/drum-munte.webp";
import searaBraziImg from "@/public/images/album/seara-brazi.webp";
import sosireCabanaImg from "@/public/images/album/sosire-cabana.webp";
import searaAurieImg from "@/public/images/album/seara-aurie.webp";
import artarRosuImg from "@/public/images/album/artar-rosu.webp";
import apusPergolaImg from "@/public/images/album/apus-pergola.webp";
import buleUmbrelaImg from "@/public/images/album/bule-umbrela.webp";
import drumPlatouImg from "@/public/images/album/drum-platou.webp";
import jeturiMesteceniImg from "@/public/images/album/jeturi-mesteceni.webp";

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

// Real photos from the APUS album (apus-album/inbox): no faces, plates blurred.
// The order fills a 3-column, 5-row grid on desktop (portraits span two rows):
// keep 4 portraits in slots 1, 4, 7 and 8, or the grid leaves holes.
const album = [
  {
    img: searaAburImg,
    alt: "Jacuzzi luminat la ora albastră, cu abur peste apă, în curtea unei pensiuni, cu turla bisericii din sat luminată în spate",
    shape: "portrait",
  },
  {
    img: cabanaToamnaImg,
    alt: "Jacuzzi deschis cu jeturile pornite în fața unei cabane, între mesteceni aurii, toamna",
    shape: "landscape",
  },
  {
    img: drumMunteImg,
    alt: "Land Rover-ul tractând remorca cu jacuzzi-ul pe un drum de țară, cu lan de porumb și munți în spate",
    shape: "landscape",
  },
  {
    img: searaBraziImg,
    alt: "Jacuzzi cu apa portocalie noaptea, sub brazi înalți",
    shape: "portrait",
  },
  {
    img: sosireCabanaImg,
    alt: "Land Rover-ul și remorca cu jacuzzi-ul, ajunse pe gazonul din fața cabanei",
    shape: "landscape",
  },
  {
    img: searaAurieImg,
    alt: "Jacuzzi-ul noaptea, cu apa luminată în auriu și roz",
    shape: "landscape",
  },
  {
    img: artarRosuImg,
    alt: "Remorca cu jacuzzi-ul văzută printre frunze roșii de arțar japonez",
    shape: "portrait",
  },
  {
    img: apusPergolaImg,
    alt: "Jacuzzi cu apa limpede sub o pergolă de lemn, la apus",
    shape: "portrait",
  },
  {
    img: buleUmbrelaImg,
    alt: "Apa cu bule în jacuzzi, sub umbrelă, cu pridvorul cabanei și copaci aurii în spate",
    shape: "landscape",
  },
  {
    img: drumPlatouImg,
    alt: "Remorca cu jacuzzi-ul și Land Rover-ul pe platou, cu munții la orizont",
    shape: "landscape",
  },
  {
    img: jeturiMesteceniImg,
    alt: "Jacuzzi cu jeturile pornite sub umbrelă, lângă cabană, cu mesteceni aurii",
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
