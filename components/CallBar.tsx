import { CALL_HREF, WHATSAPP_HREF } from "@/lib/contact";
import styles from "./CallBar.module.css";

// Fixed to the bottom on phones, so a call or a WhatsApp message is one tap away on every screen.
export default function CallBar() {
  return (
    <div className={styles.bar} data-place="bara">
      <a href={CALL_HREF} className={`btn-filled-gold ${styles.btn}`}>
        Sunați
      </a>
      <a
        href={WHATSAPP_HREF}
        className={`btn-outline-gold ${styles.btn}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
