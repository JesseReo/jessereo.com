import Head from "next/head";
import styles from "../styles/Dj.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Text from "../components/Text";
import EmailLink from "../components/EmailLink";
import Stack from "../components/Stack";
import heroImg from "../images/hero-dj.jpg";
import Heading2 from "../components/Heading2";
import DjSvg from "../images/dj.svg";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer/Footer";

export default function Dj() {
  return (
    <>
      <Head>
        <title>DJ - JESSE REO</title>
        <meta
          name="description"
          content="DJ mixes, music and information for Jesse Reo"
        />
      </Head>
      <Hero title="DJ" titleImage={<DjSvg />} backgroundImage={heroImg} />
      <Main>
        <div className={styles.content}>
          <Stack>
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

      <Pagination id="dj" className={styles.pagination} />

      <Footer />
    </>
  );
}
