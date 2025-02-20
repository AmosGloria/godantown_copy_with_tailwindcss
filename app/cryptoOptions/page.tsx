"use client";

import Image from "next/image";

export default function CryptoOptions() {
  return (
    <div className="flex flex-col items-center text-center font-sans mt-[3%] pl-6 md:pl-14 px-4 md:px-9 w-full">
      <h1 className="text-2xl font-bold mb-8">Explore more crypto 
        <span className="block mt-2">options</span>
      </h1>

      {/*  Single Horizontal Line with More Space Between Sections */}
      <div className="flex flex-wrap justify-center md:justify-start
      font-bold items-center w-full gap-x-10 md:gap-x-32">
        {/* Exchange Crypto */}
        <div className="flex flex-col items-center px-4 md:px-6">
          <Image src="/exchangeCrypto.png" alt="Exchange Crypto" width={40} height={40} />
          <p className="text-base md:text-lg text-gray-800 mt-3">
            Exchange your crypto for cash at 
            <span className="block mt-2 font-bold">the best rates.</span>
          </p>
        </div>

        {/* Divider */}
        <div className="h-[120px] w-[2px] bg-gray-300 hidden md:block"></div>

        {/* Buy Crypto */}
        <div className="flex flex-col items-center px-4 md:px-5">
          <Image src="/buyCrypto.png" alt="Buy Crypto" width={40} height={40} />
          <p className="text-base md:text-lg text-gray-800 mt-3">Buy Crypto</p>
        </div>

        {/* Divider */}
        <div className="h-[120px] w-[2px] bg-gray-300 hidden md:block"></div>

        {/* Sell Crypto */}
        <div className="flex flex-col items-center px-4 md:px-6">
          <Image src="/sellCrypto.png" alt="Sell Crypto" width={40} height={40} />
          <p className="text-base md:text-lg text-gray-800 mt-3">Sell Crypto</p>
        </div>
      </div>
    </div>
  );
}
