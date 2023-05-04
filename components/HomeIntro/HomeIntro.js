import React from "react";
import styles from "./HomeIntro.module.css";
import LebanonFlag from "../../images/lebanon-flag.svg";
import heroImg from "../../images/hero-home.jpg";
import MauritiusFlag from "../../images/mauritius-flag.svg";

export default function HomeIntro() {
  return (
    <div className={styles.homeIntro}>
      <div className={styles.homeIntroInner}>
        <div className={styles.flagContainer}>
          <LebanonFlag />
        </div>

        <div
          className={styles.mediaContainer}
          style={{ backgroundImage: `url(${heroImg.src})` }}
        ></div>

        <div className={styles.flagContainer}>
          <MauritiusFlag />
        </div>
      </div>
    </div>
  );
}
