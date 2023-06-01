import { useState, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Videos.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import img from "../images/hero-videos.jpg";
import BigLink from "../components/BigLink";
import VideoSvg from "../images/videos.svg";
import DjSvg from "../images/dj.svg";
import Heading3 from "../components/Heading3";
import Text from "../components/text";
import imgFenderSessions from "../images/video-poster-fender-sessions.jpg";
import imgAdrianEagle from "../images/video-poster-adrian-eagle.jpg";
import imgCouchPotato from "../images/video-poster-couch-potato.jpg";
import IconPlay from "../images/icon-play.svg";
import Image from "next/image";

export default function Videos() {
  return (
    <>
      <Head>
        <title>VIDEOS - JESSE REO</title>
        <meta name="description" content="Videos featuring Jesse Reo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero title="VideOS" titleImage={<VideoSvg />} backgroundImage={img} />

      <Main>
        <div className={styles.items}>
          <VideoItem
            heading={"Tash Sultana - Fender Sessions"}
            description="Jesse plays drums in a live recording for Tash Sultana in Fender Sessions."
            videoSrc="https://www.youtube.com/embed/l4GZah6WsOA?modestbranding=0&rel=0"
            poster={imgFenderSessions}
          />
          <VideoItem
            heading="Adrian Eagle - Triple J's The Set"
            description="Jesse plays drums in a live recording for Adrian Eagles in Triple J's The Set."
            videoSrc="https://www.youtube.com/embed/PtfrSNRlFgA?modestbranding=0&rel=0"
            poster={imgAdrianEagle}
          />
          <VideoItem
            heading={"Jakubi - Couch Potato"}
            description="Film clip for Jakubi single, Couch Potato"
            videoSrc="https://www.youtube.com/embed/uX8yoT9ct6k?modestbranding=0&rel=0"
            poster={imgCouchPotato}
          />
        </div>
      </Main>

      <BigLink
        href="/dj"
        color="#192cd1"
        label="dj"
        labelImg={<DjSvg alt="dj" />}
        arrow
      />
    </>
  );
}

const VideoItem = (props) => {
  const [posterClicked, setPosterClicked] = useState(false);
  const videoRef = useRef();

  return (
    <div>
      <div className={styles.textContainer}>
        <Heading3>{props.heading}</Heading3>
        <Text>{props.description}</Text>
      </div>

      <div className={styles.videoContainer}>
        <div
          className={styles.videoPoster}
          onClick={() => {
            setPosterClicked(true);
            videoRef.current.src = `${props.videoSrc}&autoplay=true`;
          }}
          style={{
            ...(posterClicked == true && { pointerEvents: "none", opacity: 0 }),
          }}
        >
          <IconPlay className={styles.iconPlay} />
          <Image
            src={props.poster}
            layout="fill"
            objectFit="cover"
            alt={props.heading}
          />
        </div>

        <iframe
          ref={videoRef}
          className={styles.videoEmbed}
          src={props.videoSrc}
          title={props.heading}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
