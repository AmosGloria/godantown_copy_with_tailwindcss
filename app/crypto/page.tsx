"use client";

import React from "react";
import Image from "next/image";
import styles from "./crypto.module.css";
import Link from "next/link";

export default function CryptoPage() {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h1>
          <p>All transactions</p>
          <p>are carried out</p>
          <p>on our App</p>
        </h1>
        <div className={styles.buttons}>
          <Link
            href="https://apps.apple.com/ng/app/dantown/id1575600937"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/getItOnAppStore.png"
              alt="Get it on App Store"
              width={150}
              height={50}
              className={styles.appButton}
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.dantown.Dantownapp&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/getItOnGooglePlay.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
              className={styles.appButton}
            />
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <Image
          src="/transactions.png"
          alt="Transactions"
          width={400}
          height={400}
          className={styles.transactionsImage}
        />
      </div>
    </div>
  );
}
