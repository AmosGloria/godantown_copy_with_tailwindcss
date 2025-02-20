"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const WhyChooseDantown = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              const index = sectionsRef.current.indexOf(entry.target as HTMLDivElement);
              if (index !== -1) {
                newSet.add(index);
              }
              return newSet;
            });
          }
        });
      },
      { threshold: 0.3 } // Increased threshold for better detection
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-16 px-6 lg:px-24 py-20">
      {/* Heading & First Section */}
      <div
        className={`flex items-start gap-52 transition-all duration-700 ease-out ${
          visibleSections.has(0) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"
        }`}
        ref={(el) => {
          if (el) sectionsRef.current[0] = el;
        }}
      >
        {/* Heading */}
        <div  className={`text-blue-600 font-bold text-5xl transition-all duration-700 ease-out ${
    visibleSections.has(0) ? "translate-x-6 opacity-100" : "translate-x-0 opacity-0"
  }`}>
          <h1>Why</h1>
          <h1>Choose</h1>
          <h1>Dantown</h1>
        </div>

        {/* First Section */}
        <div
          className={`flex items-start gap-4 w-[60%] transition-all duration-700 ease-out ${
            visibleSections.has(0) ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-24"
          }`}
        >
          <Image
            src="/ease.png"
            alt="Ease"
            width={150}
            height={150}
            className="h-[120px] w-[100px] flex-shrink-0 rounded-lg"
          />
          <div className="flex-1 min-w-[300px]">
            <h3 className="font-bold text-lg mb-4 leading-tight">
              Ease in setting up your account. Or Set up your account faster
              than pronouncing &ldquo;Jack&rdquo;
            </h3>
            <p>
              A core part of our existence is customer convenience. You don’t
              have to spend hours setting up an account. Within three minutes
              from the comfort of your phone or PC, you can easily set up your
              account.
            </p>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      {[
        { imgSrc: "/noHiddenFees.png", alt: "No Hidden Fees", title: "No hidden fees.", text: "Integrity is at the core of our existence. Our rates are arguably the best in the country.", align: "right" },
        { imgSrc: "/noMaintenanceFees.png", alt: "No Maintenance Fees", title: "No maintenance fees.", text: "We don’t charge you any token for the maintenance of your naira wallet.", align: "left" },
        { imgSrc: "/excellentService.png", alt: "Excellent Service", title: "Excellent service delivery.", text: "Our services are tailored to give you the best experience in the industry.", align: "right" },
        { imgSrc: "/fastPayment.png", alt: "Fast Payment", title: "Fast Payment.", text: "You really don’t have to wait for hours before being paid when you transact with us.", align: "left" },
        { imgSrc: "/excellentCustomerService.png", alt: "Excellent Customer Service", title: "Excellent customer service.", text: "At Dantown, our customer care unit is called Customer Happiness Unit.", align: "right" },
      ].map(({ imgSrc, alt, title, text, align }, index) => (
        <div
          key={index}
          className={`flex flex-wrap items-start gap-2 transition-all duration-700 ease-out ${
            visibleSections.has(index + 1)
              ? "opacity-100 translate-x-0"
              : align === "right"
              ? "opacity-0 translate-x-24"
              : "opacity-0 -translate-x-24"
          }`}
          ref={(el) => {
            if (el) sectionsRef.current[index + 1] = el;
          }}
        >
          <Image
            src={imgSrc}
            alt={alt}
            width={150}
            height={150}
            className={`h-[120px] w-[100px] flex-shrink-0 rounded-lg ${
              align === "right" ? "ml-5" : "ml-[43%]"
            }`}
          />
          <div className="flex-1 min-w-[300px]">
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseDantown;
