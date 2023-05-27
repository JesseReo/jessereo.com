import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Layout.module.css";
import Navigation from "../Navigation";
import Logo from "../Logo";
import Link from "next/link";

export default function Layout({ children }) {
  const router = useRouter();
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [logoOffScreen, setLogoOffScreen] = useState(router.pathname == "/");
  const pageContainerRef = useRef();

  useEffect(() => {
    const pageContainerEl = pageContainerRef.current;

    router.events.on("routeChangeComplete", () => {
      setMenuIsActive(false);
      pageContainerEl.scrollTop = 0;
    });

    function showLogo() {
      const scrollTop = pageContainerEl.scrollTop;
      const height = pageContainerEl.offsetHeight;
      return router.pathname == "/" && scrollTop < height;
    }

    function handleScroll() {
      const scrollTop = pageContainerEl.scrollTop;
      const height = pageContainerEl.offsetHeight;
      setLogoOffScreen(showLogo());
    }

    setLogoOffScreen(showLogo());

    pageContainerEl.addEventListener("scroll", handleScroll);

    return () => {
      pageContainerEl.removeEventListener("scroll", handleScroll);
    };
  }, [router.events, router.pathname]);

  return (
    <>
      <Navigation
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
      />

      <div
        className={`${styles.logoContainer} 
        ${logoOffScreen && styles.logoOffScreen}`}
      >
        <Link href="/">
          <a className={styles.logoLink} aria-label="logo">
            <Logo />
          </a>
        </Link>
      </div>

      <div
        className={`${styles.pageContainer} ${styles.parallaxScroll} ${
          menuIsActive ? styles.menuIsActive : ""
        }`}
        ref={pageContainerRef}
      >
        {children}
      </div>
    </>
  );
}
