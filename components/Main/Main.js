import styles from "./Main.module.css";

export default function Main(props) {
  return (
    <div className={styles.main} {...props}>
      {props.children}
    </div>
  );
}
