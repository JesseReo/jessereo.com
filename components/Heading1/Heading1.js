import styles from "./Heading1.module.css";

export default function Text(props) {
  return (
    <h1 className={styles.heading1} style={{ ...props.style }}>
      {props.children}
    </h1>
  );
}
