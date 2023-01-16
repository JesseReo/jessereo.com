import Image from "next/image";
import styles from "./Logo.module.css";
import logoImg from "../../images/brandmark-white.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logoImg.src} alt="logo" />
    </div>
  );
}
