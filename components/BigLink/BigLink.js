import Link from "next/link";
import styles from "./BigLink.module.css";
import ArrowRight from "../../images/arrow.svg";

export default function BigLink(props) {
  return (
    <Link href={props.href}>
      <a
        className={styles.bigLink}
        style={{
          backgroundColor: props.color ?? "none",
          fill: props.textColor ?? "#fff",
        }}
        aria-label={props.label}
      >
        <div className={`${styles.label} biglink__label`}>{props.labelImg}</div>

        {props.arrow && (
          <div className={styles.arrow}>
            <ArrowRight />
          </div>
        )}
      </a>
    </Link>
  );
}
