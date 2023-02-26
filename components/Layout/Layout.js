import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Layout.module.css";
import Navigation from "../Navigation";
import Logo from "../Logo";

export default function Layout({ children }) {
  const pageContainerRef = useRef();
  const router = useRouter();

  useEffect(() => {
    router.events.on(
      "routeChangeComplete",
      () => (pageContainerRef.current.scrollTop = 0)
    );
  }, [router.events]);

  return (
    <>
      <Navigation />
      <Logo />
      <div
        className={`${styles.pageContainer} ${styles.parallaxScroll}`}
        ref={pageContainerRef}
      >
        {children}
      </div>
    </>
  );
}
