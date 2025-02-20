"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const BankOnYourTerms = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const bulletRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
        } else {
          setIsAnimated(false);
        }
      },
      { threshold: 0.5 }
    );

    const refCurrent = bulletRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  return (
    <div className="mx-[10%] px-[5%] flex flex-col items-center text-center w-full">
      <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mt-10">You Got It!<br />Bank on your Terms.</h1>
      <p className="text-base md:text-lg text-gray-600 mt-2.5 mb-6">We offer you 24/7 customer support, and our transactions are easy to
      <span className="block mt-2 text-lg"></span> carry out.</p>
      
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex-1 flex flex-col md:text-left mt-[10%] md:mt-[5%]">
          <div 
            ref={bulletRef} 
            className={`opacity-0 transform -translate-x-24 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-x-0' : ''}`}
          >
            <div className="flex flex-col items-start mt-7 font-bold text-black text-lg md:text-xl">
              <Image src="/purpleBullet.png" alt="Purple Bullet" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
              <span className="mt-2 text-sm md:text-base">Receive, store, spend, and transfer cryptocurrencies with ease.</span>
            </div>
            <div className="flex flex-col items-start mt-7 font-bold text-black text-lg md:text-xl">
              <Image src="/pinkBullet.png" alt="Pink Bullet" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
              <span className="mt-2 text-sm md:text-base">Pay bills in seconds and cater for your recurring bills.</span>
            </div>
            <div className="flex flex-col items-start mt-7 font-bold text-black text-lg md:text-xl">
              <Image src="/greenBullet.png" alt="Green Bullet" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
              <span className="mt-2 text-sm md:text-base">Get airtime top-up instantly.</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-10 md:mt-0 w-full md:w-auto">
          <Image src="/phones.png" alt="Phones" width={500} height={500} className="w-72 h-72 md:w-[560px] md:h-[560px]" />
        </div>
      </div>
    </div>
  );
};

export default BankOnYourTerms;
