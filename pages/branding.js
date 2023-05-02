/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Branding.module.css";
import Main from "../components/Main";
import Heading2 from "../components/Heading2";
import Text from "../components/Text";

export default function Home() {
  const playIconRef = useRef();

  return (
    <>
      <Head>
        <title>JESSE REO</title>
        <meta
          name="description"
          content="The homepage of Jesse Reo, the honest hommus adonis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Main style={{ minHeight: "100vh", textAlign: "center" }}>
        <Heading2>Branding Assets</Heading2>
        <br />
        <br />

        <hr />
        <br />
        <br />
        <Text>LOGO BLACK</Text>
        <br />
        <br />

        {[
          {
            filepath: "../images/logo-variations/",
            filename: "logo-black.svg",
            width: 250,
            description: "vector, transparent background.",
          },
          {
            filepath: "../images/logo-variations/",
            filename: "logo-black-500px.png",
            width: 500,
            description: "500px wide, transparent background.",
          },
          {
            filepath: "../images/logo-variations/",
            filename: "logo-black-500px.jpg",
            width: 500,
            description: "500px wide, white background.",
          },
          {
            filepath: "../images/logo-variations/",
            filename: "logo-black-1000px.png",
            width: 1000,
            description: "1000px wide, transparent background.",
          },
          {
            filepath: "../images/logo-variations/",
            filename: "logo-black-1000px.jpg",
            width: 1000,
            description: "1000px wide, white background.",
          },
        ].map((itemProps, i) => (
          <Item key={`image-${i}`} {...itemProps} />
        ))}

        <br />
        <br />
        <hr />
        <Text>LOGO WHITE</Text>
        <br />
        <br />
        {[
          {
            filepath: "../images/logo-variations/",
            filename: "logo-white.svg",
            width: 250,
            description: "vector, transparent background.",
          },
          {
            filepath: "../images/logo-variations/",
            filename: "logo-white-500px.png",
            width: 500,
            description: "500px wide, transparent background.",
          },
          {
            filepath: "../images/logo-variations/",
            filename: "logo-white-500px.jpg",
            width: 500,
            description: "500px wide, black background.",
          },
          {
            filepath: "../images/logo-variations/",
            filename: "logo-white-1000px.png",
            width: 1000,
            description: "1000px wide, transparent background.",
          },
          {
            filepath: "../images/logo-variations/",
            filename: "logo-white-1000px.jpg",
            width: 1000,
            description: "1000px wide, black background.",
          },
        ].map((itemProps, i) => (
          <Item key={`image-${i}`} {...itemProps} />
        ))}
      </Main>
    </>
  );
}

const Item = (props) => {
  return (
    <div className={styles.itemOuter}>
      <div className={styles.itemInner}>
        <div className={styles.imageContainer}>
          <img src={`${props.filepath}${props.filename}`} width={props.width} />
        </div>
        <Text>
          <strong>{props.filename}</strong>
        </Text>
        <Text>{props.description}</Text>
        <br />
        <Text>
          <a
            className={styles.button}
            href={`${props.filepath}${props.filename}`}
            download
          >
            Download
          </a>
        </Text>
      </div>
    </div>
  );
};
