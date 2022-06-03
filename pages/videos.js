import Head from "next/head";
import styles from "../styles/Videos.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Stack from "../components/Stack";
import img from "../public/images/jesse-rugs-32-art.jpg";
import BigLink from "../components/BigLink";

export default function Videos() {
  return (
    <>
      <Head>
        <title>Videos - JESSE REAL</title>
        <meta name="description" content="Videos featuring Jesse Real" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="VideOS" backgroundImage={img} />
      <Main>
        <Stack>
          <iframe
            className={styles.videoEmbed}
            title="vimeo-player"
            src="https://player.vimeo.com/video/715559616?h=969d76414f"
            width="640"
            height="360"
            frameBorder="0"
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

          <iframe
            className={styles.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PhQrCWMgmyA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <iframe
            className={styles.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PtfrSNRlFgA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <iframe
            className={styles.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uX8yoT9ct6k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Stack>
      </Main>
      <BigLink href="/dj" color="#192cd1" label="dj" />
    </>
  );
}
