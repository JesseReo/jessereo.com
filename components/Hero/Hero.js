import Image from "next/image";
import styles from "./Hero.module.css";
import Heading1 from "../Heading1";

export default function Hero(props) {
  return (
    <div className={styles.hero}>
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
      <div className={styles.content}>
        {props.title && <Heading1>{props.title}</Heading1>}
        {props.children}
      </div>
    </div>
  );
}
