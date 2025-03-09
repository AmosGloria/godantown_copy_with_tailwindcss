"use client";

import { FC, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/navigation"; // Import router for navigation

interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  closeMobileMenu?: () => void; // Added this to close mobile menu on mobile
}

const CompanyDropdown: FC<DropdownProps> = ({ isOpen, toggleDropdown, closeDropdown, closeMobileMenu }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeDropdown]);

  const handleLinkClick = (url: string) => {
    closeDropdown();
    if (closeMobileMenu) closeMobileMenu(); // Close mobile menu if applicable
    router.push(url);
  };

  return (
    <div
      className="relative inline-block mx-4 md:mx-[6%] px-4 md:px-[3%] mt-2 md:mt-[2%]"
      ref={dropdownRef}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between text-[18px] md:text-[20px] bg-transparent border-none cursor-pointer w-full"
      >
        <span className="flex-grow text-left">Company</span>
        <AiFillCaretDown className="ml-auto" />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 bg-white border border-gray-300 rounded-md w-[200px] md:w-[180px] h-auto list-none py-2 z-50 shadow-lg">
          <li className="py-3 px-4 hover:bg-gray-300">
            <button onClick={() => handleLinkClick("/aboutUs")} className="text-[15px] text-black block w-full text-left">
              About Us
            </button>
          </li>
          <li className="py-3 px-4 hover:bg-gray-300">
            <button onClick={() => handleLinkClick("/aboutUs/ourServices")} className="text-[15px] text-black block w-full text-left">
              Services
            </button>
          </li>
          <li className="py-3 px-4 hover:bg-gray-300">
            <button onClick={() => handleLinkClick("/aboutUs/ourTeam")} className="text-[15px] text-black block w-full text-left">
              Our Team
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CompanyDropdown;
