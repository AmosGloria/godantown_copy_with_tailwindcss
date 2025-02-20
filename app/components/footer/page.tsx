"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black flex flex-col w-full">
      {/* Top Border */}
      <div className="h-[1px] bg-gray-700 w-full"></div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-5 px-5 md:px-10 py-6 max-w-[1300px] mx-auto min-h-[350px]">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Image
            src="/godantownLogo.png"
            alt="Godantown Logo"
            width={60}
            height={30}
            className="max-w-full"
          />
        </div>

        {/* Our Company Section */}
        <div className="flex-1 flex flex-col ml-4">
          <h2 className="text-xl font-bold mb-2">Our Company</h2>
          <ul className="space-y-2">
            <li><Link href="https://godantown.com/about">About Us</Link></li>
            <li><Link href="https://godantown.com/careers">Careers</Link></li>
            <li><Link href="https://godantown.com/ambassador">Become An Ambassador</Link></li>
            <li><Link href="https://godantown.com/contact">Contact</Link></li>
            <li><Link href="https://godantown.com/terms">Terms and Conditions</Link></li>
            <li><Link href="https://godantown.com/faq">Info</Link></li>
          </ul>
        </div>

        {/* Vertical Border */}
        <div className="hidden md:block w-[1px] bg-gray-400 h-[50vh]"></div>

        {/* Contact Section */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <address className="flex flex-col space-y-2">
            <p>NTA/Choba Road</p>
            <p>Mgbuoba, PH</p>
            <p>Nigeria</p>
            <p>+234 906 863 3429</p>
            <p>
              <a href="mailto:support@godantown.com">support@godantown.com</a>
            </p>
          </address>
        </div>

        {/* Vertical Border */}
        <div className="hidden md:block w-[1px] bg-gray-400 h-[50vh]"></div>

        {/* Newsletter Section */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-bold mb-2">Newsletter</h2>
          <p className="mb-3">Subscribe to our newsletter to get more free information about us and our products.</p>
          <form className="flex flex-col space-y-4">
            <label className="text-sm font-medium">First Name</label>
            <input type="text" placeholder="Enter Your First Name" className="p-2 border border-gray-300 rounded-lg w-full"/>

            <label className="text-sm font-medium">Email</label>
            <input type="email" placeholder="Enter Your Email Address" className="p-2 border border-gray-300 rounded-lg w-full"/>

            <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-lg">
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-[1px] bg-gray-500 my-5 w-full"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-800 py-4 px-6 bg-gray-50">
        <span>Copyright © 2025 Dantownms.com. All rights reserved.</span>
        
        {/* Social Links */}
        <div className="flex space-x-4">
          <Link href="https://web.facebook.com/godantown?_rdc=1&_rdr">
            <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
          </Link>
          <Link href="https://x.com/godantown">
            <Image src="/xLogo.png" alt="X (formerly Twitter)" width={30} height={30} />
          </Link>
          <Link href="https://www.instagram.com/godantown/#">
            <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
