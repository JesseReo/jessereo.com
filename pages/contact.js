import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import Hero from "../components/Hero";
import Heading2 from "../components/Heading2";
import Heading3 from "../components/Heading3";
import Text from "../components/Text";
import img from "../images/hero-contact.jpg";
import EmailLink from "../components/EmailLink/EmailLink";
import ContactSvg from "../images/contact.svg";
import ContactForm from "../components/ContactForm";
import contact1 from "../images/contact1.jpg";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer/Footer";
import Seperator from "../components/Seperator";
import Spacer from "../components/Spacer/Spacer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>CONTACT - JESSE REO</title>
        <meta name="description" content="Contact details for Jesse Reo" />
      </Head>
      <Hero backgroundImage={img} />

      <div className={styles.layout}>
        <div className={`${styles.layoutItem} ${styles.layoutContent}`}>
          <div className={styles.titleImage}>
            <ContactSvg />
          </div>

          <Spacer />

          <Text>Accepting offers for solid grooves and peace.</Text>

          <Spacer />

          <div>
            <Text>Email</Text>
            <Text>
              <EmailLink />
            </Text>
          </div>

          <Spacer />

          <ContactForm />

          <Spacer />
        </div>

        <div className={`${styles.layoutItem} ${styles.layoutImage}`}>
          <Image
            src={contact1}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt="Jesse sitting on kick drum"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
