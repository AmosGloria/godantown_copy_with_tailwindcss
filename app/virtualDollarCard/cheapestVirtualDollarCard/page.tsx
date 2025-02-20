"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CheapestVirtualDollarCard() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = imageRef.current;

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentRef?.classList.add("animate-slideInRight");
        } else {
          currentRef?.classList.remove("animate-slideInRight");
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // Trigger animation when 50% of the image is visible
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
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-10 gap-8 max-w-[1200px] mx-auto mt-10 md:mt-20">
      {/* Left Side: Image */}
      <div ref={imageRef} className="flex-1 flex justify-center items-center overflow-hidden">
        <Image
          src="/cheapestVirtualDollarCard.png"
          alt="Cheapest Virtual Dollar Card"
          width={400}
          height={400}
          className="w-[80%] md:w-auto max-w-[400px] h-auto rounded-lg transition-transform duration-[2000ms] ease-in-out"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6 text-center md:text-left">
        <h1 className="text-[2rem] md:text-[2.2rem] font-bold leading-[1.5] text-black">
          We offer you the Cheapest Virtual Dollar Card in Nigeria
        </h1>
        <p className="text-[1.2rem] md:text-[1.4rem] leading-[1.8] text-gray-600">
          Shop online, pay bills and subscriptions instantly! At just $1, we
          offer you the cheapest virtual dollar card in Nigeria. Create and
          manage your virtual dollar cards that work everywhere every time. Our
          cards allow you to make seamless online bill and subscription payments
          on all platforms.
        </p>
        <Link href="/download">
          <button className="px-6 py-3 text-white bg-[#0854ac] font-bold rounded-[25px] transition duration-300 hover:bg-[#005bb5] w-full md:w-auto">
            Get your virtual card here
          </button>
        </Link>
      </div>
    </div>
  );
}
