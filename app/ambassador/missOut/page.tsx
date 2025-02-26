"use client"; // Ensure this is a Client Component

import React from 'react';

export default function MissOut() {
  // Corrected function to navigate properly
  const handleApplyClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSelIxU_41SleXbwEqRx8sJCnvRNiyhwhh1ansirNR6phvBFpA/viewform";
  };

  return (
    <div className="bg-[#35176d] text-white rounded-[15px] relative text-center overflow-hidden mx-auto my-[10%] px-[20px] md:px-[40px] py-[40px] border border-white border-opacity-20 w-full max-w-[1115px] min-h-[350px] flex flex-col justify-center items-center">
      {/* SVG Sea-Wave Shape */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none" // <-- Prevents SVG from blocking clicks
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1100 350"
        fill="none"
      >
        <path d="M0,30 C275,120 825,-20 1100,30 S550,230 550,320" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
        <path d="M0,70 C250,160 850,10 1100,70 S570,250 550,330" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
        <path d="M0,110 C230,200 870,40 1100,110 S590,270 550,340" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
        <path d="M0,150 C210,240 890,70 1100,150 S610,290 550,350" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
        <path d="M0,190 C190,280 910,100 1100,190 S630,310 550,360" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
      </svg>

      {/* Title */}
      <h1 className="text-[2rem] md:text-[2.5rem] font-bold mb-[20px] leading-[1.3] relative mt-[-10px]">
        Don&apos;t miss out on this
        <span className="block"> opportunity</span>
      </h1>

      {/* Apply Button */}
      <button
        onClick={handleApplyClick}
        className="inline-flex items-center justify-center px-[30px] py-[12px] md:px-[40px] md:py-[14px] text-[1rem] font-bold text-[#001F3F] bg-white rounded-[10px] shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
      >
        Apply Here <span className="ml-[10px] text-[1.2rem]">&rarr;</span>
      </button>
    </div>
  );
}
