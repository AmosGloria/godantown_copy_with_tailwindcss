"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function StressFreeSide() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center px-8 py-8 gap-4 max-w-[1200px] mx-[6%] min-h-screen">
      {/* Left Side: Text Content */}
      <div className="flex-1 flex flex-col gap-6 text-center sm:text-left">
        <h1 className="text-[2.5rem] text-[#494141] mb-5 sm:mb-0">
          Move over to the stress-free side of life!
        </h1>
        <p className="text-[1.2rem] text-gray-600 leading-[1.8] mb-6">
          Our dollar virtual card allows you to make online purchases and engage in international
          transactions without having an international bank account.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <Link
            href="https://apps.apple.com/ng/app/dantown/id1575600937"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/googlePlay.png"
              alt="Google Play Icon"
              width={170}
              height={130}
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.dantown.Dantownapp&hl=en&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/appStore.png"
              alt="App Store Icon"
              width={170}
              height={130}
            />
          </Link>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 flex justify-center items-center sm:mt-0 mt-6 order-last sm:order-first">
        <Image
          src="/stressFreeSide.png"
          alt="Stress Free Side"
          width={550}
          height={700}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
