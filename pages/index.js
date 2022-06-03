import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import imgHero from "../public/images/jesse-tri.jpg";
import Heading1 from "../components/Heading1";
import Arrow from "../components/Arrow";
import poster from "../public/images/video-poster.jpg";

export default function Home() {
  const playIconRef = useRef();

  return (
    <>
      <Head>
        <title>JESSE REAL LiVES</title>
        <meta
          name="description"
          content="The home page of Jesse Real the honest hommus adonis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className={styles.sectionContainer}
        onClick={() => {
          document
            .querySelector(".videoAnchor")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Image
          src={imgHero}
          alt="alt"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          placeholder="blur"
          priority
        />

        <div className={styles.downArrow}>
          <Arrow />
        </div>
      </div>

      <a name="video" className="videoAnchor" />
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
        <Link href="/videos">
          <a
            style={{
              color: "#535353",
              textDecoration: "underline",
            }}
          >
            watch full version
          </a>
        </Link>
        <div ref={playIconRef} className={styles.playIcon}>
          <svg viewBox="0 0 512 512">
            <path d="M128,96v320l256-160L128,96L128,96z" />
          </svg>
        </div>
      </div>

      <div className={styles.bigLinks}>
        <Link href="/bio">
          <a className={`${styles.bigLink} ${styles.bgRed}`}>
            <Heading1>The dRummeR</Heading1>
          </a>
        </Link>
        <Link href="/dj">
          <a className={`${styles.bigLink} ${styles.bgBlue}`}>
            <Heading1>The dj</Heading1>
          </a>
        </Link>
        <Link href="/tours">
          <a className={`${styles.bigLink} ${styles.bgYellow}`}>
            <Heading1 style={{ color: "#000" }}>The Traveller</Heading1>
          </a>
        </Link>
        <Link href="/contact">
          <a className={`${styles.bigLink} ${styles.bgGreen}`}>
            <Heading1>The Real mOtherFunker</Heading1>
          </a>
        </Link>
      </div>
    </>
  );
}
