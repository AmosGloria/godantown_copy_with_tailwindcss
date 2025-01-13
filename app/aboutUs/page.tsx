import React from 'react';
import Navbar from '../components/NavBar'; 
import styles from './AboutUs.module.css';
import AboutDantown from './aboutDantown/page';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* Main content of the About Us page */}
      <h1 className={styles.heading}>
        ABOUT US
        <span className={styles.firstSpan}>We provide a platform for</span>
        <span className={styles.secondSpan}>financial liberation!</span>
      </h1>
      <AboutDantown/>
    </div>
  );
}
