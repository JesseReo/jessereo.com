import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import MenuIcon from "../MenuIcon/MenuIcon";
import Text from "../Text/Text";

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
        <MenuIcon active={menuIsActive} />
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
    path: "/",
    label: "hOme",
  },
  {
    path: "/bio",
    label: "bIO",
  },
  {
    path: "/videos",
    label: "VideOS",
  },
  // {
  //   path: "/photos",
  //   label: "Photos",
  // },
  {
    path: "/dj",
    label: "dj",
  },
  {
    path: "/tours",
    label: "TOurs",
  },
  // {
  //   path: "/blog",
  //   label: "Blog",
  // },
  {
    path: "/contact",
    label: "COntact",
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
