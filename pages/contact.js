import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Heading2 from "../components/Heading2";
import Text from "../components/Text";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - JESSE REAL</title>
        <meta name="description" content="Contact details for Jesse Real" />
      </Head>
      <Hero title="Contact" backgroundImage="/loan-7AIDE8PrvA0-unsplash.jpg" />
      <Main>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          hendrerit, diam in suscipit pulvinar.
        </Text>

        <Text>
          Email:
          <a href="mailto:jesserehaut@gmail.com">jesserehaut@gmail.com</a>
        </Text>

        <div className={styles.formContainer}>
          <Heading2>Send a message</Heading2>
          <form action="https://formspree.io/f/{form_id}" method="post">
            <label htmlFor="email" className={styles.label}>
              <Text>Your Email</Text>
            </label>
            <input
              name="Email"
              id="email"
              type="email"
              className={styles.input}
            />
            <label htmlFor="message" className={styles.label}>
              <Text> Your Message</Text>
            </label>
            <textarea
              name="Message"
              id="message"
              className={styles.message}
            ></textarea>
            <button type="submit" className={styles.submit}>
              <Text> Submit</Text>
            </button>
          </form>
        </div>
      </Main>
    </>
  );
}
