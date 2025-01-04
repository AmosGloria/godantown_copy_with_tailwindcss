"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./usingDantown.module.css";

const DantownHappiness = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true); // Trigger animation
        } else {
          setIsAnimated(false); // Reset animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const leftCurrent = leftSectionRef.current;
    const rightCurrent = rightSectionRef.current;

    if (leftCurrent && rightCurrent) {
      observer.observe(leftCurrent);
      observer.observe(rightCurrent);
    }

    return () => {
      if (leftCurrent && rightCurrent) {
        observer.unobserve(leftCurrent);
        observer.unobserve(rightCurrent);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={leftSectionRef}
        className={`${styles.leftSection} ${isAnimated ? styles.animate : ""}`}
      >
        <Image
          className={styles.usingDantownImage}
          src="/usingDantown.png"
          alt="Using Dantown"
          width={600}
          height={500}
        />
      </div>

      <div
        ref={rightSectionRef}
        className={`${styles.rightSection} ${isAnimated ? styles.animate : ""}`}
      >
        <h1>
          Become happy using <span className={styles.dantownLineh}>Dantown</span>
        </h1>
        <p>
          All your utility payments in one place with excellent{" "}
          <span className={styles.dantownLinep}>
            customer service to attend to your issues, 24/7.
          </span>
        </p>

        <div className={styles.downloadButtons}>
          <Link
            href="https://apps.apple.com/ng/app/dantown/id1575600937#?platform=iphone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.appStoreImage}
              src="/appStoreDownload.png"
              alt="Download on the App Store"
              width={200}
              height={60}
            />
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=com.dantown.Dantownapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.googlePlayImage}
              src="/googlePlayDownload.png"
              alt="Download on Google Play"
              width={200}
              height={60}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DantownHappiness;
