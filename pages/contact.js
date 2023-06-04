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

export default function Contact() {
  return (
    <>
      <Head>
        <title>CONTACT - JESSE REO</title>
        <meta name="description" content="Contact details for Jesse Reo" />
      </Head>
      <Hero title="CONtact" titleImage={<ContactSvg />} backgroundImage={img} />

      <div className={styles.layout}>
        <div className={`${styles.layoutItem} ${styles.layoutContent}`}>
          <div>
            <Heading2 className={styles.title}>GET IN CONTACT</Heading2>
            <Heading3 className={styles.subTitle}>
              Accepting offers for solid grooves and peace.
            </Heading3>
          </div>

          <div>
            <Text>Email</Text>
            <Text bold>
              <EmailLink />
            </Text>
          </div>

          <ContactForm />
        </div>

        <div className={`${styles.layoutItem} ${styles.layoutImage}`}>
          <Image
            src={contact1}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt=""
          />

          <Pagination id="contact" className={styles.pagination} />
        </div>
      </div>

      <Footer />
    </>
  );
}
