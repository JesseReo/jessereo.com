import React, { useState } from "react";
import styles from "./HomeHero.module.css";
import poster from "../../images/video-poster2.jpg";
import Logo from "../Logo";
// import ArrowDown from "../../images/arrow.svg";
import MuteOn from "../../images/icon-mute-on.svg";
import MuteOff from "../../images/icon-mute-off.svg";
import muteOn from "../../images/icon-mute-on.png";
import muteOff from "../../images/icon-mute-off.png";
import Weather from "../Weather";

export default function HomeHero() {
  const [mute, setMute] = useState(true);

  return (
    <>
      <div
        className={`${styles.outer} ${styles.parallaxItem}`}
        // style={{ cursor: `url('${mute ? muteOn.src : muteOff.src}'), auto` }}
      >
        <video
          className={styles.video}
          loop
          playsInline
          poster={poster.src}
          autoPlay
          // muted={mute}
          // onClick={() => {
          //   setMute(!mute);
          // }}
        >
          {/* <source src="/videos/home-loop.mp4" type="video/mp4" /> */}
          <source src="/videos/home-loop3.webm" type="video/webm" />
        </video>

        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <Weather />

        {/* <div
          className={styles.downArrow}
          onClick={() => {
            document
              .querySelector(".nextSection")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown />
        </div> */}

        {/* <button
          aria-label="mute"
          className={styles.muteIcon}
          onClick={(e) => {
            e.preventDefault();
            setMute(!mute);
          }}
        >
          {mute ? <MuteOn /> : <MuteOff />}
        </button> */}
      </div>

      <span className="nextSection" />
    </>
  );
}
