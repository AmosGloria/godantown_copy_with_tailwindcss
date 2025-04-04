"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function SoMuchEase() {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null); // Define sectionRef

  useEffect(() => {
    const currentRef = sectionRef.current;

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentRef?.classList.add("animate-moveLeft");
        } else {
          currentRef?.classList.remove("animate-moveLeft");
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

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
      className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-[1200px] mx-[6%] px-8 min-h-screen mt-12 mb-32 relative transition-transform duration-[3s] ease-in-out"
    >
      {/* Left Side: Text Content */}
      <div className="flex-1 flex flex-col gap-6 text-center sm:text-left mb-6 sm:mb-0">
        <h1 className="text-[2rem] sm:text-[2.2rem] text-black leading-[1.2]">
          So much you can do with ease on your Dantown app
        </h1>
        <p className="text-[1.2rem] sm:text-[1.3rem] text-gray-600 leading-[1.8]">
          Easily create and manage multiple virtual dollar cards on the Dantown app. Get transparent
          report and analytics on all spend and subscriptions to make better financial decisions.
        </p>
      </div>

      {/* Right Side: Image */}
      <div
        ref={imageRef}
        className="flex-1 flex justify-center items-center relative overflow-hidden order-last sm:order-first"
      >
        <Image
          src="/soMuch.png"
          alt="So Much Ease"
          width={400}
          height={300}
          className="max-w-full h-auto transition-transform duration-[2s] ease-in-out"
        />
      </div>
    </div>
  );
}
