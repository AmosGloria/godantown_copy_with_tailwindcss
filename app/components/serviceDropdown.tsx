"use client";

import { FC, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

const ServiceDropdown: FC<DropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside as EventListener); // Fixing TypeScript issue
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside as EventListener);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside as EventListener);
    };
  }, [isOpen, closeDropdown]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.TouchEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setTimeout(() => {
      router.push(path);
      closeDropdown();
    }, 100);
  };

  return (
    <div
      className="relative inline-block w-full" // Ensure full width for vertical alignment
      ref={dropdownRef}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between text-[16px] sm:text-[18px] bg-transparent border-none cursor-pointer w-full"
      >
        <span className="flex-grow text-left">Services</span>
        <AiFillCaretDown className="ml-auto" />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-md w-[160px] list-none py-2 z-10 shadow-md">
          <li className="py-3 px-2 hover:bg-gray-300">
            <Link href="/crypto" className="text-[15px] text-black block" onClick={(e) => handleNavigation(e, "/crypto")}>
              Crypto
            </Link>
          </li>
          <li className="py-3 px-2 hover:bg-gray-300">
            <Link href="/utilityPayment" className="text-[15px] text-black block" onClick={(e) => handleNavigation(e, "/utilityPayment")}>
              Utility Payments
            </Link>
          </li>
          <li className="py-3 px-2 hover:bg-gray-300">
            <Link href="/airtime" className="text-[15px] text-black block" onClick={(e) => handleNavigation(e, "/airtime")}>
              Airtime
            </Link>
          </li>
          <li className="py-3 px-2 hover:bg-gray-300">
            <Link href="/virtualDollarCard" className="text-[15px] text-black block" onClick={(e) => handleNavigation(e, "/virtualDollarCard")}>
              Virtual Dollar Card
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ServiceDropdown;
