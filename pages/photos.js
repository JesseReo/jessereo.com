import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Photos.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";

export default function Photos() {
  return (
    <>
      <Head>
        <title>Photos - JESSE REAL</title>
        <meta name="description" content="Photos featuring Jesse Real" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero title="Photos" backgroundImage="/loan-7AIDE8PrvA0-unsplash.jpg" />
      <Main fullWidth>
        <div className={styles.photoGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
            return (
              <div className={styles.photoGridItem} key={`photo-${i}`}>
                <Image
                  src="/loan-7AIDE8PrvA0-unsplash.jpg"
                  alt="alt"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            );
          })}
        </div>
      </Main>
    </>
  );
}
