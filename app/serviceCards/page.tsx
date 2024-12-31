"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Typed from "typed.js";
import Image from "next/image";
import LoadingSkeleton from "../components/LoadingSkeleton/LoadingSkeleton"; // Import reusable LoadingSkeleton
import styles from "./ServiceCards.module.css"; // Import styles for ServiceCards

export default function ServiceCards() {
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  const isInitialLoad = useRef(true); // Track initial load without triggering re-renders
  const typingRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const currentPath = usePathname(); // Get the current pathname

  useEffect(() => {
    if (!typingRef.current) return; // Ensure typingRef.current is not null

    const typed = new Typed(typingRef.current, {
      strings: [
        `<span style=\"color: navy;\">Dantown</span> partners with <span style=\"color:rgb(132, 92, 243);\">Hara</span> 
        for all Gift card trades`,
        `Experience total freedom with <span style=\"color: navy;\">Crypto</span>`,
        `BTC and USDT now available!`,
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy(); // Destroy the Typed instance
    };
  });

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false; // Mark the first load as completed
      return; // Skip animations on initial load
    }

    if (currentPath === "/" || currentPath === "/download") {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 3000); // Animation duration
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [currentPath]);

  const handleNavigation = (url: string) => {
    setIsLoading(true); // Show loading skeleton
    setTimeout(() => {
      router.push(url); // Navigate to the specified URL
    }, 500); // Ensure animation starts before navigation
  };

  return (
    <div className={styles.container}>
      {isLoading && <LoadingSkeleton />} {/* Use reusable LoadingSkeleton */}
      <div className={styles.leftSection}>
        <h1>PAY SMARTER. PAY FASTER</h1>
        <div className={styles.typingText} ref={typingRef}></div>
        <p className={styles.offer}>We offer you ease and convenience</p>
        <button
          className={styles.downloadButton}
          onClick={() => handleNavigation("/download")} // Navigate to the download page
        >
          Download App
        </button>
      </div>
      <div className={styles.circleWrapper}>
        <div className={styles.services}>
          <h1 className={styles.serviceHeading}>Pick your choice</h1>
          <p className={styles.serviceParagraph}>
            Get started by choosing to buy airtime or data. You can even pay
            bills right away.
          </p>
          <Image
            src="/movingDots.png"
            alt="moving dots"
            width={50}
            height={50}
            className={styles.leftmovingDots}
          />
          <Image
            src="/movingDots.png"
            alt="moving dots"
            width={50}
            height={50}
            className={styles.rightmovingDots}
          />

          <div className={styles.serviceCard}>
            <Image
              src="/buyAirtimeAndData.png"
              alt="Buy Airtime and Data Icon"
              width={50}
              height={50}
              className={styles.icon}
            />
            <div className={styles.textContainer}>
              <h3 className={styles.cardHeading}>Buy Airtime and Data</h3>
              <p className={styles.cardDescription}>
                Buy airtime and data at your convenience.
              </p>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <Image
              src="/sendAndReceiveCrypto.png"
              alt="Send/Receive Cryptocurrencies Icon"
              width={50}
              height={50}
              className={styles.icon}
            />
            <div className={styles.textContainer}>
              <h3 className={styles.cardHeading}>
                Send/Receive Cryptocurrencies
              </h3>
              <p className={styles.cardDescription}>
                Send and receive cryptocurrencies worldwide.
              </p>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <Image
              src="/payBills.png"
              alt="Pay Bills Icon"
              width={50}
              height={50}
              className={styles.icon}
            />
            <div className={styles.textContainer}>
              <h3 className={styles.cardHeading}>Pay Bills</h3>
              <p className={styles.cardDescription}>
                Pay your bills seamlessly with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
