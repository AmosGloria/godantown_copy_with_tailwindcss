"use client"

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

const OurServices = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const nairaRef = useRef<HTMLDivElement>(null);
  const cryptoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5,
    });

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (nairaRef.current) observer.observe(nairaRef.current);
    if (cryptoRef.current) observer.observe(cryptoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="my-12 mx-auto max-w-screen-xl px-4">
      {/* Heading Section */}
      <h1
        ref={servicesRef}
        className="font-arial text-[#007bff] text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-left transition-transform duration-1000 ease-in-out opacity-0 -translate-y-8"
      >
        <span className="block">Our</span>
        <span className="block">Services</span>
      </h1>

      {/* Naira Wallet Section */}
      <div
        ref={nairaRef}
        className="flex flex-col sm:flex-row items-start mb-8 sm:mb-12 sm:ml-8 transition-transform duration-1000 ease-in-out opacity-0 -translate-x-8 w-full"
      >
        <Image
          src="/nairaWallet.png"
          alt="Naira Wallet"
          width={80}
          height={80}
          className="mb-4 sm:mb-0 sm:mr-8"
        />
        <div className="text-left w-full">
          <p className="font-bold text-lg sm:text-xl md:text-2xl">Naira Wallet</p>
          <p className="text-sm sm:text-base md:text-lg">
            We provide you a naira wallet the moment you{' '}
            <span className="block">create an account with us and also verify this</span>
            <span className="block">account. With this wallet, you can receive money</span>
            <span className="block">from any Nigerian bank and also send money to</span>{' '}
            any bank of your choice, real-time.
          </p>
        </div>
      </div>

      {/* Crypto Wallet Section (Separated and Right-Aligned) */}
      <div className="flex justify-end w-full">
        <div
          ref={cryptoRef}
          className="p-6 rounded-lg w-full sm:w-1/2 transition-transform duration-1000 ease-in-out opacity-0 -translate-x-8"
        >
          <div className="flex flex-col sm:flex-row items-start w-full">
            <Image
              src="/cryptoWallet.png"
              alt="Crypto Wallet"
              width={80}
              height={80}
              className="mb-4 sm:mb-0 sm:mr-8"
            />
            <div className="text-left w-full">
              <p className="font-bold text-lg sm:text-xl md:text-2xl">Crypto Wallet</p>
              <p className="text-sm sm:text-base md:text-lg">
                Our system is fitted with the wallets of the{' '}
                cryptocurrencies we support. You can transfer
               your cryptocurrency from this wallet and also
              receive cryptocurrencies in real-time. Because
                we’re focused on the convenience of customers,
                we are continually working to add more
                cryptocurrency wallets to our system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Central Text Section */}
      <div className="text-center mt-4 sm:mt-6">
        <p className="text-lg sm:text-xl md:text-2xl">And many more...</p>
      </div>
    </div>
  );
};

export default OurServices;
