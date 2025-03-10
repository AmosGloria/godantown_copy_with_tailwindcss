"use client";

import { useState } from "react";
import Link from "next/link";
import ServiceDropdown from "./serviceDropdown";
import CompanyDropdown from "./companyDropdown";
import ScanToDownload from "./scanToDownload/page"; // Import ScanToDownload component
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Mobile menu icons

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScanOpen, setIsScanOpen] = useState(false); // State for scan popup

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
            <Image
              src="/godantown log.webp"
              alt="Company Logo"
              width={150}
              height={150}
              className="w-32 md:w-48"
            />
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
              <Link
                href="/ourBlog"
                className="flex items-end gap-2 text-[16px] lg:text-[18px] hover:text-gray-500 transition duration-200"
              >
                Our Blog
              </Link>
            </li>
            <li>
              <Link
                href="/ambassador"
                className="flex items-end gap-2 text-[16px] lg:text-[18px] hover:text-gray-500 transition duration-200"
              >
                Become an Ambassador
              </Link>
            </li>
          </ul>

          {/* Download Button - Visible on Desktop */}
          <div className="hidden md:block">
            <button
              className="border border-black rounded-[15px] px-4 py-2 text-[14px] lg:text-[16px] cursor-pointer hover:bg-[#062746] hover:text-white transition duration-200"
              onClick={() => setIsScanOpen(true)}
            >
              Scan to Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[24px]"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white z-50 shadow-md">
          <button
            className="absolute top-5 right-5 text-black text-[28px]"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>
          <ul className="flex flex-col items-center py-6 text-black text-[18px]">
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
              <Link
                href="/ourBlog"
                className="block py-2 hover:text-gray-500"
                onClick={toggleMobileMenu}
              >
                Our Blog
              </Link>
            </li>
            <li>
              <Link
                href="/ambassador"
                className="block py-2 hover:text-gray-500"
                onClick={toggleMobileMenu}
              >
                Become an Ambassador
              </Link>
            </li>
            <li>
              <button
                className="border border-black rounded-[15px] px-6 py-3 text-[16px] cursor-pointer hover:bg-[#062746] hover:text-white transition duration-200"
                onClick={() => {
                  toggleMobileMenu();
                  setIsScanOpen(true);
                }}
              >
                Scan to Download App
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* ScanToDownload Popup */}
      <ScanToDownload isOpen={isScanOpen} onClose={() => setIsScanOpen(false)} />
    </>
  );
};

export default Navbar;
