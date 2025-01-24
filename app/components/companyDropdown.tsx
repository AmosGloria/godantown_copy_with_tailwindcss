"use client";

import { FC, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import styles from "./companyDropDown.module.css";

// Define the props interface
interface DropdownProps {
  isOpen: boolean; // Indicates if the dropdown is open
  toggleDropdown: () => void; // Function to toggle the dropdown
  closeDropdown: () => void; // Function to close the dropdown
}

const CompanyDropdown: FC<DropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
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
        <span>Company</span>
        <AiFillCaretDown className={styles.dropdownIcon} />
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li onClick={closeDropdown}>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="aboutUs/ourServices">Services</Link>
          </li>
          <li onClick={closeDropdown}>
            <Link href="aboutUs/ourTeam">Our Team</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CompanyDropdown;
