"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const DantownHappiness = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Use only one ref

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animation logic is removed, just keeping the observer for future purposes
          observer.disconnect(); // Stop observing after it animates
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer when unmounting
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-12 mx-auto w-full max-w-[1200px]"
    >
      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 mt-12 md:mt-0">
          Become happy using <span className="block font-bold">Dantown</span>
        </h1>
        <p className="text-gray-700 text-base mb-6">
          All your utility payments in one place with excellent{" "}
          <span className="block">customer service 24/7.</span>
        </p>

        {/* Download Buttons */}
        <div className="flex justify-center gap-3 mt-4">
          <Link href="https://apps.apple.com/ng/app/dantown/id1575600937">
            <Image
              className="cursor-pointer"
              src="/appStoreDownload.png"
              alt="Download on the App Store"
              width={200}
              height={60}
            />
          </Link>

          <Link href="https://play.google.com/store/apps/details?id=com.dantown.Dantownapp">
            <Image
              className="cursor-pointer"
              src="/googlePlayDownload.png"
              alt="Download on Google Play"
              width={200}
              height={60}
            />
          </Link>
        </div>
      </div>

      {/* Left Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 order-last md:order-first">
        <Image
          className="w-full max-w-[600px] h-auto"
          src="/usingDantown.png"
          alt="Using Dantown"
          width={600}
          height={500}
        />
      </div>
    </div>
  );
};

export default DantownHappiness;
