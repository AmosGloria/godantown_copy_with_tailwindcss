import React from 'react';
import styles from './AboutDantown.module.css';

export default function AboutDantown() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headingWrapper}>
          <div className={styles.circle}></div>
          <h1 className={styles.heading}>About Dantown</h1>
        </div>
        <div className={styles.description}>
          <p>
            Dantown is a fin-tech company that solves payment problems using cryptocurrencies. We instantly buy and sell cryptocurrencies, and our services are tailored to satisfy individual consumers and merchants.
          </p>
          <p>
            In a bid to serve our customers better, we make sure our service delivery is top-notch, with our customer care unit trained to respond faster than debit-alerts.
          </p>
          <p>
            We don’t just transact with our customers, we create a royal experience because every Dantown customer is royalty.
          </p>
        </div>
      </div>
    </div>
  );
}
