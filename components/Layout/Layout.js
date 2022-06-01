import Link from "next/link";
import styles from "./Layout.module.css";
import PageContainer from "../PageContainer";
import Navigation from "../Navigation";
import Logo from "../Logo";

export default function Layout({ children }) {
  return (
    <PageContainer>
      <Navigation />
      <div className={styles.logoContainer}>
        <Link href="/">
          <a className={styles.a}>
            <Logo />
          </a>
        </Link>
      </div>
      {children}
    </PageContainer>
  );
}
