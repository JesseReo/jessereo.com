import styles from "./Text.module.css";

export default function Text(props) {
  return (
    <p
      className={`${styles.text} ${props.className ?? ""}`}
      style={{
        fontWeight: props.bold ?? "400",
        color: props.color ?? "white",
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
}
