"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, MotionConfig } from "framer-motion";
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
// One rental in three chapters. Each chapter shows one big photo (Mark's pick) and
// the others as small thumbnails that slide in when the chapter comes into view;
// any photo opens the full-screen viewer, which browses all of them.

type Shot = { img: StaticImageData; alt: string };

type Chapter = {
  numeral: string;
  title: string;
  line: string;
  shape: "portrait" | "landscape";
  lead: Shot;
  rest: Shot[];
};

const chapters: Chapter[] = [
  {
    numeral: "I",
    title: "Drumul",
    line: "Livrăm oriunde te duce drumul.",
    shape: "portrait",
    lead: {
      img: artarRosuImg,
      alt: "Remorca cu jacuzzi-ul în curtea unei vile, cu câteva frunze roșii de arțar în prim-plan",
    },
    rest: [
      {
        img: drumMunteImg,
        alt: "Land Rover-ul tractând remorca cu jacuzzi-ul pe un drum de țară, cu lan de porumb și munți în spate",
      },
      {
        img: sosireCabanaImg,
        alt: "Land Rover-ul și remorca cu jacuzzi-ul, ajunse pe gazonul din fața cabanei",
      },
      {
        img: drumPadureImg,
        alt: "Mașină tractând remorca cu jacuzzi-ul APUS peste un pod, pe un drum forestier din Munții Apuseni",
      },
    ],
  },
  {
    numeral: "II",
    title: "Locul",
    line: "Apa la 38°, fără lemne și fără foc.",
    shape: "landscape",
    lead: {
      img: cabanaToamnaImg,
      alt: "Jacuzzi deschis cu jeturile pornite în fața unei cabane, între mesteceni aurii, toamna",
    },
    rest: [
      {
        img: varaCampImg,
        alt: "Jacuzzi cu apa albastră și jeturile pornite, vara, cu un gard de tuia și dealuri întinse în spate",
      },
      {
        img: buleUmbrelaImg,
        alt: "Apa cu bule în jacuzzi, sub umbrelă, cu pridvorul cabanei și copaci aurii în spate",
      },
      {
        img: varaBuleImg,
        alt: "Apa cu bule în jacuzzi, vara, cu tuia și câmpul întins în spate",
      },
    ],
  },
  {
    numeral: "III",
    title: "Seara",
    line: "Restul serii e al tău.",
    shape: "portrait",
    lead: {
      img: searaAlbastraImg,
      alt: "Jacuzzi cu apa albastră și abur la ora albastră, în curtea unei pensiuni, cu turla bisericii din sat luminată în spate",
    },
    rest: [
      {
        img: apusPergolaImg,
        alt: "Jacuzzi cu apa limpede sub o pergolă de lemn, la apus",
      },
      {
        img: searaFelinarImg,
        alt: "Jacuzzi luminat albastru la căderea serii, cu un copac desfrunzit și un felinar de stradă în sat",
      },
      {
        img: searaBraziImg,
        alt: "Jacuzzi cu apa portocalie noaptea, sub brazi înalți",
      },
    ],
  },
];

// The viewer's list: chapter by chapter, the big photo first.
const all = chapters.flatMap((c) => [c.lead, ...c.rest].map((shot) => ({ ...shot, chapter: c.title })));
const firstOf = chapters.map((_, i) =>
  chapters.slice(0, i).reduce((n, c) => n + 1 + c.rest.length, 0),
);

const thumbsIn = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const thumbIn = {
  hidden: { opacity: 0, y: 18 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Arrow({ flip }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={flip ? styles.flipped : undefined}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export default function Gallery() {
  const [current, setCurrent] = useState<number | null>(null);
  const viewer = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);

  const open = (index: number) => (e: MouseEvent<HTMLButtonElement>) => {
    opener.current = e.currentTarget;
    setCurrent(index);
  };

  const step = useCallback(
    (by: number) => setCurrent((i) => (i === null ? i : (i + by + all.length) % all.length)),
    [],
  );

  const close = () => viewer.current?.close();

  useEffect(() => {
    const dialog = viewer.current;
    if (current !== null && dialog && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, [current]);

  const onClosed = () => {
    document.documentElement.style.overflow = "";
    setCurrent(null);
    opener.current?.focus();
  };

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  };

  const shot = current === null ? null : all[current];

  return (
    <MotionConfig reducedMotion="user">
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
            {chapters.map((chapter, i) => (
              <article
                key={chapter.title}
                className={`${styles.chapter} ${
                  chapter.shape === "portrait" ? styles.portrait : styles.landscape
                } ${i % 2 === 1 ? styles.flip : ""}`}
              >
                <header className={styles.words}>
                  <span className={styles.numeral} aria-hidden="true">
                    {chapter.numeral}
                  </span>
                  <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                  <span className={styles.rule} aria-hidden="true" />
                  <p className={styles.line}>{chapter.line}</p>
                </header>

                <div className={styles.media}>
                  <button
                    type="button"
                    className={styles.lead}
                    onClick={open(firstOf[i])}
                    aria-haspopup="dialog"
                  >
                    <Image
                      src={chapter.lead.img}
                      alt={chapter.lead.alt}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 768px) 100vw, 620px"
                      className={styles.img}
                    />
                  </button>

                  <motion.ul
                    className={styles.thumbs}
                    variants={thumbsIn}
                    initial="hidden"
                    whileInView="shown"
                    viewport={{ once: true, margin: "-60px" }}
                  >
                    {chapter.rest.map((thumb, j) => (
                      <motion.li key={thumb.img.src} variants={thumbIn}>
                        <button
                          type="button"
                          className={styles.thumb}
                          onClick={open(firstOf[i] + 1 + j)}
                          aria-haspopup="dialog"
                        >
                          <Image
                            src={thumb.img}
                            alt={thumb.alt}
                            fill
                            placeholder="blur"
                            sizes="(max-width: 768px) 30vw, 200px"
                            className={styles.img}
                          />
                        </button>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <dialog
          ref={viewer}
          className={styles.viewer}
          aria-label="Pozele APUS, pe tot ecranul"
          onClose={onClosed}
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target === e.currentTarget || target.dataset.backdrop) close();
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {shot && (
            <>
              <button type="button" className={styles.close} onClick={close} aria-label="Închide">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <div className={styles.stage} data-backdrop="true">
                <Image
                  key={shot.img.src}
                  src={shot.img}
                  alt={shot.alt}
                  placeholder="blur"
                  sizes="92vw"
                  className={styles.full}
                />
              </div>
              <button
                type="button"
                className={`${styles.nav} ${styles.prev}`}
                onClick={() => step(-1)}
                aria-label="Poza anterioară"
              >
                <Arrow />
              </button>
              <button
                type="button"
                className={`${styles.nav} ${styles.next}`}
                onClick={() => step(1)}
                aria-label="Poza următoare"
              >
                <Arrow flip />
              </button>
              <p className={styles.foot}>
                <span className={styles.where}>{shot.chapter}</span>
                <span className={styles.count}>
                  {(current ?? 0) + 1} din {all.length}
                </span>
              </p>
            </>
          )}
        </dialog>
      </section>
    </MotionConfig>
  );
}
