import React from "react";
import WhyChooseDantown from "../whyChooseDantown/page";
import OurServices from "../ourServices/page";
import OurTeam from "../ourTeam/page";

export default function AboutDantown() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#d0eaff]/60 to-[#f7f7f7]/80 flex flex-col items-center justify-start mt-[5%] sm:mt-[10%] px-[5%] mb-0">
      <div className="w-full max-w-[1200px] text-left font-sans box-border">
        <div className="space-y-6">
          {/* About Dantown Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] font-bold text-[#007bff] ml-[5%] mt-[10%]">
            About <span className="block mb-[1.5%]">Dantown</span>
          </h1>

          {/* Circle */}
          <div className="mx-auto mt-[-12%] sm:mt-[-10%] flex justify-center">
            <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full bg-gradient-to-br from-[#87cefa]/90 to-[#d0eaff]/10 flex justify-center items-center shadow-[0px_12px_25px_rgba(135,206,250,0.5)] border-[3px] border-[#d0eaff]/80 relative mt-[-5%] sm:mt-[-16%] rotate-180">
              {/* Optional: Add content inside the circle if needed */}
            </div>
          </div>

          {/* Description */}
          <div className="text-black text-sm sm:text-base font-bold leading-relaxed text-center sm:text-left ml-[5%] mt-[2%] mb-0">
            <p className="mb-0">
              Dantown is a fin-tech company that solves payment problems using cryptocurrencies. We instantly buy and sell cryptocurrencies, and our services are tailored to satisfy individual consumers and merchants.
            </p>
            <p className="mb-0">
              In a bid to serve our customers better, we make sure our service delivery is top-notch, with our customer care unit trained to respond faster than debit-alerts.
            </p>
            <p className="mb-0">
              We don’t just transact with our customers, we create a royal experience because every Dantown customer is royalty.
            </p>
          </div>

          {/* Components */}
          <WhyChooseDantown />
          <OurServices />
          <OurTeam />
        </div>
      </div>
    </div>
  );
}