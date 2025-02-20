"use client";

import { FC, useEffect, useRef } from "react"; // Import useEffect and useRef for handling outside clicks
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";

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
      className="relative inline-block mx-[6%] px-[3%] mt-[2%]"
      ref={dropdownRef} // Attach the ref to the dropdown container
      onClick={(e) => e.stopPropagation()} // Prevents event bubbling
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between text-[20px] bg-transparent border-none cursor-pointer w-full"
      >
        <span className="flex-grow text-left">Services</span>
        <AiFillCaretDown className="ml-auto" />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-md w-[180px] h-auto list-none py-2 z-10 shadow-md">
          <li onClick={closeDropdown} className="py-3 px-2 hover:bg-gray-300">
            <Link href="/crypto" className="text-[15px] text-black block">
              Crypto
            </Link>
          </li>
          <li onClick={closeDropdown} className="py-3 px-2 hover:bg-gray-300">
            <Link href="/utilityPayment" className="text-[15px] text-black block">
              Utility Payments
            </Link>
          </li>
          <li onClick={closeDropdown} className="py-3 px-2 hover:bg-gray-300">
            <Link href="/airtime" className="text-[15px] text-black block">
              Airtime
            </Link>
          </li>
          <li onClick={closeDropdown} className="py-3 px-2 hover:bg-gray-300">
            <Link href="/virtualDollarCard" className="text-[15px] text-black block">
              Virtual Dollar Card
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ServiceDropdown;
