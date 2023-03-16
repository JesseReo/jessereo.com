import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Layout.module.css";
import Navigation from "../Navigation";
import Logo from "../Logo";

export default function Layout({ children }) {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const pageContainerRef = useRef();
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setMenuIsActive(false);
      pageContainerRef.current.scrollTop = 0;
    });
  }, [router.events]);

  return (
    <>
      <Navigation
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
      />
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
