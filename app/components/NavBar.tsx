"use client";

import { useState } from "react";
import Link from "next/link";
import ServiceDropdown from "./serviceDropdown";
import CompanyDropdown from "./companyDropdown";
import ScanToDownload from "./scanToDownload";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Mobile menu icons
import MobileNav from "./MobileNav";

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
      <nav className="w-full bg-white relative">
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
          <ul className="hidden md:flex list-none space-x-6 lg:space-x-8 z-10">
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
          <div className="hidden md:block z-10">
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

      {/* Mobile Navigation Menu with 3D Borderless Effect */}
      {isMobileMenuOpen && (
      <div className="absolute top-0 left-0 w-full bg-white z-50 shadow-md transform transition-all ease-in-out duration-300 rounded-xl border-0">
         <button
           className="absolute top-5 right-5 text-black text-[28px]"
           onClick={toggleMobileMenu}
           aria-label="Close menu"
         >
           <AiOutlineClose />
         </button>
         {/* Aligning everything to the left and vertically aligned */}
        <MobileNav setIsScanOpen={setIsScanOpen} />
       </div>
      )}

      {/* ScanToDownload Popup */}
      <ScanToDownload isOpen={isScanOpen} onClose={() => setIsScanOpen(false)} />
    </>
  );
};

export default Navbar;
