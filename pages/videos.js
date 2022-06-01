import Head from "next/head";
import styles from "../styles/Videos.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Stack from "../components/Stack";

export default function Videos() {
  return (
    <>
      <Head>
        <title>Videos - JESSE REAL</title>
        <meta name="description" content="Videos featuring Jesse Real" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="VideoS" backgroundImage="/images/Jesse+RUGS-32.jpg" />
      <Main>
        <Stack>
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
            src="https://www.youtube.com/embed/PhQrCWMgmyA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <iframe
            className={styles.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PtfrSNRlFgA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <iframe
            className={styles.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uX8yoT9ct6k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Stack>
      </Main>
    </>
  );
}
