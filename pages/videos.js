import Head from "next/head";
import styles from "../styles/Videos.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Stack from "../components/Stack";
import img from "../images/hero-videos.jpg";
import BigLink from "../components/BigLink";
import VideoSvg from "../images/videos.svg";
import DjSvg from "../images/dj.svg";

export default function Videos() {
  return (
    <>
      <Head>
        <title>VIDEOS - JESSE REAL</title>
        <meta name="description" content="Videos featuring Jesse Real" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="VideOS" titleImage={<VideoSvg />} backgroundImage={img} />
      <Main>
        <Stack>
          <iframe
            className={styles.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/l4GZah6WsOA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <iframe
            className={styles.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PhQrCWMgmyA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <iframe
            className={styles.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PtfrSNRlFgA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <iframe
            className={styles.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uX8yoT9ct6k"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Stack>
      </Main>
      <BigLink href="/dj" color="#192cd1" labelImg={<DjSvg alt="dj" />} arrow />
    </>
  );
}
