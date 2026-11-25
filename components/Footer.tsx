import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Left col */}
        <div className={styles.colLeft}>
          <Logo variant="full" className={styles.logo} />
          <p className={styles.tagline}>Apusul, adus la tine.</p>
        </div>

        {/* Right col */}
        <div className={styles.colRight}>
          <nav className={styles.footerNav}>
            {["#servicii", "#preturi", "#contact"].map((href, i) => (
              <a
                key={href}
                href={href}
                className={styles.navLink}
              >
                {["Servicii", "Prețuri", "Contact"][i]}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} APUS Wellness & Spa · Munții Apuseni, România
        </span>
      </div>
    </footer>
  );
}
