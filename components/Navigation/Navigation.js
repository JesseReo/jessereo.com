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
import InstagramLogo from "../../images/instagram-logo.svg";

export default function Navighation(props) {
  const menuIsActive = props.menuIsActive;
  const setMenuIsActive = props.setMenuIsActive;

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

        <div className={`${styles.listItem} ${styles.instagramLogo}`}>
          <Link href="https://www.instagram.com/reo.sounds" passHref>
            <a target="_blank" aria-label="instagram">
              <InstagramLogo alt="instagram" />
            </a>
          </Link>
        </div>

        <Image
          className={styles.bgImg}
          src={bgImg}
          alt="alt"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          style={{ pointerEvents: "none" }}
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
  {
    path: "/dj",
    label: "dj",
    image: <DjSvg />,
  },
  // {
  //   path: "/tours",
  //   label: "TOurs",
  //   image: <ToursSvg />,
  // },
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
          aria-label={props.label}
        >
          {props.image}
        </a>
      </Link>
    </li>
  );
}
