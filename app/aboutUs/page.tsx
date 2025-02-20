import React from 'react';
import Navbar from '../components/NavBar'; 
import AboutDantown from './aboutDantown/page';
import Footer from "@/app/components/footer/page";

export default function AboutUs() {
  return (
    <>
      {/* Navbar with gradient background */}
      <div className="bg-gradient-to-r from-[#e8f6ff] via-[#f2f2f2] to-[#e8f6ff]">
        <Navbar />
      </div>

      {/* Main container with gradient background */}
      <div className="min-h-screen w-full bg-gradient-to-r from-[#e8f6ff] via-[#f2f2f2] to-[#e8f6ff] flex flex-col items-start justify-start overflow-auto box-border">
        {/* Main heading */}
        <h1 className="text-left text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-[1.4rem] font-bold mt-[5%] sm:mt-[10%] mx-[4%] sm:mx-[6%] px-[4%] sm:px-[6%] font-sans">
          ABOUT US
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] font-extrabold leading-tight font-[Arial Black]">
            We provide a platform for
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] font-extrabold leading-tight font-[Arial Black]">
            financial liberation!
          </span>
        </h1>

        {/* AboutDantown component */}
        <AboutDantown />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}