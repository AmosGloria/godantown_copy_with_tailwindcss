"use client"; // Enables React hooks in this client component

import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai"; 
import Link from "next/link";
import styles from "./companyDropdown.module.css"; // Import styles

const CompanyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      {/* Trigger Button */}
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <span>Company</span>
        <AiFillCaretDown className={styles.dropdownIcon} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/team">Our Team</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CompanyDropdown;
