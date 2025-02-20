"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedOn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset animation
          setTimeout(() => setIsVisible(true), 10); // Reapply animation
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% is visible
    );

    const refCurrent = sectionRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  const links = [
    {
      url: "https://www.vanguardngr.com/2021/10/dantown-partners-with-techrity-to-advance-tech-penetration-in-niger-delta-communities/",
      imageSrc: "/vanguard.png",
      alt: "Vanguard",
      adjustClass: "mt-16", 
    },
    {
      url: "https://techcabal.com/2020/11/03/the-future-of-payment-systems-issues-faced-with-money-transfer-and-how-btc-can-solve-it/",
      imageSrc: "/tc.png",
      alt: "TechCabal",
      adjustClass: "", 
    },
    {
      url: "https://www.thisdaylive.com/index.php/2021/10/18/dantown-partners-with-techrity-to-advance-tech-penetration-in-niger-delta-communities/",
      imageSrc: "/thisDay.png",
      alt: "ThisDay Live",
      adjustClass: "mt-4", 
    },
    {
      url: "https://nairametrics.com/2022/02/17/nigeria-should-key-in-rather-than-kill-it-ceo-dantown/",
      imageSrc: "/nairaMetrics.png",
      alt: "Naira Metrics",
      adjustClass: "", 
    },
    {
      url: "https://tribuneonlineng.com/dantown-deepens-community-roots-with-royal-fc-sponsorship/",
      imageSrc: "/nigerianTribune.png",
      alt: "Tribune Online",
      adjustClass: "mt-16", 
    },
    {
      url: "https://guardian.ng/news/world-environment-day-firms-inspire-youths-traders-in-portharcourt-to-beat-plastic-pollution/",
      imageSrc: "/theGuardian.png",
      alt: "Guardian",
      adjustClass: "mt-6", 
    },
    {
      url: "https://dailytrust.com/dantowns-5th-anniversary-the-royal-soiree/",
      imageSrc: "/dailyTrust.png",
      alt: "Daily Trust",
      adjustClass: "", 
    },
  ];

  return (
    <div ref={sectionRef} className="flex flex-col items-center text-center px-3">
      <h1 className="text-2xl font-bold mb-6 w-fit">We are featured on</h1>

      {/* First Row - All Links Except Last */}
      <div className="flex justify-center items-center flex-nowrap gap-x-6 w-full overflow-hidden">
        {links.slice(0, links.length - 1).map((link, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ease-out transform h-[80px] flex-shrink-0 ${link.adjustClass} ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link href={link.url} title={`Learn more about ${link.alt}`} target="_blank" rel="noopener noreferrer">
              <Image src={link.imageSrc} alt={link.alt} width={120} height={80} className="w-[125px] mx-auto" />
            </Link>
          </div>
        ))}
      </div>

      {/* Second Row - Last Link Centered with More Space */}
      <div className="w-full flex justify-center mt-10">
        <div
          className={`transition-all duration-1000 ease-out transform h-[80px] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href={links[links.length - 1].url}
            title={`Learn more about ${links[links.length - 1].alt}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={links[links.length - 1].imageSrc}
              alt={links[links.length - 1].alt}
              width={120}
              height={80}
              className="w-[125px] mx-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
