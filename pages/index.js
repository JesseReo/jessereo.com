import { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import BigLink from "../components/BigLink";
import heroImg from "../images/hero-home.jpg";
import poster from "../images/video-poster.jpg";
import TheDrummerSvg from "../images/the-drummer.svg";
import TheDjSvg from "../images/the-dj.svg";
import TheTravellerSvg from "../images/the-traveller.svg";
import WakeUpSvg from "../images/wake-the-funk-up.svg";
import Weather from "../components/Weather";

export default function Home() {
  const playIconRef = useRef();

  return (
    <>
      <Head>
        <title>JESSE REO</title>
        <meta
          name="description"
          content="The homepage of Jesse Reo, the honest hommus adonis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Weather />

      <Hero backgroundImage={heroImg} />

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

      <BigLink
        href="/bio"
        color="#eb1400"
        label="bio"
        labelImg={<TheDrummerSvg alt="bio" />}
      />
      <BigLink
        href="/dj"
        color="#192cd1"
        label="dj"
        labelImg={<TheDjSvg alt="dj" />}
      />
      <BigLink
        href="/tours"
        color="#f8ff1f"
        textColor="#000"
        label="tours"
        labelImg={<TheTravellerSvg alt="tours" />}
      />
      <BigLink
        href="/contact"
        color="#00ba56"
        label="contact"
        labelImg={<WakeUpSvg alt="contact" />}
      />
    </>
  );
}
