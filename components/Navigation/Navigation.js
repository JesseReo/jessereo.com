import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navighation() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <>
      <div
        role="buttob"
        className={styles.menuIcon}
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
      >
        {menuIsActive ? <>close</> : <>menu</>}
      </div>

      <ul
        className={styles.list}
        style={{
          left: menuIsActive ? "0" : "100%",
        }}
      >
        {linksData.map((item) => {
          return (
            <Listitem
              key={item.label}
              path={item.path}
              label={item.label}
              clickHandler={() => {
                setMenuIsActive(false);
              }}
            />
          );
        })}
      </ul>
    </>
  );
}

const linksData = [
  {
    path: "/home",
    label: "Home",
  },
  {
    path: "/bio",
    label: "bio",
  },
  {
    path: "/videos",
    label: "Videos",
  },
  {
    path: "/photos",
    label: "Photos",
  },
  {
    path: "/dj",
    label: "DJ",
  },
  {
    path: "/tours",
    label: "Tours",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

function Listitem(props) {
  return (
    <li className={styles.listItem}>
      <Link href={props.path}>
        <a
          onClick={() => {
            props.clickHandler(props.path);
          }}
        >
          {props.label}
        </a>
      </Link>
    </li>
  );
}