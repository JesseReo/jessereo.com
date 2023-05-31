import Image from "next/image";
import styles from "./Hero.module.css";
import ArrowDown from "../../images/arrow.svg";
import arrowDown from "../../images/arrow.png";

export default function Hero(props) {
  return (
    <>
      <div
        className={`${styles.hero} ${styles.parallaxItem}`}
        onClick={() => {
          document
            .querySelector(".nextSection")
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{ cursor: `url('${arrowDown.src}'), auto` }}
      >
        <div className={styles.content}>
          <div className={styles.titleImage}>{props.titleImage}</div>
          {props.children}
        </div>

        <div className={styles.downArrow}>
          <ArrowDown />
        </div>

        <div className={`${styles.backgroundImage}`}>
          <Image
            src={props.backgroundImage}
            alt="alt"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
          />
        </div>
      </div>

      <span className="nextSection" />
    </>
  );
}
