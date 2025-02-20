"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function BestVirtualCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
          } else {
            entry.target.classList.remove("animate-slideUp");
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the element is visible
      }
    );

    const elements = containerRef.current?.querySelectorAll(".card");
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="mx-[10%] flex flex-col items-center justify-center max-w-[80%] min-h-screen" ref={containerRef}>
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-[2.5rem] font-bold leading-[1.2] mb-2">
          Dantown: The Best Virtual{" "}
          <span className="block">Dollar Card in Nigeria</span>
        </h1>
        <p className="text-[1.4rem] text-[#7c8080] leading-[1.8]">
          Our cards give you the freedom to spend your money locally and internationally without
          hassle. You can now shop and settle bill payments & subscriptions on Netflix, Spotify,
          Meta, YouTube Premium, Ali Express, Shein, Hulu, Google, Udemy, Coursera, etc. with ease!
        </p>
      </header>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-6 justify-between items-center w-[78%]">
        {[
          {
            img: "/supportsHighValue.png",
            title: "Supports high value payments",
            description:
              "Your spending should have no limit. Our dollar virtual card gives you that freedom you deserve.",
          },
          {
            img: "/reliableAccess.png",
            title: "Reliable access to the international market",
            description: "Zero card rejection on any platform. Spend globally effortlessly.",
          },
          {
            img: "/makeFasterOnlinePayment.png",
            title: "Make faster online payments with ease",
            description:
              "Speedy processing of online payments now possible with our virtual dollar cards.",
          },
          {
            img: "/securedAndTransparent.png",
            title: "Secured and transparent International payments",
            description: "Safety and security guaranteed. Spend with confidence, every time.",
          },
          {
            img: "/makeAndManageSubscriptions.png",
            title: "Make and manage all your subscriptions in one place.",
            description:
              "No payment failure. Enjoy uninterrupted subscription services with your Dantown virtual dollar card.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`card relative w-[24rem] min-h-[22rem] bg-white p-8 flex flex-col justify-center items-start gap-4 shadow-md transition-all duration-300 group hover:bg-blue-50 ${
              index % 2 !== 0 ? "mt-36" : index === 3 ? "mt-44" : "mt-0"
            }`}
          >
            {/* Image Wrapper */}
            <div className="relative flex justify-center items-center w-[70px] h-[70px] rounded-full overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-black transition-all duration-300 group-hover:bg-white"></div>
              <div className="absolute inset-0 rounded-full bg-white p-[3px]"></div>
              <Image src={card.img} alt={card.title} width={60} height={60} className="relative w-[70%] h-[70%]" />
            </div>
            <h2 className="text-[1.2rem] font-bold text-black group-hover:text-gray-900 transition-all duration-300">
              {card.title}
            </h2>
            <p className="text-[1.1rem] text-[#4b5563] leading-[1.8] text-left group-hover:text-gray-800 transition-all duration-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
