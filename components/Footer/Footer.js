import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import pageList from "../../content/page-list.json";
import LogoImg from "../../images/logo-3a.svg";
import InstagramLogo from "../../images/instagram-logo.svg";
import Text from "../Text";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <Link href="/" passHref>
          <a aria-label="home">
            <LogoImg />
          </a>
        </Link>
      </div>

      <ul className={styles.footerLinks}>
        {pageList.map((item, i) => (
          <li key={`footer-link-${i}`}>
            <Link href={item.href} passHref>
              <a>
                <Text>{item.id}</Text>
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.footerSocial}>
        <Link href="https://www.instagram.com/jesse.funk/" passHref>
          <a target="_blank" aria-label="instagram">
            <InstagramLogo alt="instagram" />
          </a>
        </Link>
      </div>
    </div>
  );
}
