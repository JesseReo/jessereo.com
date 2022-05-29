import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import Text from "../components/Text";

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
      <Main />
      <footer className={styles.footer}>
        <Text>Your local weather</Text>
      </footer>
      <video className={styles.video} autoPlay muted loop>
        <source src="/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
      </video>
    </>
  );
}
