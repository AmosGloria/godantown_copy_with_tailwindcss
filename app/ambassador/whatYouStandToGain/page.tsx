import Image from 'next/image';
import styles from './whatDoYouStandToGain.module.css';

export default function WhatDoYouStandToGain() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What do you stand to <span className={styles.gain}>gain?</span></h1>
      <div className={styles.grid}>
        {/* Passive Income */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={`${styles.imageContainer} ${styles.blueBackground}`}>
              <Image
                src="/passiveIncome.png"
                alt="Passive Income"
                width={40}
                height={40}
              />
            </div>
            <p>Passive income for life through our loyalty program</p>
          </div>
        </div>
        {/* Macbook, iPhone, and iWatch */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={`${styles.imageContainer} ${styles.orangeBackground}`}>
              <Image
                src="/macBook.png"
                alt="MacBook, iPhone, and iWatch"
                width={40}
                height={40}
              />
            </div>
            <p>Macbook, iPhone, and iWatch</p>
          </div>
        </div>
        {/* Company Merch */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={`${styles.imageContainer} ${styles.turquoiseBackground}`}>
              <Image
                src="/companyMerch.png"
                alt="Company Merch"
                width={40}
                height={40}
              />
            </div>
            <p>Company merch</p>
          </div>
        </div>
        {/* Build Professional Network */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={`${styles.imageContainer} ${styles.greenBackground}`}>
              <Image
                src="/build.png"
                alt="Build Network"
                width={40}
                height={40}
              />
            </div>
            <p>Build your Professional network</p>
          </div>
        </div>
      </div>
    </div>
  );
}
