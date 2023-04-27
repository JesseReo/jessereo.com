import Link from "next/link";
import styles from "./Logo.module.css";
import LogoImg from "../../images/logo-3.svg";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
        <a className={styles.a} aria-label="logo home">
          <div className={styles.logo}>
            <LogoImg alt="logo" className={`${styles.svg} ${styles.svg2}`} />
            <LogoImg alt="logo" className={`${styles.svg} ${styles.svg1}`} />
            <LogoImg alt="logo" className={`${styles.svg} ${styles.svg3}`} />
            <LogoImg alt="logo" className={`${styles.svg} ${styles.svg4}`} />
            <LogoImg alt="logo" className={`${styles.svg} ${styles.svg5}`} />
          </div>
        </a>
      </Link>
    </div>
  );
}
