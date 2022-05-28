import styles from "./Hero.module.css";

export default function Hero(props) {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: props.backgroundImage ?? "none",
      }}
    >
      {props.title && <h1 className={styles.title}>{props.title}</h1>}
      {props.children}
    </div>
  );
}
