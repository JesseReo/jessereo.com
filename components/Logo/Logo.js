import styles from "./Logo.module.css";
import LogoImg from "../../images/logo-3a.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      {Array(10)
        .fill()
        .map((val, i) => (
          <LogoImg
            key={`logoImg${i}`}
            className={styles.svg}
            // style={{ transform: `translateZ(${i * 2}px)` }}
            alt="logo"
          />
        ))}
    </div>
  );
}
