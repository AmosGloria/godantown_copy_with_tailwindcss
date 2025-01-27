import React from "react";
import styles from "./opportunities.module.css";
import Image from "next/image";

export default function VirtualCardFeature() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Endless Possibilities <span className={styles.line}>with our Virtual Card </span>feature</h1>
                <p>Now you can shop online and pay for <span className={styles.line}>your subscription services with ease.</span></p>
            </div>
            <div className={styles.imageContainer}>
            <Image
              src="/opportunities.png"
              alt="Opportunities"
              width={150}
              height={50}
              className={styles.image}
            />
            </div>
        </div>
    );
}
