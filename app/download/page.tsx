
import React from "react";
import Image from "next/image";
import styles from "./downloadPage.module.css"; 
import Link from 'next/link';


// Metadata override for this page
export const metadata = {
  title: "Download Mobile App | Dantown",
  description:
    "Create a virtual dollar card for just $1 with zero funding fees. No transaction limits. Accepted everywhere, anytime, securely.",
  icons: {
    icon: "/godantownLogo.png", // Path to the logo in the public directory
  },
};

export default function DownloadPage() {
  return (
    
      <div className={styles.container}>
        {/* Main Section */}
        <div className={styles.mainContent}>
        <h1 className={styles.heading}>
         Join our 50k+ users today by
          <span className={styles.subHeading}>downloading our app</span>
          </h1>
          </div>

          {/* Download Buttons */}
          <div className={styles.downloadButtons}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.dantown.Dantownapp&utm_source=Google+playstore&utm_medium=Google+play+store"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <Image
                src="/googlePlay.png" 
                alt="Download on Google Play"
                width={200}
                height={60}
              />
            </Link>
            <Link
              href="https://apps.apple.com/ca/app/dantown/id1575600937?utm_source=iOS&utm_medium=iOS"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <Image
                src="/appStore.png" // Replace with a valid App Store badge image
                alt="Download on App Store"
                width={200}
                height={60}
              />
            </Link>
          
            </div>
          {/* Phone Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/phone5hlete1u.png"
              alt="App Preview"
              width={300}
              height={600}
              className={styles.phoneImage}
            />
          </div>
      

        {/* Footer Section */}
        <footer className={styles.footer}>
          <div className={styles.socialLinks}>
            <Link
              href="https://web.facebook.com/godantown"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <Image
                src="/facebook.png" // Replace with a valid Facebook logo image
                alt="Facebook"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="https://x.com/godantown"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <Image
                src="/xLogo.png" // Replace with a valid Twitter logo image 
                alt="Twitter"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="https://www.instagram.com/godantown/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <Image
                src="/instagram.png" // Replace with a valid Instagram logo image
                alt="Instagram"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <Link
            href="https://godantown.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
             www.godantown.com
          </Link>
        </footer>
      </div>
  );
}
