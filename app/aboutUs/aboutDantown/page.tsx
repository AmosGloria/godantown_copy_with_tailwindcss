import React from "react";
import styles from "./aboutDantown.module.css";
import WhyChooseDantown from "../whyChooseDantown/page";
import OurServices from "../ourServices/page";
import OurTeam from "../ourTeam/page";


export default function AboutUs() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.aboutDantownSection}>
          <h1 className={styles.aboutHeading}>
            About <span className={styles.dantownHighlight}>Dantown</span>
          </h1>
          <div className={styles.headingWrapper}>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.description}>
            <p className={styles.firstP}>
              Dantown is a fin-tech company that solves payment problems using cryptocurrencies. We instantly buy and sell cryptocurrencies, and our services are tailored to satisfy individual consumers and merchants.
            </p>
            <p className={styles.secondP}>
              In a bid to serve our customers better, we make sure our service delivery is top-notch, with our customer care unit trained to respond faster than debit-alerts.
            </p>
            <p className={styles.thirdP}>
              We don’t just transact with our customers, we create a royal experience because every Dantown customer is royalty.
            </p>
          </div>
          <WhyChooseDantown/>
          <OurServices/>
          <OurTeam/>
    
        </div>
      </div>
    </div>
  );
}
