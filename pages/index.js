import Head from "next/head";
import HomeHero from "../components/HomeHero";
import Main from "../components/Main";
import BigLink from "../components/BigLink";
import TheDrummerSvg from "../images/the-drummer.svg";
import TheDjSvg from "../images/the-dj.svg";
import TheTravellerSvg from "../images/the-traveller.svg";
import WakeUpSvg from "../images/wake-the-funk-up.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>JESSE REO</title>
        <meta
          name="description"
          content="The homepage of Jesse Reo, the honest hommus adonis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HomeHero />

      <Main></Main>

      <BigLink
        href="/bio"
        color="#eb1400"
        label="bio"
        labelImg={<TheDrummerSvg alt="bio" />}
      />
      <BigLink
        href="/dj"
        color="#192cd1"
        label="dj"
        labelImg={<TheDjSvg alt="dj" />}
      />
      <BigLink
        href="/tours"
        color="#f8ff1f"
        textColor="#000"
        label="tours"
        labelImg={<TheTravellerSvg alt="tours" />}
      />
      <BigLink
        href="/contact"
        color="#00ba56"
        label="contact"
        labelImg={<WakeUpSvg alt="contact" />}
      />
    </>
  );
}
