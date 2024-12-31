import React from 'react';
import Image from 'next/image';
import styles from './GotIt.module.css';

const BankOnYourTerms = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1>You Got It!<br />Bank on your Terms.</h1>
        <p>We offer you 24/7 customer support, and our transactions are easy to carry out.</p>

        <div className={styles.bulletPoints}>
          <div className={styles.bulletItem}>
            <Image src="/purpleBullet.png" alt="Purple Bullet" width={15} height={15} />
            <span>Receive, store, spend, and transfer cryptocurrencies with ease.</span>
          </div>
          <div className={styles.bulletItem}>
            <Image src="/pinkBullet.png" alt="Pink Bullet" width={15} height={15}/>
            <span>Pay bills in seconds and cater for your recurring bills.</span>
          </div>
          <div className={styles.bulletItem}>
            <Image src="/greenBullet.png" alt="Green Bullet" width={15} height={15} />
            <span>Get airtime top-up instantly.</span>
          </div>
        </div>
      </div>

      <div className={styles.imageSection}>
        <Image src="/phones.png" alt="Phones" width={500} height={500} />
      </div>
    </div>
  );
};

export default BankOnYourTerms;
