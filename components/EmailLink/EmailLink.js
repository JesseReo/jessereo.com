import styles from "./EmailLink.module.css";

export default function EmailLink() {
  return (
    <a href="mailto:jesserehaut@gmail.com" className={styles.link}>
      jesserehaut@gmail.com
    </a>
  );
}
