import { useState, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Videos.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import imgHero from "../images/hero-videos.jpg";
import VideoSvg from "../images/videos.svg";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import imgFenderSessions from "../images/video-poster-fender-sessions.jpg";
import imgAdrianEagle from "../images/video-poster-adrian-eagle.jpg";
import imgCouchPotato from "../images/video-poster-couch-potato.jpg";
import IconPlayCircle from "../images/icon-play-circle.svg";
import Footer from "../components/Footer";
import Spacer from "../components/Spacer/Spacer";

export default function Videos() {
  return (
    <>
      <Head>
        <title>VIDEOS - JESSE REO</title>
        <meta name="description" content="Videos featuring Jesse Reo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero backgroundImage={imgHero} />

      <Main>
        <div className={styles.titleImage}>
          <VideoSvg />
        </div>

        <Spacer />

        <div className={styles.items}>
          <VideoItem
            heading={"Tash Sultana"}
            subheading={"Fender Sessions"}
            description="Jesse plays drums in a live recording for Tash Sultana in Fender Sessions."
            videoSrc="https://www.youtube.com/embed/l4GZah6WsOA?modestbranding=0&rel=0&autoplay=true"
            poster={imgFenderSessions}
          />

          <VideoItem
            heading="Adrian Eagle"
            subheading={"Triple J's The Set"}
            description="Jesse plays drums in a live recording for Adrian Eagles in Triple J's The Set."
            videoSrc="https://www.youtube.com/embed/PtfrSNRlFgA?modestbranding=0&rel=0&autoplay=true"
            poster={imgAdrianEagle}
          />

          <VideoItem
            heading={"Jakubi"}
            subheading={"Couch Potato"}
            description="Film clip for Jakubi single, Couch Potato"
            videoSrc="https://www.youtube.com/embed/uX8yoT9ct6k?modestbranding=0&rel=0&autoplay=true"
            poster={imgCouchPotato}
          />
        </div>
      </Main>

      <Footer />
    </>
  );
}

const VideoItem = (props) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef();

  return (
    <div
      className={`${styles.videoContainer} ${
        showVideo ? styles.videoActive : ""
      }`}
    >
      <div
        className={styles.videoPoster}
        onClick={() => {
          setShowVideo(true);
        }}
        style={{
          ...(showVideo == true && { pointerEvents: "none", opacity: 0 }),
        }}
      >
        <Image
          src={props.poster}
          layout="fill"
          objectFit="cover"
          alt={props.heading}
        />
      </div>

      {!showVideo && (
        <div className={styles.videoOverlay}>
          <div>
            <Heading2>{props.heading}</Heading2>
            <Heading3>{props.subheading}</Heading3>
            <br />
            <IconPlayCircle className={styles.iconPlayCircle} />
          </div>
        </div>
      )}

      {showVideo && (
        <iframe
          ref={videoRef}
          className={styles.videoEmbed}
          src={props.videoSrc}
          title={props.heading}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};
