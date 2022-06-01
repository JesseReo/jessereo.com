import Head from "next/head";
// import styles from "../styles/Dj.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Text from "../components/Text";
import EmailLink from "../components/EmailLink";
import Stack from "../components/Stack";

export default function Dj() {
  return (
    <>
      <Head>
        <title>DJ - JESSE REAL</title>
        <meta
          name="description"
          content="DJ mixes, music and information for Jesse Real"
        />
      </Head>
      <Hero title="DJ" backgroundImage="/images/Jesse+B_Roll-2.jpg" />
      <Main>
        <Stack>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1269291343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
          <Text style={{ textAlign: "center" }}>
            To make a booking email: <EmailLink />
          </Text>
        </Stack>
      </Main>
    </>
  );
}
