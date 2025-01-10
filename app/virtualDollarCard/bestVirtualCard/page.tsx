"use client"; // Required for client-side logic in Next.js 15
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./BestVirtualCard.module.css";

export default function BestVirtualCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the element is visible
      }
    );

    const elements = containerRef.current?.querySelectorAll(`.${styles.card}`);
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>
          Dantown: The Best Virtual <span className={styles.pageHead}>Dollar Card in Nigeria</span>
        </h1>
        <p className={styles.description}>
          Our cards give you the freedom to spend your money locally and internationally without
          hassle. You can now shop and settle bill payments & subscriptions on Netflix, Spotify,
          Meta, YouTube Premium, Ali Express, Shein, Hulu, Google, Udemy, Coursera, etc. with ease!
        </p>
      </header>

      {/* Cards Section */}
      <div className={styles.cardsContainer}>
        <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.cardImageWrapper}>
            <Image
              src="/supportsHighValue.png"
              alt="Supports High Value Payments"
              width={60}
              height={60}
              className={styles.cardImage}
            />
          </div>
          <h2 className={styles.cardTitle}>Supports high value payments</h2>
          <p className={styles.cardDescription}>
            Your spending should have no limit. Our dollar virtual card gives you that freedom you deserve.
          </p>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.cardImageWrapper}>
            <Image
              src="/reliableAccess.png"
              alt="Reliable access"
              width={60}
              height={60}
              className={styles.cardImage}
            />
          </div>
          <h2 className={styles.cardTitle}>Reliable access to the international market</h2>
          <p className={styles.cardDescription}>
            Zero card rejection on any platform. Spend globally effortlessly.
          </p>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.cardImageWrapper}>
            <Image
              src="/makeFasterOnlinePayment.png"
              alt="Make faster online payments"
              width={60}
              height={60}
              className={styles.cardImage}
            />
          </div>
          <h2 className={styles.cardTitle}>Make faster online payments with ease</h2>
          <p className={styles.cardDescription}>
            Speedy processing of online payments now possible with our virtual dollar cards.
          </p>
        </div>
        <div className={`${styles.card} ${styles.card4}`}>
          <div className={styles.cardImageWrapper}>
            <Image
              src="/securedAndTransparent.png"
              alt="Secured and Transparent"
              width={60}
              height={60}
              className={styles.cardImage}
            />
          </div>
          <h2 className={styles.cardTitle}>Secured and transparent International payments</h2>
          <p className={styles.cardDescription}>
            Safety and security guaranteed. Spend with confidence, every time.
          </p>
        </div>
        <div className={`${styles.card} ${styles.card5}`}>
          <div className={styles.cardImageWrapper}>
            <Image
              src="/makeAndManageSubscriptions.png"
              alt="Make and Manage Subscriptions"
              width={60}
              height={60}
              className={styles.cardImage}
            />
          </div>
          <h2 className={styles.cardTitle}>Make and manage all your subscriptions in one place.</h2>
          <p className={styles.cardDescription}>
            No payment failure. Enjoy uninterrupted subscription services with your Dantown virtual dollar card.
          </p>
        </div>
      </div>
    </div>
  );
}
