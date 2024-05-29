/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import styles from "./ScrollH.module.css";
import Text from "../Text";

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
      const scrollTop = scrollElem.scrollTop;
      const contentHeight = contentElem.scrollHeight;
      const percantageScrolled = (scrollTop / contentHeight) * 100;
      const hWidth = hElem.scrollWidth;
      const newH = (percantageScrolled / 100) * hWidth;
      // hElem.scrollLeft = newH;

      hElem.scrollLeft = newH;
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
        {/* horizontal content*/}
        <div ref={hElemRef} className={styles.h}>
          <div className={styles.hInner}>
            <div
              className={styles.fullScreenContainer}
              style={{ width: "50vw" }}
            >
              fsc
            </div>
            <div className={styles.fullScreenContainer}>
              <Img />
            </div>
            <div className={styles.fullScreenContainer}>
              <Img />
            </div>
            <div className={styles.fullScreenContainer}>
              <Img />
            </div>
            <div className={styles.fullScreenContainer}>
              <Img />
            </div>
            <div className={styles.fullScreenContainer}>
              <Img />
            </div>
            <div className={styles.fullScreenContainer}>
              <Img />
            </div>
          </div>
        </div>

        {/* regular content */}
        <div className={styles.vert}>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Text>
                With a career built on hard work, passion, and natural-born
                talent, it is no surprise that Jesse has performed sold-out
                shows around the world, playing at some of the most respected
                venues and{" "}
                <strong>
                  signing with major labels Epic Records & Perspective Records.
                </strong>{" "}
                Jesse is currently performing at arena show level, with
                in-demand Australian acts <strong>Tash Sultana</strong> and{" "}
                <strong>Adrian Eagle</strong>, recently playing on MTV Unplugged
                and Fender Sessions.
              </Text>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Text>
                Most recently Jesse has been bringing his soulful energy touring
                worldwide with Tash Sultana. So far they have played xx shows
                across xx different countries.
              </Text>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
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
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Text></Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Img() {
  return (
    <img
      className={styles.img}
      src="https://images.unsplash.com/photo-1529467037979-99d067b7677d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="puppy"
    />
  );
}
