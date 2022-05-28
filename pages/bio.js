import Head from "next/head";
import styles from "../styles/Bio.module.css";
import Navigation from "../components/Navigation";
import PageContainer from "../components/PageContainer";
import Logo from "../components/Logo";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bio - JESSE REAL</title>
        <meta name="description" content="Biography for Jesse Real" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageContainer>
        <Navigation />

        <Logo />

        <header
          className={styles.header}
          style={{
            backgroundImage: "url(/loan-7AIDE8PrvA0-unsplash.jpg)",
          }}
        >
          <h1 className={styles.title}>Bio</h1>
        </header>

        <Main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            hendrerit, diam in suscipit pulvinar, felis tortor viverra orci,
            vitae tincidunt augue velit eu lorem. Aliquam placerat cursus ante
            ac euismod. Mauris quam turpis, facilisis non odio blandit,
            scelerisque cursus justo. Sed eu ornare nunc, sed placerat dolor.
            Fusce congue ipsum in sagittis euismod. Nunc nisi tortor, volutpat
            in vehicula ut, varius eget ex. Donec id est massa. Quisque id diam
            condimentum justo faucibus sagittis nec id justo. Duis efficitur
            libero sed dui ultricies blandit. Mauris accumsan nisi orci, quis
            auctor tellus eleifend quis. Donec sodales tincidunt aliquet.
          </p>
        </Main>
      </PageContainer>
    </>
  );
}
