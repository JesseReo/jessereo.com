import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.css";
import Text from "../Text";
import Spinner from "./images/spinner.svg";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjvdwznj");

  return (
    <>
      {!state.succeeded && (
        <Text>
          or fill out the form <br />
        </Text>
      )}

      <div className={styles.formContainer}>
        {state.succeeded ? (
          <Text style={{ textAlign: "center", color: "black" }}>
            Thanks for your message, <br /> i&apos;ll get back to you soon.
          </Text>
        ) : (
          <>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.fieldContainer}>
                <label className={styles.label} htmlFor="email">
                  Email Address
                </label>
                <input
                  className={styles.input}
                  id="email"
                  type="email"
                  name="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className={styles.fieldContainer}>
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                className={styles.submit}
                type="submit"
                disabled={state.submitting}
              >
                <span>Submit</span>

                {state.submitting && (
                  <div className={styles.spinnerContainer}>
                    <Spinner />
                  </div>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
