import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

function Navighation() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <>
      <div
        className={styles.menuIcon}
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
      >
        {menuIsActive ? <>close</> : <>menu</>}
      </div>

      <ul
        className={styles.list}
        style={{
          left: menuIsActive ? "0" : "100%",
        }}
      >
        <li className={styles.listItem}>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/bio">
            <a>Bio</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/videos">
            <a>Videos</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/dj">
            <a>DJ</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/tours">
            <a>Tours</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navighation;
