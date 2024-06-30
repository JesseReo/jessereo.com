/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./ScrollH.module.css";
import Text from "../Text";

export default function ScrollH() {
  return (
    <>
      <div className={styles.sectionPin}>
        {/* horizontal content*/}
        <div className={styles.pinWrapSticky}>
          <div className={styles.pinWrap}>
            <div className={styles.fullScreenContainer}></div>
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
                1. With a career built on hard work, passion, and natural-born
                talent, it is no surprise that Jesse has performed sold-out
                shows around the world, playing at some of the most respected
                venues and signing with major labels Epic Records & Perspective
                Records. Jesse is currently performing at arena show level, with
                in-demand Australian acts Tash Sultana and Adrian Eagle,
                recently playing on MTV Unplugged and Fender Sessions.
              </Text>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Text>
                2. With a career built on hard work, passion, and natural-born
                talent, it is no surprise that Jesse has performed sold-out
                shows around the world, playing at some of the most respected
                venues and signing with major labels Epic Records & Perspective
                Records. Jesse is currently performing at arena show level, with
                in-demand Australian acts Tash Sultana and Adrian Eagle,
                recently playing on MTV Unplugged and Fender Sessions.
              </Text>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Text>
                3. With a career built on hard work, passion, and natural-born
                talent, it is no surprise that Jesse has performed sold-out
                shows around the world, playing at some of the most respected
                venues and signing with major labels Epic Records & Perspective
                Records. Jesse is currently performing at arena show level, with
                in-demand Australian acts Tash Sultana and Adrian Eagle,
                recently playing on MTV Unplugged and Fender Sessions.
              </Text>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <Text>
                4. With a career built on hard work, passion, and natural-born
                talent, it is no surprise that Jesse has performed sold-out
                shows around the world, playing at some of the most respected
                venues and signing with major labels Epic Records & Perspective
                Records. Jesse is currently performing at arena show level, with
                in-demand Australian acts Tash Sultana and Adrian Eagle,
                recently playing on MTV Unplugged and Fender Sessions.
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
      style={{ width: "500px" }}
    />
  );
}
