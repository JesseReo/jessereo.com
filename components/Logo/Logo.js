import Image from "next/image";
import styles from "./Logo.module.css";
import LogoImg from "../../images/brandmark-white.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <LogoImg />
    </div>
  );
}
