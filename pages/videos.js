import Head from "next/head";
import styles from "../styles/Videos.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";

export default function Videos() {
  return (
    <>
      <Head>
        <title>Videos - JESSE REAL</title>
        <meta name="description" content="Videos featuring Jesse Real" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero
        title="Videos"
        backgroundImage="url(/loan-7AIDE8PrvA0-unsplash.jpg)"
      />
      <Main>
        <iframe
          className={styles.videoEmbed}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l4GZah6WsOA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <iframe
          className={styles.videoEmbed}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l4GZah6WsOA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Main>
    </>
  );
}
