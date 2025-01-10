"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./StressFreeSide.module.css";

export default function StressFreeSide() {
  return (
    <div className={styles.container}>
      {/* Left Side: Text Content */}
      <div className={styles.left}>
        <h1 className={styles.title}>Move over to the stress-free side of life!</h1>
        <p className={styles.description}>
          Our dollar virtual card allows you to make online purchases and engage in international
          transactions without having an international bank account.
        </p>
        <div className={styles.buttonGroup}>
          <Link
            href="https://apps.apple.com/ng/app/dantown/id1575600937"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <Image
              src="/googlePlay.png"
              alt="Google Play Icon"
              width={170}
              height={130}
              className={styles.icon}
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.dantown.Dantownapp&hl=en&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <Image
              src="/appStore.png"
              alt="App Store Icon"
              width={170}
              height={130}
              className={styles.icon}
            />
          </Link>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className={styles.right}>
        <Image
          src="/stressFreeSide.png"
          alt="Stress Free Side"
          width={550}
          height={700}
          className={styles.image}
        />
      </div>
    </div>
  );
}
