"use client";

import { useState } from "react";
import Link from "next/link";
import ServiceDropdown from "./serviceDropdown";
import CompanyDropdown from "./companyDropdown";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Mobile menu icons

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar - Full Width & Responsive */}
      <nav className="w-full bg-white">
        <div className="container mx-auto flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link href="/">
            <Image src="/godantown log.webp" alt="Company Logo" width={150} height={150} className="w-32 md:w-48" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none space-x-6 lg:space-x-8">
            <li>
              <ServiceDropdown
                isOpen={openDropdown === "service"}
                toggleDropdown={() => toggleDropdown("service")}
                closeDropdown={handleCloseDropdown}
              />
            </li>
            <li>
              <CompanyDropdown
                isOpen={openDropdown === "company"}
                toggleDropdown={() => toggleDropdown("company")}
                closeDropdown={handleCloseDropdown}
              />
            </li>
            <li>
              <Link href="/ourBlog" className="flex items-end gap-2 text-[16px] lg:text-[18px] hover:text-gray-500 transition duration-200">
                <span>Our Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/ambassador" className="flex items-end gap-2 text-[16px] lg:text-[18px] hover:text-gray-500 transition duration-200">
                <span>Become an Ambassador</span>
              </Link>
            </li>
          </ul>

          {/* Download Button - Visible on Desktop */}
          <div className="hidden md:block">
            <button className="border border-black rounded-[15px] px-4 py-2 text-[14px] lg:text-[16px] cursor-pointer hover:bg-[#062746] hover:text-white transition duration-200">
              Scan to Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[24px]"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} // Accessibility fix
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-[28px]"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>
          <ul className="flex flex-col items-center space-y-6 text-white text-[18px]">
            <li>
              <ServiceDropdown
                isOpen={openDropdown === "service"}
                toggleDropdown={() => toggleDropdown("service")}
                closeDropdown={handleCloseDropdown}
              />
            </li>
            <li>
              <CompanyDropdown
                isOpen={openDropdown === "company"}
                toggleDropdown={() => toggleDropdown("company")}
                closeDropdown={handleCloseDropdown}
              />
            </li>
            <li>
              <Link href="/ourBlog" className="flex items-end gap-2 text-[18px] hover:text-gray-300 transition duration-200" onClick={toggleMobileMenu}>
                <span>Our Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/ambassador" className="flex items-end gap-2 text-[18px] hover:text-gray-300 transition duration-200" onClick={toggleMobileMenu}>
                <span>Become an Ambassador</span>
              </Link>
            </li>
            <li>
              <button
                className="border border-white rounded-[15px] px-6 py-3 text-[16px] cursor-pointer hover:bg-white hover:text-black transition duration-200"
                onClick={toggleMobileMenu}
              >
                Scan to Download App
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
