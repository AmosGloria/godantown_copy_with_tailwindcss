import Image from 'next/image';

export default function WhatDoYouStandToGain() {
  return (
    <div className="text-center px-5 py-12 mx-auto mt-[3%] max-w-[1200px]">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
        What do you stand to <span className="block">gain?</span>
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {/* Passive Income */}
        <div className="relative w-full max-w-[600px] h-[150px] bg-white rounded-lg shadow-none transition-all duration-300 hover:shadow-lg cursor-crosshair flex items-center p-6 gap-4 border-2 border-transparent">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-lg bg-blue-500 shadow-md">
            <Image src="/passiveIncome.png" alt="Passive Income" width={40} height={40} />
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-900 text-left flex-1">
            Passive income for life through our loyalty program
          </p>
        </div>

        {/* MacBook, iPhone, and iWatch */}
        <div className="relative w-full max-w-[600px] h-[150px] bg-white rounded-lg shadow-none transition-all duration-300 hover:shadow-lg cursor-crosshair flex items-center p-6 gap-4 border-2 border-transparent">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-lg bg-orange-500 shadow-md">
            <Image src="/macBook.png" alt="MacBook, iPhone, and iWatch" width={40} height={40} />
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-900 text-left flex-1">
            MacBook, iPhone, and iWatch
          </p>
        </div>

        {/* Company Merch */}
        <div className="relative w-full max-w-[600px] h-[150px] bg-white rounded-lg shadow-none transition-all duration-300 hover:shadow-lg cursor-crosshair flex items-center p-6 gap-4 border-2 border-transparent">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-lg bg-teal-400 shadow-md">
            <Image src="/companyMerch.png" alt="Company Merch" width={40} height={40} />
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-900 text-left flex-1">
            Company merch
          </p>
        </div>

        {/* Build Professional Network */}
        <div className="relative w-full max-w-[600px] h-[150px] bg-white rounded-lg shadow-none transition-all duration-300 hover:shadow-lg cursor-crosshair flex items-center p-6 gap-4 border-2 border-transparent">
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-lg bg-green-600 shadow-md">
            <Image src="/build.png" alt="Build Network" width={40} height={40} />
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-900 text-left flex-1">
            Build your Professional network
          </p>
        </div>
      </div>
    </div>
  );
}
