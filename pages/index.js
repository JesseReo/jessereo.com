import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import imgHero from "../public/images/jesse-tri.jpg";
import imgBottom from "../public/images/jesse-film-12.jpg";
import Heading1 from "../components/Heading1";

export default function Home() {
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
      </div>

      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          loop
          playsInline
          onClick={(e) =>
            e.target.paused ? e.target.play() : e.target.pause()
          }
        >
          <source src="/videos/intro-edit.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.bigLinks}>
        <Link href="/bio" scroll>
          <a className={`${styles.bigLink} ${styles.bgRed}`}>
            <Heading1>The dRummeR</Heading1>
          </a>
        </Link>
        <Link href="/dj">
          <a className={`${styles.bigLink} ${styles.bgYellow}`}>
            <Heading1 style={{ color: "#000" }}>The dj</Heading1>
          </a>
        </Link>
        <Link href="/contact">
          <a className={`${styles.bigLink} ${styles.bgGreen}`}>
            <Heading1>The Real mOtherfunker</Heading1>
          </a>
        </Link>
      </div>
    </>
  );
}
