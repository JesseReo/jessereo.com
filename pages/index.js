import { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import BigLink from "../components/BigLink";
import heroImg from "../images/hero-home.jpg";
import poster from "../images/video-poster.jpg";
import TheDrummerSvg from "../images/the-drummer.svg";
import TheDjSvg from "../images/the-dj.svg";
import TheTravellerSvg from "../images/the-traveller.svg";
import WakeUpSvg from "../images/wake-the-funk-up.svg";
import Weather from "../components/Weather";
import Main from "../components/Main";
import Stack from "../components/Stack";
import Heading2 from "../components/Heading2";
import Text from "../components/Text";

export default function Home() {
  const playIconRef = useRef();

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

      <Weather />

      <Hero backgroundImage={heroImg} />

      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          loop
          playsInline
          poster={poster.src}
          onClick={(e) => {
            if (e.target.paused) {
              e.target.play();
              playIconRef.current.style.display = "none";
            } else {
              e.target.pause();
              playIconRef.current.style.display = "block";
            }
          }}
        >
          <source src="/videos/intro-edit.mp4" type="video/mp4" />
        </video>

        {/* <Link href="/videos">
          <a
            style={{
              color: "#535353",
              textDecoration: "underline",
            }}
          >
            watch full version
          </a>
        </Link> */}

        <div ref={playIconRef} className={styles.playIcon}>
          <svg viewBox="0 0 512 512">
            <path d="M128,96v320l256-160L128,96L128,96z" />
          </svg>
        </div>
      </div>

      <Main>
        <Stack>
          <Heading2>Jesse REO Touring / session musician</Heading2>
          <Text>
            Most recently Jesse brings his soulful energy touring worldwide with
            Tash Sultana across the US, Canada, Europe, New Zealand, and
            Australia.
          </Text>
          <hr />

          <Heading2>study / cuba 2018</Heading2>
          <Text>
            Jesse took one-on-one lessons with Cuban multi instrumentalist Redy
            Cobas, learning Bembe/Merengue/Rumba/Son/Songo rhythms while jamming
            together in a hot, sweaty room in Havana.
          </Text>
          <hr />

          <Heading2>Jakbuki / Perspective Records - 2016 </Heading2>
          <Text>
            In 2016, Jakubi Signs major recored label with Perspective records.
            <br />
            spent six months working intensely with Jimmy Jam &amp; Terry Lewis,
            spending 5-6 days a week in the studio, working one-on-one, jamming
            together into the early hours of the morning, writing songs and
            eating every meal together.
          </Text>
          <hr />

          <Heading2>Jakbuki / us tours - 2012</Heading2>
          <Text>
            Jesse is a founding member of Jakubi and signs with major record
            label deal with Epic Records. <br />
            Scouted by LA Reid, Jakubi tours the us four times selling out
            300-500 cap rooms from New York City to Los Angeles. <br />
            In between tours, writing and working with Macy Gray and Scott
            Storch (The Roots/Dr. Dre/ 50 Cent/Beyonce/Nas) and supported
            legendary artists such as Sublime, Fishbone, The Suffers.
          </Text>
          <hr />

          <Heading2>Early life 2 -1988 - 2014</Heading2>
          <Text>
            He received his first drum lesson at the age of seventeen, when he
            began private sessions with The Cat Empire&apos;s Will Hull-Brown.
          </Text>
          <hr />
        </Stack>
      </Main>

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
