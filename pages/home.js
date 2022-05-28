import Head from "next/head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>JESSE REAL LiVES</title>
        <meta
          name="description"
          content="The home page of Jesse Real the honest hommus adonis"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <div className={styles.pageContainer}>
        <Navigation />

        <main className={styles.main}>
          <div className={styles.logo}>LOGO</div>
        </main>

        <footer className={styles.footer}>your local weather</footer>

        <video className={styles.video} autoPlay muted loop>
          <source src="/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
