import styles from "./Heading2.module.css";

export default function Text(props) {
  return (
    <h2
      className={`${styles.heading2} ${props.className ?? ""}`}
      style={{ ...props.style }}
    >
      {props.children}
    </h2>
  );
}
