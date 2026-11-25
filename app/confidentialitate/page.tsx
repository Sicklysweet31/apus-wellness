import type { Metadata } from "next";
import Link from "next/link";
import CookieButton from "@/components/CookieButton";
import styles from "./page.module.css";

// Plain facts about what the site collects. Draft for Mark (2026-11-26): the
// company's registration number and address go here once the ONRC papers arrive.

export const metadata: Metadata = {
  title: "Confidențialitate | APUS Wellness & Spa",
  description: "Ce date strânge site-ul APUS Wellness & Spa, de ce și cum vă schimbați alegerea.",
  alternates: { canonical: "/confidentialitate" },
};

export default function Privacy() {
  return (
    <main className={styles.page}>
      <Link href="/" className={styles.back}>
        Înapoi la pagina principală
      </Link>

      <h1 className={styles.title}>Confidențialitate</h1>
      <p className={styles.updated}>Actualizat pe 26 noiembrie 2026</p>

      <section className={styles.block}>
        <h2>Cine suntem</h2>
        <p>
          Site-ul este al APUS Wellness SRL (APUS Wellness &amp; Spa), din zona Huedin, județul Cluj.
          Ne găsiți la telefon sau pe WhatsApp, la{" "}
          <a href="tel:+40744244255">+40 744 244 255</a>.
        </p>
      </section>

      <section className={styles.block}>
        <h2>Formularul de rezervare</h2>
        <p>
          Când trimiteți formularul, primim pe e-mail numele, telefonul, pachetul, locația și
          perioada pe care le-ați scris. Mesajul ajunge la noi prin serviciul Web3Forms. Folosim
          aceste date doar ca să vă răspundem și să organizăm rezervarea.
        </p>
      </section>

      <section className={styles.block}>
        <h2>Statistici despre site</h2>
        <p>
          Folosim Microsoft Clarity ca să vedem cum e folosit site-ul: ce secțiuni sunt văzute, unde
          se apasă, cât de jos se derulează pagina, tipul de dispozitiv și browserul. Ce scrieți în
          formular nu apare în aceste înregistrări.
        </p>
        <p>
          Cookie-urile Clarity se pun doar dacă apăsați „Accept”. Dacă refuzați, Clarity strânge
          doar date fără cookie-uri. Microsoft prelucrează aceste date după{" "}
          <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer">
            declarația sa de confidențialitate
          </a>
          .
        </p>
        <p>
          Alegerea dumneavoastră o păstrăm în browser, ca să nu vă întrebăm la fiecare vizită. O
          puteți schimba oricând: <CookieButton className={styles.inline} />.
        </p>
      </section>

      <section className={styles.block}>
        <h2>Drepturile dumneavoastră</h2>
        <p>
          Puteți cere să vedeți, să corectați sau să ștergem datele trimise prin formular: sunați-ne
          sau scrieți-ne pe WhatsApp. Aveți și dreptul să depuneți o plângere la Autoritatea
          Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
        </p>
      </section>
    </main>
  );
}
