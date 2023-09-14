import Link from "next/link";
import { TiArrowUp, TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.bigText}>LET&apos;S CONNECT</div>
      <div className={styles.grupIcon}>
        <a
          className={styles.iconFooter}
          href="https://www.linkedin.com/in/sherlyls/"
          target="_blank"
        >
          <TiSocialLinkedin />
        </a>
        <a
          className={styles.iconFooter}
          href="https://github.com/sherlyls"
          target="_blank"
        >
          <TiSocialGithub/>
        </a>
      </div>

      <div className={styles.grupText}>
        <p className={styles.smallText}>
          Build with ♥ by Sherly Lolita Sari © {new Date().getFullYear()}
        </p>
        <p>Powered by React, Next.js, and CSS</p>
      </div>

      <Link className={styles.link} href="/#wrapperVideo" scroll={false}>
        <div className={styles.scrollUp}>
          <TiArrowUp />
          <p className={styles.textScroll}>Back to Top</p>
        </div>
      </Link>
    </div>
  );
}
