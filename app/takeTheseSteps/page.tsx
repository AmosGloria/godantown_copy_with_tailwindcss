"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const StepsNow: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimating(false);
          setTimeout(() => {
            setIsAnimating(true);
          }, 50);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`p-5 max-w-[1200px] mx-auto text-center transition-transform duration-300 ${
        isAnimating ? "animate-moveDown" : ""
      }`}
    >
      <h1 className="font-black text-[2.5rem] sm:text-[2rem] text-gray-900 mb-5">
        Take these steps now!
      </h1>
      <p className="text-lg sm:text-base text-gray-700 mb-8">
        <span className="block">Want to make payment,</span>
        <span className="block">
          send and receive funds without the stress of figuring
        </span>
        out how to go about it?
      </p>

      {/* Steps Container */}
      <div className="flex flex-wrap sm:flex-col md:flex-row justify-between items-start gap-5">
        {/* Step 1 */}
        <div className="flex-1 min-w-[250px] text-center">
          <Image
            className="rounded-lg mb-10 sm:mb-3 transform translate-y-0"
            src="/downloadApp.png"
            alt="Download App"
            width={100}
            height={100}
          />
          <p className="text-base sm:text-sm text-gray-800 text-left">
            <strong>Download app</strong> <br />
            Visit either Android’s Playstore or
            <span className="block">Apple’s Appstore and search for</span> 
            <span className="block">“Dantown”.</span> 
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex-1 min-w-[250px] text-center">
          <Image
            className="rounded-lg mb-36 sm:mb-20 transform translate-y-[135px] sm:translate-y-[50px]"
            src="/register.png"
            alt="Register"
            width={100}
            height={100}
          />
          <p className="text-base sm:text-sm text-gray-800 text-left">
            <strong>Register</strong> <br />
            Create an account in 3 minutes.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex-1 min-w-[250px] text-center">
          <Image
            className="rounded-lg mb-64 sm:mb-32 transform translate-y-[250px] sm:translate-y-[100px]"
            src="/enjoyFreedom.png"
            alt="Enjoy Freedom"
            width={100}
            height={100}
          />
          <p className="text-base sm:text-sm text-gray-800 text-left">
            <strong>Enjoy Freedom</strong> <br />
            With our tailored services and good{" "}
            <span className="block">rates at your disposal, freedom at last.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsNow;
