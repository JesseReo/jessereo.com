import styles from "./Text.module.css";

export default function Text(props) {
  return (
    <p
      className={`${styles.text} ${props.className ?? ""}`}
      style={{ ...props.style }}
    >
      {props.children}
    </p>
  );
}
