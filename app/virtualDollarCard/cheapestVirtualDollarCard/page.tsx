"use client"; // Required for client-side logic in Next.js 15
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CheapestVirtualDollarCard.module.css";

export default function CheapestVirtualDollarCard() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = imageRef.current; // Copy ref value to a variable

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
      threshold: 0.5, // Trigger animation when 50% of the image is visible
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Ensure dependencies remain empty as we use a local variable

  return (
    <div className={styles.container}>
      {/* Left Side: Image */}
      <div className={`${styles.left} ${styles.imageContainer}`} ref={imageRef}>
        <Image
          src="/cheapestVirtualDollarCard.png"
          alt="Cheapest Virtual Dollar Card"
          width={400}
          height={400}
          className={styles.image}
        />
      </div>

      {/* Right Side: Text Content */}
      <div className={styles.right}>
        <h1 className={styles.title}>
          We offer you the Cheapest Virtual Dollar Card in Nigeria
        </h1>
        <p className={styles.description}>
          Shop online, pay bills and subscriptions instantly! At just $1, we
          offer you the cheapest virtual dollar card in Nigeria. Create and
          manage your virtual dollar cards that work everywhere every time. Our
          cards allow you to make seamless online bill and subscription payments
          on all platforms.
        </p>
        <Link href="/download">
          <button className={styles.button}>Get your virtual card here</button>
        </Link>
      </div>
    </div>
  );
}
