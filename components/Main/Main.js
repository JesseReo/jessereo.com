import styles from "./Main.module.css";

export default function Main(props) {
  return (
    <main
      className={`${styles.main} ${props.className ?? ""}`}
      style={{
        ...(props.style && { ...props.style }),
      }}
    >
      <div
        className={styles.mainInner}
        style={{
          ...(props.fullWidth && { maxWidth: "100%" }),
        }}
      >
        {props.children}
      </div>
    </main>
  );
}
