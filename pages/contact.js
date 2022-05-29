import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - JESSE REAL</title>
        <meta name="description" content="Contact details for Jesse Real" />
      </Head>
      <Hero
        title="Contact"
        backgroundImage="url(/loan-7AIDE8PrvA0-unsplash.jpg)"
      />
      <Main>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          hendrerit, diam in suscipit pulvinar.
        </p>

        <p className={styles.p}>
          Email:
          <a href="mailto:jesserehaut@gmail.com">jesserehaut@gmail.com</a>
        </p>

        <div className={styles.formContainer}>
          <h2>Send a message</h2>
          <form action="https://formspree.io/f/{form_id}" method="post">
            <label for="email" className={styles.label}>
              Your Email
            </label>
            <input
              name="Email"
              id="email"
              type="email"
              className={styles.input}
            />
            <label for="message" className={styles.label}>
              Your Message
            </label>
            <textarea
              name="Message"
              id="message"
              className={styles.message}
            ></textarea>
            <button type="submit" className={styles.submit}>
              Submit
            </button>
          </form>
        </div>
      </Main>
    </>
  );
}
