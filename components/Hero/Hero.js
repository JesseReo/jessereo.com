import styles from "./Hero.module.css";
import Heading1 from "../Heading1";

export default function Hero(props) {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: props.backgroundImage ?? "none",
      }}
    >
      {props.title && <Heading1>{props.title}</Heading1>}
      {props.children}
    </div>
  );
}
