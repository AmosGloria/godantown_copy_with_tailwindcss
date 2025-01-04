"use client";

import { FC } from "react"; // Import FC for typing functional components
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import styles from "./serviceDropdown.module.css";

interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

const ServiceDropdown: FC<DropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
  return (
    <div
      className={styles.dropdownContainer}
      onClick={(e) => e.stopPropagation()} // Prevents event bubbling
    >
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <span>Services</span>
        <AiFillCaretDown className={styles.dropdownIcon} />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li onClick={closeDropdown}>
            <Link href="/crypto">Crypto</Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="/utilityPayment">Utility Payments</Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="/airtime">Airtime</Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="/virtual-card">Virtual Dollar Card</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ServiceDropdown;
