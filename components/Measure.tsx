"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import {
  CLARITY_HOSTS,
  CONSENT_KEY,
  OPEN_COOKIE_SETTINGS,
  clarityTag,
  sendConsent,
  track,
} from "@/lib/clarity";
import styles from "./Measure.module.css";

function readChoice(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function saveChoice(choice: "granted" | "denied") {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // private mode: the choice holds for this visit only
  }
}

// Every tap on a call or WhatsApp link becomes a Clarity event named after the
// place on the page it came from (data-place on the hero, the bar, the contact).
function onTap(e: MouseEvent) {
  const link = (e.target as Element | null)?.closest?.("a[href]");
  if (!link) return;
  const href = link.getAttribute("href") ?? "";
  const place = link.closest("[data-place]")?.getAttribute("data-place") ?? "alt";
  if (href.startsWith("tel:")) track(`suna_${place}`);
  else if (href.includes("wa.me")) track(`whatsapp_${place}`);
}

export default function Measure() {
  const [live, setLive] = useState(false);
  const [asking, setAsking] = useState(false);

  useEffect(() => {
    const onSite = CLARITY_HOSTS.includes(window.location.hostname);
    const choice = readChoice();
    // reading the browser after the first render keeps server and client markup equal
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLive(onSite);
    if (choice === "granted" || choice === "denied") sendConsent(choice === "granted");
    else setAsking(true);

    const reopen = () => setAsking(true);
    document.addEventListener("click", onTap, { capture: true });
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => {
      document.removeEventListener("click", onTap, { capture: true });
      window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
    };
  }, []);

  const choose = (granted: boolean) => {
    saveChoice(granted ? "granted" : "denied");
    sendConsent(granted);
    setAsking(false);
  };

  return (
    <>
      {live && (
        <Script id="clarity" strategy="afterInteractive">
          {clarityTag}
        </Script>
      )}
      {asking && (
        <div className={styles.banner} role="region" aria-label="Cookie-uri">
          <p className={styles.text}>
            Folosim cookie-uri ca să vedem cum e folosit site-ul și să-l facem mai bun. Le pornim
            doar dacă ești de acord.{" "}
            <Link href="/confidentialitate" className={styles.more}>
              Detalii
            </Link>
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.btn} onClick={() => choose(false)}>
              Refuz
            </button>
            <button type="button" className={styles.btn} onClick={() => choose(true)}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
