import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>JESSE REAL LiVES</title>
        <meta
          name="description"
          content="The home page of Jesse Real the honest hommus adonis"
        />
      </Head>
      <Navigation />
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}
