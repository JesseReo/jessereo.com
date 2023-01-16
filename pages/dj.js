import Head from "next/head";
import styles from "../styles/Dj.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Text from "../components/Text";
import EmailLink from "../components/EmailLink";
import Stack from "../components/Stack";
import img from "../public/images/jesse-b-roll-2-art.jpg";
import BigLink from "../components/BigLink";
import Heading2 from "../components/Heading2";
import DjSvg from "../images/dj.svg";
import ToursSvg from "../images/tours.svg";

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
      <Hero title="DJ" titleImage={<DjSvg />} backgroundImage={img} />
      <Main>
        <div className={styles.content}>
          <Stack>
            {/* <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1269291343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          /> */}
            <Heading2 style={{ textAlign: "center" }}>
              Mixes coming sOOn
            </Heading2>
            <Text style={{ textAlign: "center" }}>
              To make a booking, email: <br />
              <EmailLink />
            </Text>
          </Stack>
        </div>
      </Main>
      <BigLink
        href="/tours"
        color="#f8ff1f"
        textColor="#000"
        label="tOUrs"
        labelImg={<ToursSvg />}
      />
    </>
  );
}
