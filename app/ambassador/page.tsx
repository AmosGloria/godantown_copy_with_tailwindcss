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
    <div>
      <Navbar />
      
      {/* Main Container */}
      <div className="flex flex-wrap justify-between items-start px-[6%] py-[3%] gap-2 lg:gap-7">
        
        {/* Left Side */}
        <div className="flex-1 max-w-[68%] mt-8">
          <h1 className="text-[3.5rem] font-bold font-sans mb-5">
            Welcome to Dantown&apos;s Campus
            <span className="text-navy"> Ambassador</span> Program
          </h1>
          <p className="text-base leading-7 mb-5 text-gray-800">
            Leverage your reach and influence on your campus to earn passive
            <span className="block">
              income for life and win cool monthly prizes.
            </span>
          </p>
          
          {/* Apply Button */}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSelIxU_41SleXbwEqRx8sJCnvRNiyhwhh1ansirNR6phvBFpA/viewform">
            <button className="bg-cyan-400 text-white border-none px-6 py-3 rounded-md text-base mt-5 transition-all duration-300 hover:bg-cyan-600 hover:scale-105">
              Apply Here <span>&#8594;</span>
            </button>
          </Link>

          {/* Hara Image */}
          <div className="mt-5 grayscale">
            <Image src="/hara.png" alt="hara" width={180} height={80} />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-end gap-1 max-w-[32%] -mt-6 -mr-1">
          <Image 
            src="/campusGadgets.png" 
            alt="Campus Gadgets" 
            width={600} 
            height={400}  
            className="-mr-10 w-[600px] h-[350px]"
          />
          <Image 
            src="/campusAmbassador.png" 
            alt="Campus Ambassador" 
            width={600} 
            height={400} 
            className="w-[600px] h-auto"
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
