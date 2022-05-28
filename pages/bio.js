import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bio - JESSE REAL</title>
        <meta name="description" content="Biography for Jesse Real" />
      </Head>
      <Navigation />
      <main>
        <h1>Bio</h1>
      </main>
    </>
  );
}
