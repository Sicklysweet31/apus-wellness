"use client";

import type { CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";
import drumPadureImg from "@/public/images/story-drum.webp";
import searaAlbastraImg from "@/public/images/album/seara-albastra.webp";
import cabanaToamnaImg from "@/public/images/album/cabana-toamna.webp";
import drumMunteImg from "@/public/images/album/drum-munte.webp";
import varaCampImg from "@/public/images/album/vara-camp.webp";
import sosireCabanaImg from "@/public/images/album/sosire-cabana.webp";
import artarRosuImg from "@/public/images/album/artar-rosu.webp";
import searaBraziImg from "@/public/images/album/seara-brazi.webp";
import buleUmbrelaImg from "@/public/images/album/bule-umbrela.webp";
import apusPergolaImg from "@/public/images/album/apus-pergola.webp";
import searaFelinarImg from "@/public/images/album/seara-felinar.webp";
import varaBuleImg from "@/public/images/album/vara-bule.webp";

// Real photos from the APUS album (apus-album/inbox): no faces, plates blurred.
// The gallery tells one rental in three chapters: the road, the place, the evening.
//
// Desktop: each chapter is a 12-column grid of square modules (rows as tall as a
// column is wide). `area` is the CSS grid-area (row-start / col-start / row-end /
// col-end); the spans are picked so each crop stays close to the photo's own shape
// (landscape 8x6 or 5x4 or 4x3, portrait 4x6 or 3x4 or 6x8). Every chapter is a full
// rectangle: the chapter's words fill the one cell no photo takes.
// Phone: the words, the lead photo, then the others in a swipe row.

type Shot = {
  img: StaticImageData;
  alt: string;
  shape: "portrait" | "landscape";
  area: string;
};

type Chapter = {
  numeral: string;
  title: string;
  line: string;
  textArea: string;
  lead: Shot;
  rest: Shot[];
};

const chapters: Chapter[] = [
  {
    numeral: "I",
    title: "Drumul",
    line: "Livrăm oriunde te duce drumul.",
    textArea: "7 / 1 / 11 / 5",
    lead: {
      img: drumMunteImg,
      alt: "Land Rover-ul tractând remorca cu jacuzzi-ul pe un drum de țară, cu lan de porumb și munți în spate",
      shape: "landscape",
      area: "1 / 1 / 7 / 9",
    },
    rest: [
      {
        img: drumPadureImg,
        alt: "Mașină tractând remorca cu jacuzzi-ul APUS peste un pod, pe un drum forestier din Munții Apuseni",
        shape: "portrait",
        area: "1 / 9 / 7 / 13",
      },
      {
        img: sosireCabanaImg,
        alt: "Land Rover-ul și remorca cu jacuzzi-ul, ajunse pe gazonul din fața cabanei",
        shape: "landscape",
        area: "7 / 5 / 11 / 10",
      },
      {
        img: artarRosuImg,
        alt: "Remorca cu jacuzzi-ul în curtea unei vile, cu câteva frunze roșii de arțar în prim-plan",
        shape: "portrait",
        area: "7 / 10 / 11 / 13",
      },
    ],
  },
  {
    numeral: "II",
    title: "Locul",
    line: "Apa la 38°, fără lemne și fără foc.",
    textArea: "7 / 9 / 10 / 13",
    lead: {
      img: cabanaToamnaImg,
      alt: "Jacuzzi deschis cu jeturile pornite în fața unei cabane, între mesteceni aurii, toamna",
      shape: "landscape",
      area: "1 / 5 / 7 / 13",
    },
    rest: [
      {
        img: varaCampImg,
        alt: "Jacuzzi cu apa albastră și jeturile pornite, vara, cu un gard de tuia și dealuri întinse în spate",
        shape: "portrait",
        area: "1 / 1 / 7 / 5",
      },
      {
        img: buleUmbrelaImg,
        alt: "Apa cu bule în jacuzzi, sub umbrelă, cu pridvorul cabanei și copaci aurii în spate",
        shape: "landscape",
        area: "7 / 1 / 10 / 5",
      },
      {
        img: varaBuleImg,
        alt: "Apa cu bule în jacuzzi, vara, cu tuia și câmpul întins în spate",
        shape: "landscape",
        area: "7 / 5 / 10 / 9",
      },
    ],
  },
  {
    numeral: "III",
    title: "Seara",
    line: "Restul serii e al tău.",
    textArea: "5 / 10 / 9 / 13",
    lead: {
      img: searaAlbastraImg,
      alt: "Jacuzzi cu apa albastră și abur la ora albastră, în curtea unei pensiuni, cu turla bisericii din sat luminată în spate",
      shape: "portrait",
      area: "1 / 1 / 9 / 7",
    },
    rest: [
      {
        img: apusPergolaImg,
        alt: "Jacuzzi cu apa limpede sub o pergolă de lemn, la apus",
        shape: "portrait",
        area: "1 / 7 / 5 / 10",
      },
      {
        img: searaFelinarImg,
        alt: "Jacuzzi luminat albastru la căderea serii, cu un copac desfrunzit și un felinar de stradă în sat",
        shape: "portrait",
        area: "1 / 10 / 5 / 13",
      },
      {
        img: searaBraziImg,
        alt: "Jacuzzi cu apa portocalie noaptea, sub brazi înalți",
        shape: "portrait",
        area: "5 / 7 / 9 / 10",
      },
    ],
  },
];

const place = (area: string) => ({ "--area": area }) as CSSProperties;

function Photo({ shot, lead }: { shot: Shot; lead?: boolean }) {
  return (
    <figure
      className={`${styles.shot} ${lead ? styles.lead : ""} ${
        shot.shape === "portrait" ? styles.portrait : styles.landscape
      }`}
      style={place(shot.area)}
    >
      <Image
        src={shot.img}
        alt={shot.alt}
        fill
        placeholder="blur"
        sizes={lead ? "(max-width: 768px) 100vw, 720px" : "(max-width: 768px) 80vw, 400px"}
        className={styles.img}
      />
    </figure>
  );
}

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

        <div className={styles.chapters}>
          {chapters.map((chapter) => (
            <article key={chapter.title} className={styles.chapter}>
              <header className={styles.words} style={place(chapter.textArea)}>
                <span className={styles.numeral} aria-hidden="true">
                  {chapter.numeral}
                </span>
                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                <span className={styles.rule} aria-hidden="true" />
                <p className={styles.line}>{chapter.line}</p>
              </header>
              <Photo shot={chapter.lead} lead />
              <div className={styles.rest}>
                {chapter.rest.map((shot) => (
                  <Photo key={shot.img.src} shot={shot} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
