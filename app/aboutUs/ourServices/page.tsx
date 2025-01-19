"use client"

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import styles from './OurServices.module.css';

const OurServices = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const nairaRef = useRef<HTMLDivElement>(null);
  const cryptoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        } else {
          entry.target.classList.remove(styles.animate);
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5,
    });

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (nairaRef.current) observer.observe(nairaRef.current);
    if (cryptoRef.current) observer.observe(cryptoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.servicesSection}>
      {/* Heading Section */}
      <h1 ref={servicesRef} className={`${styles.services} ${styles.hidden}`}>
        <span className={styles.blockDisplay}>Our</span>
        <span className={styles.blockDisplay}>Services</span>
      </h1>

      {/* Naira Wallet Section */}
      <div
        ref={nairaRef}
        className={`${styles.nairaWalletSection} ${styles.hidden}`}
      >
        <Image
          src="/nairaWallet.png"
          alt="Naira Wallet"
          width={80}
          height={80}
          className={styles.nairaWallet}
        />
        <div className={styles.textLeft}>
          <p className={styles.wallet}>Naira Wallet</p>
          <p>
            We provide you a naira wallet the moment you{' '}
            <span className={styles.naira}>
              create an account with us and also verify this
            </span>
            <span className={styles.naira}>
              account. With this wallet, you can receive money
            </span>
            <span className={styles.naira}>
              from any Nigerian bank and also send money to
            </span>{' '}
            any bank of your choice, real-time.
          </p>
        </div>
      </div>

      {/* Crypto Wallet Section */}
      <div
        ref={cryptoRef}
        className={`${styles.cryptoWalletSection} ${styles.hidden}`}
      >
        <Image
          src="/cryptoWallet.png"
          alt="Crypto Wallet"
          width={80}
          height={80}
        />
        <div className={styles.textRight}>
          <p>Crypto Wallet</p>
          <p>
            Our system is fitted with the wallets of the{' '}
            <span className={styles.crypto}>cryptocurrencies we support. You can transfer</span>
            <span className={styles.crypto}>
              your cryptocurrency from this wallet and also
            </span>
            <span className={styles.crypto}>
              receive cryptocurrencies in real-time. Because
            </span>
            <span className={styles.crypto}>
              we’re focused on the convenience of customers,
            </span>
            <span className={styles.crypto}>
              we are continually working to add more
            </span>
            cryptocurrency wallets to our system.
          </p>
        </div>
      </div>

      {/* Central Text Section */}
      <div className={styles.centralText}>
        <p>And many more...</p>
      </div>
    </div>
  );
};

export default OurServices;
