import styles from "./Main.module.css";

export default function Main(props) {
  return (
    <div
      className={styles.main}
      style={{
        ...(props.fullWidth && { maxWidth: "100%" }),
      }}
    >
      {props.children}
    </div>
  );
}
