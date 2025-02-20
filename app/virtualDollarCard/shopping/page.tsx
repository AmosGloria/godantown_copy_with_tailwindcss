"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Shopping = () => {
  return (
    <>
      {/* Row Container for Shopping and Utilities */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-[5rem]">
        {/* Shopping Container */}
        <div className="flex justify-center items-center -mt-[6rem]">
          <div className="bg-[#f8f9fa] w-[25rem] h-[35rem] shadow-md rounded-lg transition-transform duration-300 text-left flex flex-col justify-start items-start p-4">
            <Image src="/shopping.png" alt="Shopping" width={60} height={90} className="w-[15rem] h-[15rem] mb-4 self-start" />
            <h1 className="text-[2.5rem] font-bold mb-8 text-left">Shopping</h1>
            <p className="text-[#4b5563] mb-[3.5rem] leading-[2] text-left">
              Clear your cart and pay with ease on all shopping platforms like Amazon, Ali Express, Shein, etc.
            </p>
            <Link href="/download">
              <button className="flex items-start justify-start text-[#5407e2] px-4 py-2 animate-moveLeftRight">
                Get a card <span className="ml-3">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Utilities Container */}
        <div className="flex justify-center items-center mt-[1rem]">
          <div className="bg-gradient-to-b from-[#ecf1d7] to-[#f8f9fa] w-[25rem] h-[35rem] shadow-md rounded-lg transition-transform duration-300 text-left flex flex-col justify-start items-start p-4">
            <Image src="/utilities.png" alt="Utilities" width={80} height={100} className="w-[15rem] h-[15rem] mb-4 self-start -mt-[2.5rem]" />
            <h1 className="text-[2.5rem] font-bold mb-8 text-left">Utilities</h1>
            <p className="text-[#4b5563] mb-[3.5rem] leading-[2] text-left">
              Enjoy uninterrupted subscription services on platforms like Spotify, Apple Music, YouTube Premium, etc., as well as Netflix, Prime, Hulu, and more.
            </p>
            <Link href="/download">
              <button className="flex items-start justify-start text-[#5407e2] px-4 py-2 animate-moveLeftRight">
                Get a card <span className="ml-3">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Fees and Courses Div */}
      <div className="flex justify-center items-center mt-[4rem] px-6">
        <div className="bg-[#f8f9fa] w-[50rem] h-[20rem] p-[1.5rem] shadow-md rounded-lg flex flex-col md:flex-row justify-between items-start">
          <div>
            <h1 className="text-[2.5rem] font-bold mb-8 text-left">Fees and Courses</h1>
            <p className="text-[#4b5563] mb-[3.5rem] leading-[2] text-left">
              Upskill and/or gain new knowledge with in-demand courses on all learning platforms, including Udemy, Coursera, and more.
            </p>
            <Link href="/download">
              <button className="flex items-start justify-start text-[#5407e2] px-4 py-2 animate-moveLeftRight">
                Get a card <span className="ml-3">&rarr;</span>
              </button>
            </Link>
          </div>
          <Image src="/feesAndCourses.png" alt="Fees and Courses" width={128} height={128} className="w-[21rem] h-[21rem] ml-4 -mt-[2.5rem] hidden md:block" />
        </div>
      </div>
    </>
  );
};

export default Shopping;
