/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ScrollH.module.css";
import Text from "../Text";
import imgProfile from "../../images/profile.png";
import imgTash from "../../images/bio-tash5.webp";
import imgPerspective from "../../images/bio-perspective9.webp";
import imgEpic from "../../images/bio-epic9.webp";
import Heading2 from "../Heading2";
import Heading3 from "../Heading3";
import Spacer from "../Spacer/Spacer";

export default function ScrollH(props) {
  const contentElemRef = useRef();
  const hElemRef = useRef();

  useEffect(() => {
    if (!document || !contentElemRef.current) return;
    const scrollElem = document.querySelector(".scrollElem");
    const contentElem = contentElemRef.current;
    const hElem = hElemRef.current;

    if (!scrollElem || !contentElem) return;

    scrollElem.addEventListener("scroll", scrollHandler);

    function scrollHandler() {
      hElem.scrollLeft = scrollX();
    }

    function scrollX() {
      const scrollTop = scrollElem.scrollTop;
      const contentHeight = contentElem.scrollHeight;
      const percantageScrolled = (scrollTop / contentHeight) * 100;
      const hWidth = hElem.scrollWidth;
      const newH = (percantageScrolled / 100) * hWidth;
      return newH;
    }

    return () => {
      if (!scrollElem) return;
      scrollElem.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function getScrollPercentage() {
    if (!document || !contentElemRef.current) return;

    const scrollElem = document.querySelector(".scrollElem");
    const contentElem = contentElemRef.current;

    const scrollTop = scrollElem.scrollTop;
    const scrollHeight = contentElem.scrollHeight;

    // Calculate the scrollable height
    const scrollableHeight = scrollHeight;

    // Check for a scrollable height of zero to avoid division by zero
    if (scrollableHeight === 0) return 0;

    // Calculate the scroll percentage
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    return scrollPercentage;
  }

  return (
    <>
      <div ref={contentElemRef} className={styles.outer}>
        {/* horizontal content */}
        <div ref={hElemRef} className={styles.h}>
          <div className={styles.hInner}>
            <div className={styles.fullScreenContainer}></div>
            <div className={styles.fullScreenContainer}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src={imgTash}
                  alt="Tash tour"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={styles.fullScreenContainer}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src={imgPerspective}
                  alt="Perspective Records"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={styles.fullScreenContainer}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src={imgEpic}
                  alt="Epic Records"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* regular content */}
        <div className={styles.vert}>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Spacer />
              <Heading2>JESSE REO</Heading2>
              <Heading3>Drummer, DJ, and Audiophile</Heading3>
              <div className={styles.imgProfile}>
                <Image src={imgProfile} alt="profile" />
              </div>

              <Heading3 style={{ textWrap: "balance" }}>
                Currently on tour with Tash Sultana
              </Heading3>
              <br />
              <br />
              <Text>
                Most recently Jesse has been bringing his soulful energy touring
                worldwide with Tash Sultana.
              </Text>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading3>Perspective Records / Jakubi U.S. Tour</Heading3>
              <br />
              <br />
              <Text>
                In 2016, Jakubi Signs major recored label with Perspective
                records.spent six months working intensely with Jimmy Jam &
                Terry Lewis, spending 5-6 days a week in the studio, working
                one-on-one, jamming together into the early hours of the
                morning, writing songs and eating every meal together.
              </Text>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading3>Epic Records / Jakubi U.S. Tour</Heading3>
              <br />
              <br />
              <Text>
                Jesse is a founding member of Jakubi and signs with major record
                label deal with Epic Records. Scouted by LA Reid, Jakubi tours
                the U.S. four times selling out 300-500 cap rooms from New York
                City to Los Angeles.In between tours, writing and working with
                Macy Gray and Scott Storch (The Roots / Dr. Dre / 50 Cent /
                Beyonce / Nas) and supported legendary artists such as Sublime,
                Fishbone, The Suffers.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
