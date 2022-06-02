import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import Text from "../components/Text";
import Hero from "../components/Hero";
import img from "../public/images/jesse-rugs-3.jpg";

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
      <Hero backgroundImage={img} />
      <Main />
      <Image
        src={img}
        alt="alt"
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
        priority
      />
      <footer className={styles.footer}>
        <Text>Your local weather</Text>
      </footer>
      {/* <video className={styles.video} autoPlay muted loop>
        <source src="/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
      </video> */}
    </>
  );
}
