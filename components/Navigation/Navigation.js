import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";
import MenuIcon from "../MenuIcon/MenuIcon";
import HomeSvg from "../../images/home.svg";
import BioSvg from "../../images/bio.svg";
import VideoSvg from "../../images/videos.svg";
import DjSvg from "../../images/dj.svg";
import ToursSvg from "../../images/tours.svg";
import ContactImg from "../../images/contact.svg";
import bgImg from "../../images/menu-bg.jpg";

export default function Navighation() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <>
      <div
        role="button"
        className={styles.menuIcon}
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
      >
        <MenuIcon active={menuIsActive} />
      </div>

      <div
        className={`${styles.navContainer} ${
          menuIsActive ? styles.navContainerActive : ""
        }`}
      >
        <ul className={styles.list}>
          {linksData.map((item) => {
            return (
              <Listitem
                key={item.label}
                clickHandler={() => {
                  setMenuIsActive(false);
                }}
                {...item}
              />
            );
          })}
        </ul>
        <Image
          src={bgImg}
          alt="alt"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
    </>
  );
}

const linksData = [
  {
    path: "/",
    label: "hOme",
    image: <HomeSvg />,
  },
  {
    path: "/bio",
    label: "bIO",
    image: <BioSvg />,
  },
  {
    path: "/videos",
    label: "VideO",
    image: <VideoSvg />,
  },
  // {
  //   path: "/photos",
  //   label: "Photos",
  // },
  {
    path: "/dj",
    label: "dj",
    image: <DjSvg />,
  },
  {
    path: "/tours",
    label: "TOurs",
    image: <ToursSvg />,
  },
  // // {
  // //   path: "/blog",
  // //   label: "Blog",
  // // },
  {
    path: "/contact",
    label: "COntact",
    image: <ContactImg />,
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
          {props.image}
          {/* <Image
            src={props.image}
            alt={props.label}
            layout="fill"
            objectFit="contain"
          /> */}
        </a>
      </Link>
    </li>
  );
}
