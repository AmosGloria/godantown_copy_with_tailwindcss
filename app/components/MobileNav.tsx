"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AiFillCaretDown, } from "react-icons/ai"; // 'AiOutlineClose' is defined but never used.
// import ServiceDropdown from "./serviceDropdown"; // 'ServiceDropdown' is defined but never used.
// import CompanyDropdown from "./companyDropdown"; // 'CompanyDropdown' is defined but never used.
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuGroup, // 'DropdownMenuGroup' is defined but never used.
  // DropdownMenuItem, // 'DropdownMenuItem' is defined but never used.
  // DropdownMenuLabel, // 'DropdownMenuLabel' is defined but never used.
  // DropdownMenuPortal, // 'DropdownMenuPortal' is defined but never used.
  // DropdownMenuSeparator, // 'DropdownMenuSeparator' is defined but never used.
  // DropdownMenuShortcut, // 'DropdownMenuShortcut' is defined but never used.
  // DropdownMenuSub, // 'DropdownMenuSub' is defined but never used.
  // DropdownMenuSubContent, // 'DropdownMenuSubContent' is defined but never used.
  // DropdownMenuSubTrigger, // 'DropdownMenuSubTrigger' is defined but never used.
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Keep this as it's used in the code

const MobileNav = ({
  setIsScanOpen,
}: {
  setIsScanOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // const [openDropdown, setOpenDropdown] = useState<string | null>(null); // 'openDropdown' is assigned a value but never used.
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 'isMobileMenuOpen' is assigned a value but never used.
  
  // const handleCloseDropdown = () => { // 'handleCloseDropdown' is assigned a value but never used.
  //   setOpenDropdown(null); // 'openDropdown' is assigned a value but never used.
  // };
  
  // const toggleDropdown = (dropdown: string) => { // 'toggleDropdown' is assigned a value but never used.
  //   setOpenDropdown((prev) => (prev === dropdown ? null : dropdown)); // 'openDropdown' is assigned a value but never used.
  // };

  return (
    <div className="px-6 py-6 flex flex-col items-start text-black text-base space-y-4">
      <div className="flex items-center justify-between w-full">
        <Image
          src="/godantown log.webp"
          alt="Company Logo"
          width={100}
          height={100}
          className="w-32"
        />
      </div>
      <ul className="flex flex-col items-start space-y-4">
        <li>
          <Service />
        </li>
        <li>
          <Company />
        </li>
        <li>
          <Link href="/ourBlog" className="block py-2 text-base hover:text-gray-500">
            Our Blog
          </Link>
        </li>
        <li>
          <Link href="/ambassador" className="block py-2 text-base hover:text-gray-500">
            Become an Ambassador
          </Link>
        </li>
        <li>
          <button
            className="border border-black rounded-[15px] px-6 py-3 text-base cursor-pointer hover:bg-[#062746] hover:text-white transition duration-200"
            onClick={() => {
              setIsScanOpen(true);
            }}
          >
            Scan to Download App
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;

// Dropdown Service Component
export function Service() {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-3">
        Services <AiFillCaretDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-6 px-6 min-w-[200px]">
        <ul className="space-y-3">
          <li>
            <Link href="/crypto">Crypto</Link>
          </li>
          <li>
            <Link href="/utilityPayment">Utility Payment</Link>
          </li>
          <li>
            <Link href="/airtime">Airtime</Link>
          </li>
          <li>
            <Link href="/virtualDollarCard">Virtual Dollar Card</Link>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Dropdown Company Component
export function Company() {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-3">
        Company <AiFillCaretDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ul className="space-y-3">
          <li>
            <Link href="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/ourTeam">Our Team</Link>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
