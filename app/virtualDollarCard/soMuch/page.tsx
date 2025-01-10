"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./SoMuch.module.css";

export default function SoMuchEase() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = imageRef.current; // Copy the ref value to a local variable

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentRef?.classList.add(styles.animate);
        } else {
          currentRef?.classList.remove(styles.animate);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the local variable in cleanup
      }
    };
  }, []); // Dependency array is empty to run the effect once

  return (
    <div className={styles.container}>
      {/* Left Side: Text Content */}
      <div className={styles.left}>
        <h1 className={styles.title}>So much you can do with ease on your Dantown app</h1>
        <p className={styles.description}>
          Easily create and manage multiple virtual dollar cards on the Dantown app. Get transparent
          report and analytics on all spend and subscriptions to make better financial decisions.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className={`${styles.right}`} ref={imageRef}>
        <Image
          src="/soMuch.png"
          alt="So Much Ease"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}
