"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Border */}
      <div className={styles.topBorder} />

      {/* Footer Content */}
      <div className={styles.footerContent}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <Image
            src="/godantownLogo.png"
            alt="Godantown Logo"
            width={60}
            height={30}
            className={styles.logo}
          />
        </div>

        {/* Our Company Section */}
        <div className={`${styles.section} ${styles.leftSection}`}>
          <h2 className={styles.heading}>Our Company</h2>
          <ul className={styles.links}>
            <li>
              <Link href="https://godantown.com/about">About Us</Link>
            </li>
            <li>
              <Link href="https://godantown.com/careers">Careers</Link>
            </li>
            <li>
              <Link href="https://godantown.com/ambassador">Become An Ambassador</Link>
            </li>
            <li>
              <Link href="https://godantown.com/contact">Contact</Link>
            </li>
            <li>
              <Link href="https://godantown.com/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="https://godantown.com/faq">Info</Link>
            </li>
          </ul>
        </div>

        {/* Vertical Border */}
        <div className={styles.verticalBorder} />

        {/* Contact Section */}
        <div className={`${styles.section} ${styles.middleSection}`}>
          <h2 className={styles.heading}>Contact</h2>
          <address className={styles.contactDetails}>
            <p>NTA/Choba Road</p>
            <p>Mgbuoba, PH</p>
            <p>Nigeria</p>
            <p>+234 906 863 3429</p>
            <p>
              <a href="mailto:support@godantown.com">support@godantown.com</a>
            </p>
          </address>
        </div>

        {/* Vertical Border */}
        <div className={styles.verticalBorder} />

        {/* Newsletter Section */}
        <div className={`${styles.section} ${styles.rightSection}`}>
          <h2 className={styles.heading}>Newsletter</h2>
          <p>Subscribe to our newsletter to get more free information about us and our products.</p>
          <form className={styles.form}>
            First Name
            <input
              type="text"
              placeholder="Enter Your First Name"
              className={styles.input}
            />
            Email
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className={styles.input}
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Divider Line */}
      <div className={styles.dividerLine} />

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <span>Copyright © 2025 Dantownms.com. All rights reserved.</span>
        <div className={styles.socialLinks}>
          <Link href="https://web.facebook.com/godantown?_rdc=1&_rdr">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={30}
              height={30}
              className={styles.socialIcon}
            />
          </Link>
          <Link href="https://x.com/godantown">
            <Image
              src="/xLogo.png"
              alt="X (formerly Twitter)"
              width={30}
              height={30}
              className={styles.socialIcon}
            />
          </Link>
          <Link href="https://www.instagram.com/godantown/#">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={30}
              height={30}
              className={styles.socialIcon}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
