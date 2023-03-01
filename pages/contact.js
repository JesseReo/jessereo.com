import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Heading2 from "../components/Heading2";
import Text from "../components/Text";
import Stack from "../components/Stack";
import img from "../images/hero-contact.jpg";
import EmailLink from "../components/EmailLink/EmailLink";
import ContactSvg from "../images/contact.svg";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>CONTACT - JESSE REAL</title>
        <meta name="description" content="Contact details for Jesse Real" />
      </Head>
      <Hero title="CONtact" titleImage={<ContactSvg />} backgroundImage={img} />
      <Main className={styles.main}>
        <Stack>
          <Heading2>get IN cOntact</Heading2>
          <Text>Accepting offers for solid grooves and peace.</Text>

          <br />
          <br />

          <Text>
            Send me an email <br />
            <EmailLink />
          </Text>

          <br />
          <br />

          <ContactForm />
        </Stack>
      </Main>
    </>
  );
}
