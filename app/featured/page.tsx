"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./featured.module.css";

const FeaturedOn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset the animation
          setTimeout(() => setIsVisible(true), 10); // Reapply animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const refCurrent = sectionRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  const links = [
    {
      url: "https://www.vanguardngr.com/2021/10/dantown-partners-with-techrity-to-advance-tech-penetration-in-niger-delta-communities/",
      imageSrc: "/vanguard.png",
      alt: "Vanguard",
    },
    {
      url: "https://techcabal.com/2020/11/03/the-future-of-payment-systems-issues-faced-with-money-transfer-and-how-btc-can-solve-it/",
      imageSrc: "/tc.png",
      alt: "TechCabal",
    },
    {
      url: "https://www.thisdaylive.com/index.php/2021/10/18/dantown-partners-with-techrity-to-advance-tech-penetration-in-niger-delta-communities/",
      imageSrc: "/thisDay.png",
      alt: "ThisDay Live",
    },
    {
      url: "https://nairametrics.com/2022/02/17/nigeria-should-key-in-rather-than-kill-it-ceo-dantown/",
      imageSrc: "/nairaMetrics.png",
      alt: "Naira Metrics",
    },
    {
      url: "https://tribuneonlineng.com/dantown-deepens-community-roots-with-royal-fc-sponsorship/",
      imageSrc: "/nigerianTribune.png",
      alt: "Tribune Online",
    },
    {
      url: "https://guardian.ng/news/world-environment-day-firms-inspire-youths-traders-in-portharcourt-to-beat-plastic-pollution/",
      imageSrc: "/theGuardian.png",
      alt: "Guardian",
    },
    {
      url: "https://dailytrust.com/dantowns-5th-anniversary-the-royal-soiree/",
      imageSrc: "/dailyTrust.png",
      alt: "Daily Trust",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className={`${styles.flexContainer} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <h1 className={styles.heading}>We are featured on</h1>
      <div className={styles.flexContainer}>
        {links.map((link, index) => (
          <div
            key={index}
            className={`${styles.imageContainer} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <Link
              href={link.url}
              title={`Learn more about ${link.alt}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.image}
                src={link.imageSrc}
                alt={link.alt}
                width={120}
                height={80}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOn;
