"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Shopping.module.css';

const Shopping = () => {
  return (
    <>
      {/* Container for Shopping and Utilities */}
      <div className={styles.rowContainer}>
        {/* Shopping Div */}
        <div className={styles.shoppingContainer}>
          <div className={styles.shoppingCard}>
            <Image src="/shopping.png" alt="Shopping" width={60} height={90} className={styles.image} />
            <h1 className={styles.title}>Shopping</h1>
            <p className={styles.text}>
              Clear your cart and pay with ease on all shopping platforms like Amazon, Ali Express, Shein, etc.
            </p>
            <button
              onClick={() => window.location.href = '/download'}
              className={styles.button}>
              Get a card
              <span className={styles.arrow}>&rarr;</span>
            </button>
          </div>
        </div>

        {/* Utilities Div */}
        <div className={styles.utilitiesContainer}>
          <div className={styles.utilitiesCard}>
            <Image src="/utilities.png" alt="Utilities" width={80} height={100} className={styles.utilitiesImage} />
            <h1 className={styles.title}>Utilities</h1>
            <p className={styles.text}>
              Enjoy uninterrupted subscription services on platforms like Spotify, Apple Music, YouTube Premium, etc., as well as Netflix, Prime, Hulu, and so on.
            </p>
            <button
              onClick={() => window.location.href = '/download'}
              className={styles.button}>
              Get a card
              <span className={styles.arrow}>&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fees and Courses Div */}
      <div className={styles.feesContainer}>
        <div className={styles.feesCard}>
          <div>
            <h1 className={styles.title}>Fees and Courses</h1>
            <p className={styles.text}>
              Upskill and/or gain new knowledge with in-demand courses on all learning platforms, including Udemy, Coursera, and so on.
            </p>
            <button
              onClick={() => window.location.href = '/download'}
              className={styles.button}>
              Get a card
              <span className={styles.arrow}>&rarr;</span>
            </button>
          </div>
          <Image src="/feesAndCourses.png" alt="Fees and Courses" width={128} height={128} className={styles.sideImage} />
        </div>
      </div>
    </>
  );
};

export default Shopping;
