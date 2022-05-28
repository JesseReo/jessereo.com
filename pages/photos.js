import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Photos() {
  return (
    <>
      <Head>
        <title>Photos - JESSE REAL</title>
        <meta name="description" content="Photos featuring Jesse Real" />
      </Head>
      <Navigation />
      <main>
        <h1>Photos</h1>
      </main>
    </>
  );
}
