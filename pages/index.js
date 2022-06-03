import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import imgHero from "../public/images/jesse-tri.jpg";
import Heading1 from "../components/Heading1";

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

      <div className={styles.sectionContainer}>
        <Image
          src={imgHero}
          alt="alt"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          placeholder="blur"
          priority
        />

        <div
          className={styles.downArrow}
          onClick={() => {
            document
              .querySelector(".videoAnchor")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 404.8 404.8"
            xmlSpace="preserve"
          >
            <path
              fill="#fff"
              d="M126.5,307.9c0.6,0.6,1.2,1.2,1.8,1.2c1.2,9.2,6.1,19.6,8.6,27.5c4.9,15.9,9.2,32.4,13.5,48.3
			c1.8,8,12.2,6.7,14.7,0c9.8-25.7,19-50.8,30-75.9c1.8-3.7-0.6-6.7-3.7-7.3c-0.6-1.2-1.8-2.4-4.3-3.1c-8.6-0.6-17.7-1.2-26.3-1.8
			c12.2-37.9,8.6-83.8,8-123c-0.6-50.8-1.8-102.2-5.5-153.6c-0.6-8-11.6-8-12.2,0c-3.1,47.7,0.6,95.5,1.2,143.2
			c0.6,44.7-5.5,88.7-5.5,132.8c-7.3-1.2-16.5-2.4-20.8,2.4C124.1,301.8,124.1,305.4,126.5,307.9z M150.4,310.3
			c11-0.6,22.6-0.6,33.7-1.8c-9.8,15.9-17.7,33-25.1,50.2c-2.4-8.6-4.9-17.1-6.7-25.7c-1.8-6.1-3.1-15.3-6.1-22.6
			C147.9,310.3,149.1,310.3,150.4,310.3z"
            />
            <path
              d="M293.2,288.6c-0.6-3.7-5.5-6.1-9.2-4.9c-3.1,1.2-6.7,2.4-10.4,3.7C292,266,281,207.2,279.7,184
			c-3.1-52.6-6.1-105.9-12.9-157.9c-1.2-8-11.6-8-12.2,0c-3.7,45.3,4.3,92.4,7.3,137.1c2.4,37.9,9.8,83.8-0.6,121.2
			c-0.6,1.8,0,3.7,1.2,5.5c-5.5,0.6-11.6,0.6-17.1,0c-7.3-1.2-11,8-6.1,11.6c-17.7,8,11,61.2,17.1,72.2c2.4,4.9,11,5.5,13.5,0
			c11-25.1,20.2-50.8,23.9-78.3C295,292.3,294.4,289.9,293.2,288.6z M251,321.7c-0.6-1.8-3.1-14.1-6.7-19c9.2,1.8,22.6,3.1,33,0
			c-3.1,16.5-8.6,31.8-14.1,47.7C258.3,340.7,254.6,331.5,251,321.7z"
            />
          </svg>
        </div>
      </div>

      <a name="video" className="videoAnchor" />
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          loop
          playsInline
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
        <div ref={playIconRef} className={styles.playIcon}>
          <svg viewBox="0 0 512 512">
            <path d="M128,96v320l256-160L128,96L128,96z" />
          </svg>
        </div>
      </div>

      <div className={styles.bigLinks}>
        <Link href="/bio" scroll>
          <a className={`${styles.bigLink} ${styles.bgRed}`}>
            <Heading1>The dRummeR</Heading1>
          </a>
        </Link>
        <Link href="/dj" scroll>
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
