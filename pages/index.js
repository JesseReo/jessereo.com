import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import imgHero from "../public/images/jesse-tri.jpg";
import poster from "../public/images/video-poster.jpg";
import TheDrummerSvg from "../images/the-drummer.svg";
import TheDjSvg from "../images/the-dj.svg";
import TheTravellerSvg from "../images/the-traveller.svg";
import WakeUpSvg from "../images/wake-the-funk-up.svg";
import Hero from "../components/Hero/Hero";

import TheDrummerSvg from "../images/the-drummer.svg";
import TheDjSvg from "../images/the-dj.svg";
import TheTravellerSvg from "../images/the-traveller.svg";
import WakeUpSvg from "../images/wake-the-funk-up.svg";

export default function Home() {
  const playIconRef = useRef();

  return (
    <>
      <Head>
        <title>JESSE REAL LIVES </title>
        <meta
          name="description"
          content="The homepage of Jesse Real, the honest hommus adonis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero backgroundImage={imgHero} />

      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          loop
          playsInline
          poster={poster.src}
          onClick={(e) => {
            if (e.target.paused) {
              e.target.play();
              playIconRef.current.style.display = "none";
            } else {
              e.target.pause();
              playIconRef.current.style.display = "block";
            }
          }}
        >
          <source src="/videos/intro-edit.mp4" type="video/mp4" />
        </video>

        {/* <Link href="/videos">
          <a
            style={{
              color: "#535353",
              textDecoration: "underline",
            }}
          >
            watch full version
          </a>
        </Link> */}

        <div ref={playIconRef} className={styles.playIcon}>
          <svg viewBox="0 0 512 512">
            <path d="M128,96v320l256-160L128,96L128,96z" />
          </svg>
        </div>
      </div>

      <div className={styles.bigLinks}>
        <Link href="/bio">
          <a className={`${styles.bigLink} ${styles.bgRed}`}>
            <TheDrummerSvg />
          </a>
        </Link>
        <Link href="/dj">
          <a className={`${styles.bigLink} ${styles.bgBlue}`}>
            <TheDjSvg />
          </a>
        </Link>
        <Link href="/tours">
          <a className={`${styles.bigLink} ${styles.bgYellow}`}>
            <TheTravellerSvg />
          </a>
        </Link>
        <Link href="/contact">
          <a className={`${styles.bigLink} ${styles.bgGreen}`}>
            <WakeUpSvg />
          </a>
        </Link>
      </div>
    </>
  );
}
