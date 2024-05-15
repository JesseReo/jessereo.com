import { useState, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Videos.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import img from "../images/hero-videos.jpg";
import VideoSvg from "../images/videos.svg";
import Heading3 from "../components/Heading3";
import Text from "../components/Text";
import imgFenderSessions from "../images/video-poster-fender-sessions.jpg";
import imgAdrianEagle from "../images/video-poster-adrian-eagle.jpg";
import imgCouchPotato from "../images/video-poster-couch-potato.jpg";
import IconPlay from "../images/icon-play.svg";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
// import Spacer from "../components/Spacer";
import Seperator from "../components/Seperator";
import HomeHero from "../components/HomeHero";

export default function Videos() {
  return (
    <>
      <Head>
        <title>VIDEOS - JESSE REO</title>
        <meta name="description" content="Videos featuring Jesse Reo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomeHero />

      <Main>
        <div className={styles.items}>
          <VideoItem
            heading={"Tash Sultana - Fender Sessions"}
            description="Jesse plays drums in a live recording for Tash Sultana in Fender Sessions."
            videoSrc="https://www.youtube.com/embed/l4GZah6WsOA?modestbranding=0&rel=0&autoplay=true"
            poster={imgFenderSessions}
          />
          <VideoItem
            heading="Adrian Eagle - Triple J's The Set"
            description="Jesse plays drums in a live recording for Adrian Eagles in Triple J's The Set."
            videoSrc="https://www.youtube.com/embed/PtfrSNRlFgA?modestbranding=0&rel=0&autoplay=true"
            poster={imgAdrianEagle}
          />
          <VideoItem
            heading={"Jakubi - Couch Potato"}
            description="Film clip for Jakubi single, Couch Potato"
            videoSrc="https://www.youtube.com/embed/uX8yoT9ct6k?modestbranding=0&rel=0&autoplay=true"
            poster={imgCouchPotato}
          />
        </div>
      </Main>

      <Pagination id="videos" className={styles.pagination} />

      <Footer />
    </>
  );
}

const VideoItem = (props) => {
  const [showVideo, setShowVideo] = useState(false);
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
            setShowVideo(true);
          }}
          style={{
            ...(showVideo == true && { pointerEvents: "none", opacity: 0 }),
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
      <Seperator />
    </div>
  );
};
