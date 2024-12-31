"use client";

import { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import Link from 'next/link';
import styles from './serviceDropdown.module.css'; // Add a CSS module for styling

const ServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <span>Services</span>
        <AiFillCaretDown className={styles.dropdownIcon} />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li>
            <Link href="/crypto">Crypto</Link>
          </li>
          <li>
            <Link href="/utilityPayment">Utility Payments</Link>
          </li>
          <li>
            <Link href="/airtime">Airtime</Link>
          </li>
          <li>
            <Link href="/virtual-card">Virtual Dollar Card</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ServiceDropdown;
