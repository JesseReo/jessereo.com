import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import PageContainer from "../components/PageContainer";
import Logo from "../components/Logo";
import Main from "../components/Main";

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

      <PageContainer>
        <Navigation />

        <Logo />

        <Main />

        <footer className={styles.footer}>Your local weather</footer>

        <video className={styles.video} autoPlay muted loop>
          <source src="/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        </video>
      </PageContainer>
    </>
  );
}
