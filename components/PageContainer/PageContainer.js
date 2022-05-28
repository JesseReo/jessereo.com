import styles from "./PageContainer.module.css";

export default function PageContainer(props) {
  return <div className={styles.pageContainer}>{props.children}</div>;
}
