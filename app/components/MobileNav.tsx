"use client"
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai';
import ServiceDropdown from './serviceDropdown';
import CompanyDropdown from './companyDropdown';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const MobileNav = ({
    setIsScanOpen
}: { setIsScanOpen: Dispatch<SetStateAction<boolean>>}
) => {
     const [openDropdown, setOpenDropdown] = useState<string | null>(null);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    
      const handleCloseDropdown = () => {
        setOpenDropdown(null);
      };
    
      const toggleDropdown = (dropdown: string) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
      };
    
     

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
               <Company/>
             </li>
             <li>
               <Link
                 href="/ourBlog"
                 className="block py-2 text-base hover:text-gray-500"
                
               >
                 Our Blog
               </Link>
             </li>
             <li>
               <Link
                 href="/ambassador"
                 className="block py-2 text-base hover:text-gray-500"
                 
               >
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
  )
}

export default MobileNav


export  function Service(){
    const [open, setOpen] = useState(false)
    return(

        <DropdownMenu open={open} onOpenChange={setOpen} >
            <DropdownMenuTrigger className='flex cursor-pointer items-center gap-3'>
                Services    <AiFillCaretDown  />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <ul>
                    <li>
                        <Link href="/crypto">Crypto</Link>
                    </li>
                    <li>  <Link href="/utilityPayment">Utility Payment</Link></li>
                    <li>  <Link href="/airtime">Airtime</Link></li>
                    <li><Link href="/virtualDollarCard">Virtual Dollar Card</Link></li>
                </ul>
            </DropdownMenuContent>

        </DropdownMenu>
    )
}


export  function Company(){
    const [open, setOpen] = useState(false)
    return(

        <DropdownMenu open={open} onOpenChange={setOpen} >
            <DropdownMenuTrigger className='flex cursor-pointer items-center gap-3'>
                Company    <AiFillCaretDown  />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <ul>
                    <li>
                        <Link href="/aboutUs">About Us</Link>
                    </li>
                    <li>  <Link href="/services">Services</Link></li>
                    <li>  <Link href="/ourTeam">Our Team</Link></li>
                </ul>
            </DropdownMenuContent>

        </DropdownMenu>
    )
}