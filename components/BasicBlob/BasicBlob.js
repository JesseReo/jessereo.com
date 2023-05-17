import styles from "./BasicBlob.module.css";
import img from "../../images/hero-videos.jpg";

export default function VideoBlob() {
  return (
    <div className={styles.container}>
      <img src={img.src} className={styles.image} alt="" />
      <svg className={styles.svg} viewBox="0 0 1 1">
        <clipPath id="hommus" clipPathUnits="objectBoundingBox">
          <path
            className={styles.path}
            fill="red"
            d="M1,0.5c0,0.15-0.13,0.36-0.25,0.44s-0.38,0.07-0.5,0S0,0.65,0,0.5s0.13-0.36,0.25-0.44s0.38-0.07,0.5,0 S1,0.35,1,0.5S0.88,0.86,0.75,0.94"
          />
        </clipPath>
      </svg>
    </div>
  );
}
