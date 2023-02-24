import styles from "./MenuIcon.module.css";
import MenuOpen from "./images/menu-open.svg";
import MenuClose from "./images/menu-close.svg";

export default function MenuIcon(props) {
  return (
    <div className={styles.outer}>
      {!props.active ? <MenuOpen /> : <MenuClose />}
    </div>
  );
}
