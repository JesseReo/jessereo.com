import styles from "./Main.module.css";

export default function Main(props) {
  return (
    <main
      className={styles.main}
      style={{
        ...(props.fullWidth && { maxWidth: "100%" }),
        ...(props.style && { ...props.style }),
      }}
    >
      <div className={styles.mainInner}>{props.children}</div>
    </main>
  );
}
