import Image from "next/image";
import styles from "./Hero.module.css";
import Heading1 from "../Heading1";
import Arrow from "../Arrow";

export default function Hero(props) {
  return (
    <>
      <div
        className={styles.hero}
        onClick={() => {
          document
            .querySelector(".nextSection")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className={styles.content}>
          {props.title && <Heading1>{props.title}</Heading1>}
          {props.children}
        </div>

        <div className={styles.downArrow}>
          <Arrow />
        </div>

        {props.backgroundImage && (
          <div className={styles.backgroundImage}>
            <Image
              src={props.backgroundImage}
              alt="alt"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              priority
            />
          </div>
        )}
      </div>
      <span className="nextSection" />
    </>
  );
}
