import styles from "./Stack.module.css";

export default function Stack(props) {
  return (
    <div className={styles.stack} style={{ ...props.style }}>
      {props.children}
    </div>
  );
}
