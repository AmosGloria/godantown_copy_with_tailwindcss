"use client";

import { FC, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";

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
      ref={dropdownRef} // Attach the ref to the dropdown container
      className="relative inline-block ml-[6%] mr-[6%] px-[3%] mt-[2%]"
      onClick={(e) => e.stopPropagation()} // Prevents event bubbling
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between text-[20px] bg-transparent border-none cursor-pointer"
      >
        <span className="flex-grow text-left">Company</span>
        <AiFillCaretDown className="ml-auto" />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-md w-[180px] h-[140px] list-none p-2 m-0 z-10 shadow-lg">
          <li onClick={closeDropdown} className="p-2 hover:bg-gray-300">
            <Link href="/aboutUs" className="text-[15px] text-black no-underline block">
              About Us
            </Link>
          </li>
          <li onClick={closeDropdown} className="p-2 hover:bg-gray-300">
            <Link href="/aboutUs/ourServices" className="text-[15px] text-black no-underline block">
              Services
            </Link>
          </li>
          <li onClick={closeDropdown} className="p-2 hover:bg-gray-300">
            <Link href="/aboutUs/ourTeam" className="text-[15px] text-black no-underline block">
              Our Team
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CompanyDropdown;
