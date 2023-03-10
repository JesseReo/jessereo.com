import Link from "next/link";
import styles from "./Logo.module.css";
import LogoImg from "../../images/logo-2.svg";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
        <a className={styles.a}>
          <div className={styles.logo}>
            <LogoImg />
          </div>
        </a>
      </Link>
    </div>
  );
}
