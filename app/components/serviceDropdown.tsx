"use client";

import { FC, useEffect, useRef } from "react"; // Import useEffect and useRef for handling outside clicks
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import styles from "./serviceDropDown.module.css";

interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

const ServiceDropdown: FC<DropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference to the dropdown container

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown(); // Close the dropdown if the click is outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup listener on unmount
    };
  }, [isOpen, closeDropdown]);

  return (
    <div
      className={styles.dropdownContainer}
      ref={dropdownRef} // Attach the ref to the dropdown container
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
            <Link href="/virtualDollarCard">Virtual Dollar Card</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ServiceDropdown;
