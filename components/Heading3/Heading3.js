import styles from "./Heading3.module.css";

export default function Text(props) {
  return (
    <h3
      className={`${styles.heading3} ${props.className ?? ""}`}
      style={{ ...props.style }}
    >
      {props.children}
    </h3>
  );
}
