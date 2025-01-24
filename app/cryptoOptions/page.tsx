"use client";

import Image from "next/image";
import styles from "./cryptoOptions.module.css"; // Ensure this path is correct

export default function CryptoOptions() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Explore more crypto options</h1>
      <div className={styles.options}>
        {/* Row 1: Exchange Crypto */}
        <div className={styles.row}>
          <div className={styles.option}>
            <Image
              src="/exchangeCrypto.png"
              alt="Exchange Crypto"
              width={50}
              height={50}
            />
           <p>
             Exchange your crypto for cash at 
               <span style={{ display: "block", marginTop: "0.5rem" }}>
                 the best rates.
               </span>
           </p>


          </div>
        </div>
        <div className={styles.divider}></div>
        {/* Row 2: Buy Crypto and Sell Crypto */}
        <div className={styles.row}>
          <div className={styles.option}>
            <Image
              src="/buyCrypto.png"
              alt="Buy Crypto"
              width={50}
              height={50}
            />
            <p>Buy Crypto</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.option}>
            <Image
              src="/sellCrypto.png"
              alt="Sell Crypto"
              width={50}
              height={50}
            />
            <p>Sell Crypto</p>
          </div>
        </div>
      </div>
    </div>
  );
}
