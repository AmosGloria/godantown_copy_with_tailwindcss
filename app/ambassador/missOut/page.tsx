import React from 'react';
import styles from './missOut.module.css';

export default function MissOut() {
  return (
    <div className={styles.container}>
      <h1>
        Don&apos;t miss out from this 
        <span className={styles.miss}> opportunity</span>
       
      </h1>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSelIxU_41SleXbwEqRx8sJCnvRNiyhwhh1ansirNR6phvBFpA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Apply Here <span className={styles.arrow}>&rarr;</span>
      </a>
    </div>
  );
}
