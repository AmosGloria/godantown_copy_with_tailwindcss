import Image from 'next/image';
import Link from 'next/link';
import BecomePart from './becomePart/page';
import WhoAreWeLookingFor from './keyTraits/page';
import WhatDoYouStandToGain from './whatYouStandToGain/page';
import MissOut from './missOut/page';
import Navbar from '../components/NavBar';
import Footer from '../components/footer/page';

export default function AmbassadorPage() {
  return (
    <div className="relative">
      <Navbar />
      
      {/* Main Container */}
      <div className="flex flex-wrap justify-start items-start px-[6%] py-[3%] gap-0 lg:gap-4 relative">
        
        {/* Left Side */}
        <div className="flex-1 w-full sm:w-[50%] mt-8 flex flex-col items-center sm:items-center">
          <h1 className="w-full text-[1.6rem] md:text-[3.3rem] font-bold font-sans mb-5 text-center md:text-left">
            Welcome to Dantown&apos;s Campus
            <span className="text-navy"> Ambassador</span> Program
          </h1>
          <p className="w-full text-base leading-7 mb-5 text-gray-800 text-center md:text-left">
            Leverage your reach and influence on your campus to earn passive income for life and win cool monthly prizes.
          </p>
          
        {/* Apply Button */}
<div className="flex w-full justify-center md:justify-start">
  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSelIxU_41SleXbwEqRx8sJCnvRNiyhwhh1ansirNR6phvBFpA/viewform">
    <button className="bg-cyan-400 text-white border-none px-6 py-3 rounded-md text-base mt-5 transition-all duration-300 hover:bg-cyan-600 hover:scale-105">
      Apply Here <span>&#8594;</span>
    </button>
  </Link>
</div>


          {/* Hara Image */}
          <div className="mt-5 grayscale flex justify-center md:justify-start w-full">
            <Image src="/hara.png" alt="hara" width={180} height={80} />
          </div>
        </div>

        {/* Right Side - Images Adjusted */}
        <div className="flex-1 w-full sm:w-[50%] flex flex-col items-center gap-1 h-auto !mt-[-200px] sm:!mt-[-120px] ml-[0] sm:ml-[0] relative">
          
          {/* Stylish Wavy Circular Lines SVG */}
          <div className="absolute top-[-10px] left-[-100%] sm:left-[-115%] w-[600px] sm:w-[700px] opacity-50 z-[0] sm:block hidden">
            <svg viewBox="0 0 700 1000" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(-1,1) translate(-700,0)">
              <path d="M50,150 C180,50 350,300 520,120 C650,50 750,400 580,350 C420,280 250,550 100,400" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
              <path d="M50,250 C200,80 390,350 560,180 C690,100 790,450 620,380 C460,300 280,580 120,430" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
              <path d="M50,350 C220,120 420,420 590,240 C720,160 820,500 650,410 C490,340 310,610 140,460" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
              <path d="M50,450 C240,150 450,480 610,280 C740,200 840,550 670,450 C520,380 340,670 160,490" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
              <path d="M50,550 C260,180 480,540 630,320 C760,250 860,600 690,500 C540,420 370,700 180,520" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
              <path d="M50,650 C280,210 500,600 650,360 C780,280 880,650 710,550 C560,460 400,730 200,550" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
              <path d="M50,750 C300,250 520,660 670,400 C800,330 900,700 730,600 C580,480 430,760 220,580" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
              <path d="M50,850 C320,280 540,720 690,450 C820,380 920,750 750,650 C600,500 460,790 240,610" stroke="#D1D5DB" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          {/* First Image (Always Visible) */}
          <Image
            src="/campusGadgets.png"
            alt="Campus Gadgets"
            width={600}
            height={400}
            className="hidden sm:block !w-[600px] !h-[350px] !max-w-none mr-[-150px] " 
          />

          {/* Second Image */}
          <Image 
            src="/campusAmbassador.png" 
            alt="Campus Ambassador" 
            width={600} 
            height={400} 
            className="!w-[600px] !h-[350px] !max-w-none sm:mr-[-160px] relative z-[0] opacity-30 sm:opacity-100"
          />
        </div>
      </div>

      <BecomePart />
      <WhoAreWeLookingFor />
      <WhatDoYouStandToGain />
      <MissOut />
      <Footer />
    </div>
  );
}