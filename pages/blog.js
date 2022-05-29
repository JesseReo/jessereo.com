import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Blog.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - JESSE REAL LiVES</title>
        <meta
          name="description"
          content="Blog and articles written by Jesse Real for up and coming drummer"
        />
      </Head>
      <Hero
        title="Blog"
        backgroundImage="url(/loan-7AIDE8PrvA0-unsplash.jpg)"
      />
      <Main>
        <div className={styles.blogList}>
          <div className={styles.blogListItem}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/loan-7AIDE8PrvA0-unsplash.jpg"
                  alt="alt"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardTitle}>Title</div>
              <div className={styles.cardDesc}>Lorem Ipsum</div>
            </div>
          </div>

          <div className={styles.blogListItem}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/loan-7AIDE8PrvA0-unsplash.jpg"
                  alt="alt"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardTitle}>Title</div>
              <div className={styles.cardDesc}>Lorem Ipsum</div>
            </div>
          </div>

          <div className={styles.blogListItem}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src="/loan-7AIDE8PrvA0-unsplash.jpg"
                  alt="alt"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardTitle}>Title</div>
              <div className={styles.cardDesc}>Lorem Ipsum</div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
