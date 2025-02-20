"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Typed from "typed.js";
import Image from "next/image";
import LoadingSkeleton from "../components/LoadingSkeleton/LoadingSkeleton";

export default function ServiceCards() {
  const [isLoading, setIsLoading] = useState(false);
  const isInitialLoad = useRef(true);
  const typingRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    if (!typingRef.current) return;

    const typed = new Typed(typingRef.current, {
      strings: [
        `<div class='text-[3rem] leading-tight'>
          <span class='text-navy font-black'>Dantown</span> partners with 
          <span class='text-purple-500 font-black'>Hara</span> for all Gift card trades
        </div>`,
        `<div class='text-[3rem] leading-tight'>
          Experience total freedom with <span class='text-navy font-black'>Crypto</span>
        </div>`,
        `<div class='text-[3rem] leading-tight'>
          BTC and USDT now available!
        </div>`,
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    if (currentPath === "/" || currentPath === "/download") {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPath]);

  const handleNavigation = (url: string) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(url);
    }, 500);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start px-10 py-5 gap-2 font-sans mt-[13%] mb-[5%] mx-[3%] lg:mx-[2%]">
      {isLoading && <LoadingSkeleton />}

      {/* Left Section */}
      <div className="w-full lg:w-[40%] text-left ml-10">
        <h1 className="text-[1rem] font-bold text-gray-600 mb-5">PAY SMARTER. PAY FASTER</h1>
        <div className="font-impact text-[2.5rem] font-extrabold mb-5 min-h-[40px]" ref={typingRef}></div>
        <p className="text-[1rem] text-gray-800 mb-2 font-bold">We offer you ease and convenience</p>
        <button
          className="px-6 py-3 text-white bg-[#236dc2] rounded-full transition duration-300"
          onClick={() => handleNavigation("/download")}
        >
          Download App
        </button>
      </div>

      {/* Service Section - Width Increased & Positioned Left */}
      <div className="relative h-[500px] w-full lg:w-[500px] flex flex-col rounded-3xl shadow-2xl p-6 bg-white z-10 transform -translate-x-36 -translate-y-32">
        <h1 className="text-[23px] font-black text-left w-full mt-6 ml-5">Pick your choice</h1>
        <p className="text-[16px] font-extrabold text-left w-[90%] mt-4 mb-7 ml-5 text-gray-500">
          Get started by choosing to buy airtime or data. You can even pay bills right away.
        </p>

        <Image
          src="/movingDots.png"
          alt="moving dots"
          width={47}
          height={47}
          className="absolute left-[-28px] top-[20%] animate-[bounce_2s_infinite]"
        />
        <Image
          src="/movingDots.png"
          alt="moving dots"
          width={47}
          height={47}
          className="absolute right-[-25px] top-[40%] animate-[bounce_2s_infinite]"
        />

        {["buyAirtimeAndData.png", "sendAndReceiveCrypto.png", "payBills.png"].map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-start rounded-lg w-[95%] h-[90px] transition-all duration-300 hover:shadow-lg hover:border-gray-600 hover:scale-105 p-3"
          >
            <Image src={`/${src}`} alt="Service Icon" width={40} height={40} className="mr-4 rounded-full " />
            <div className="text-left">
              <h3 className="text-[18px] font-bold text-gray-800">{["Buy Airtime and Data", "Send/Receive Cryptocurrencies", "Pay Bills"][index]}</h3>
              <p className="text-[15px] text-gray-500">{["Buy airtime and data at your convenience.", "Send and receive cryptocurrencies worldwide.", "Pay your bills seamlessly with ease."][index]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Circle - Adjusted for Width Increase */}
      <div className="absolute top-[460px] right-[10%] transform -translate-x-16 -translate-y-48 w-[530px] h-[530px] rounded-full bg-gradient-to-r from-blue-100 via-white to-blue-200 opacity-95 z-[-1] clip-horizontal-cut"></div>
    </div>
  );
}
