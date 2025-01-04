"use client";

import { FC } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import styles from "./companyDropdown.module.css";

// Define the props interface
interface DropdownProps {
  isOpen: boolean; // Indicates if the dropdown is open
  toggleDropdown: () => void; // Function to toggle the dropdown
  closeDropdown: () => void; // Function to close the dropdown
}

const CompanyDropdown: FC<DropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
  return (
    <div
      className={styles.dropdownContainer}
      onClick={(e) => e.stopPropagation()} // Prevents event bubbling
    >
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <span>Company</span>
        <AiFillCaretDown className={styles.dropdownIcon} />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li onClick={closeDropdown}>
            <Link href="/about">About Us</Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="/services">Services</Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="/team">Our Team</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CompanyDropdown;
