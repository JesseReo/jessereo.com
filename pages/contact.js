import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Heading2 from "../components/Heading2";
import Text from "../components/Text";
import Stack from "../components/Stack";
import img from "../public/images/jesse-film-12-art.jpg";
import EmailLink from "../components/EmailLink/EmailLink";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - JESSE REAL</title>
        <meta name="description" content="Contact details for Jesse Real" />
      </Head>
      <Hero title="CONtact" backgroundImage={img} />
      <Main>
        <div className={styles.content}>
          <Stack>
            <Heading2>get IN cOntact</Heading2>

            <Text>Accepting offers for solid grooves and peace.</Text>

            <Text>
              <EmailLink />
            </Text>

            {/* <div className={styles.formContainer}>
            <form action="https://formspree.io/f/{form_id}" method="post">
              <fieldset>
                <legend>
                  <Heading2>Send a message</Heading2>
                </legend>
                <Stack>
                  <div>
                    <label htmlFor="email" className={styles.label}>
                      <Text>Your Email</Text>
                    </label>
                    <input
                      name="Email"
                      id="email"
                      type="email"
                      className={styles.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className={styles.label}>
                      <Text> Your Message</Text>
                    </label>
                    <textarea
                      name="Message"
                      id="message"
                      className={styles.textarea}
                    />
                  </div>
                  <button type="submit" className={styles.submit}>
                    <Text> Submit</Text>
                  </button>
                </Stack>
              </fieldset>
            </form>
          </div> */}
          </Stack>
        </div>
      </Main>
    </>
  );
}
