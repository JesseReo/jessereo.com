import Link from "next/link";
import styles from "./Pagination.module.css";
import pageList from "../../content/page-list.json";
import Arrow from "../../images/arrow.svg";
import Home from "../../images/home.svg";
import Bio from "../../images/bio.svg";
import Videos from "../../images/videos.svg";
import Dj from "../../images/dj.svg";
import Tours from "../../images/tours.svg";
import Contact from "../../images/contact.svg";

export default function Pagination(props) {
  const index = pageList.findIndex((item) => item.id === props.id);
  if (typeof index === undefined) return;

  const prevId =
    index - 1 < 0 || index - 1 > pageList.length ? undefined : index - 1;

  const nextId =
    index + 1 < 0 || index + 1 >= pageList.length ? undefined : index + 1;

  return (
    <div className={`${styles.outer} ${props.className ?? ""}`}>
      {typeof prevId !== "undefined" ? (
        <PrevNext
          direction="left"
          label={pageList[prevId].id}
          href={pageList[prevId].href}
        />
      ) : (
        <div />
      )}

      {typeof nextId !== "undefined" ? (
        <PrevNext
          direction="right"
          label={pageList[nextId].id}
          href={pageList[nextId].href}
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export function PrevNext(props) {
  const dataMap = {
    home: { href: "/", label: <Home /> },
    bio: { href: "/bio", label: <Bio /> },
    videos: { href: "/videos", label: <Videos /> },
    dj: { href: "/dj", label: <Dj /> },
    tours: { href: "/tours", label: <Tours /> },
    contact: { href: "/contact", label: <Contact /> },
  };

  return (
    <div className={styles.prevNextOuter}>
      <Link href={dataMap[props.label].href}>
        <a
          aria-label={props.label}
          className={`${styles.prevNextInner} ${
            props.direction == "left" ? styles.left : styles.right
          }`}
        >
          {dataMap[props.label].label}

          <Arrow
            className={styles.arrow}
            style={{
              transform:
                props.direction == "left" ? `rotate(90deg)` : `rotate(-90deg)`,
            }}
          />
        </a>
      </Link>
    </div>
  );
}
