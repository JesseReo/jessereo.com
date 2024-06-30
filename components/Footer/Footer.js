import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import pageList from "../../content/page-list.json";
import InstagramLogo from "../../images/instagram-logo.svg";
import Text from "../Text";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerLinks}>
        {pageList.map((item, i) => (
          <li key={`footer-link-${i}`}>
            <Text>
              <Link href={item.href} passHref>
                <a>{item.id}</a>
              </Link>
            </Text>
          </li>
        ))}
      </ul>

      <div className={styles.footerSocial}>
        <Link href="https://www.instagram.com/reo.sounds/" passHref>
          <a target="_blank" aria-label="instagram">
            <InstagramLogo alt="instagram" />
          </a>
        </Link>
      </div>
    </div>
  );
}
