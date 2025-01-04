"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./takeTheseSteps.module.css";

// Explicitly type the StepsNow component
const StepsNow: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset the animation by toggling the state
          setIsAnimating(false);
          setTimeout(() => {
            setIsAnimating(true);
          }, 50); // Small delay to ensure the class is removed and re-added
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${styles.container} ${isAnimating ? styles.animateDown : ""}`}
    >
      <h1 className={styles.heading}>Take these steps now!</h1>
      <p className={styles.description}>
        <span className={styles.firstParagraph}>Want to make payment,</span>
        <span className={styles.secondParagraph}>
          send and receive funds without the stress of figuring
        </span>{" "}
        out how to go about it?
      </p>
      <div className={styles.steps}>
        <div className={styles.step}>
          <Image
            className={styles.firstImage}
            src="/downloadApp.png"
            alt="Download App"
            width={100}
            height={100}
          />
          <p className={styles.firstText}>
            <strong>Download app</strong> <br />
            Visit either Android’s Playstore or Apple’s Appstore and search for
            “Dantown”.
          </p>
        </div>
        <div className={styles.step}>
          <Image
            className={styles.secondImage}
            src="/register.png"
            alt="Register"
            width={100}
            height={100}
          />
          <p className={styles.secondText}>
            <strong>Register</strong> <br />
            Create an account in 3 minutes.
          </p>
        </div>
        <div className={styles.step}>
          <Image
            className={styles.thirdImage}
            src="/enjoyFreedom.png"
            alt="Enjoy Freedom"
            width={100}
            height={100}
          />
          <p className={styles.thirdText}>
            <strong>Enjoy Freedom</strong> <br />
            With our tailored services and good{" "}
            <span className={styles.line}>rates at your disposal, freedom at last.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsNow;
