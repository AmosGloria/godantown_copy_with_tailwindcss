"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CryptoPage() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-5 sm:px-[6%] py-5 min-h-screen bg-white">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight md:ml-[15%]">
          <p>All transactions</p>
          <p>are carried out</p>
          <p>on our App</p>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 md:ml-[15%]">
          <Link
            href="https://apps.apple.com/ng/app/dantown/id1575600937"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/getItOnAppStore.png"
              alt="Get it on App Store"
              width={150}
              height={50}
              className="cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.dantown.Dantownapp&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/getItOnGooglePlay.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
              className="cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <Image
          src="/transactions.png"
          alt="Transactions"
          width={400}
          height={400}
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto rounded-lg md:mr-[15%]"
        />
      </div>
    </div>
  );
}
