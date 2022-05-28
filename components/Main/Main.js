import styles from "./Main.module.css";

export default function Main(props) {
  return (
    <div
      className={styles.main}
      style={{
        maxWidth: props.fullWidth ? "100%" : "inherit",
      }}
    >
      {props.children}
    </div>
  );
}
