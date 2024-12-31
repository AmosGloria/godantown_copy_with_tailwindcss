import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './usingDantown.module.css';

const DantownHappiness = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Image
          className={styles.usingDantownImage}
          src="/usingDantown.png"
          alt="Using Dantown"
          width={600}
          height={500}
        />
      </div>

      <div className={styles.rightSection}>
        <h1>Become happy using <span className={styles.dantownLine}>Dantown</span></h1>

        <p>
          All your utility payments in one place with excellent <span className={styles.dantownLine}>customer service to 
          attend to your issues, 24/7.</span>
        </p>

        <div className={styles.downloadButtons}>
          <Link 
            href="https://apps.apple.com/ng/app/dantown/id1575600937#?platform=iphone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.appStoreImage}
              src="/appStoreDownload.png"
              alt="Download on the App Store"
              width={200}
              height={60}
            />
          </Link>

          <Link 
            href="https://play.google.com/store/apps/details?id=com.dantown.Dantownapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.googlePlayImage}
              src="/googlePlayDownload.png"
              alt="Download on Google Play"
              width={200}
              height={60}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DantownHappiness;
