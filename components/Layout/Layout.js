import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Layout.module.css";
import PageContainer from "../PageContainer";
import Navigation from "../Navigation";
import Logo from "../Logo";

export default function Layout({ children }) {
  const pageContainerRef = useRef();
  const router = useRouter();

  useEffect(() => {
    router.events.on(
      "routeChangeStart",
      () => (pageContainerRef.current.scrollTop = 0)
    );
  }, []);

  return (
    <PageContainer ref={pageContainerRef}>
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
