"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-r from-teal-100 to-white text-center">
      
      {/* Main Section */}
      <div className="flex flex-col items-start justify-between w-full max-w-6xl lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold text-navy text-left ml-5">
            Join our 50k+ users today by 
            <span className="block text-2xl lg:text-3xl mt-2">downloading our app</span>
          </h1>
          
          {/* Download Buttons */}
          <div className="flex justify-start mt-8 gap-8 ml-5">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.dantown.Dantownapp&utm_source=Google+playstore&utm_medium=Google+play+store" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image src="/googlePlay.png" alt="Download on Google Play" width={200} height={60} className="cursor-pointer transition-transform duration-200 hover:scale-105" />
            </Link>
            <Link 
              href="https://apps.apple.com/ca/app/dantown/id1575600937?utm_source=iOS&utm_medium=iOS" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image src="/appStore.png" alt="Download on App Store" width={200} height={60} className="cursor-pointer transition-transform duration-200 hover:scale-105" />
            </Link>
          </div>
        </div>

        {/* Phone Image */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-end">
          <Image 
            src="/phone5hlete1u.png" 
            alt="App Preview" 
            width={300} 
            height={600} 
            className="rounded-lg lg:w-[400px] lg:h-auto"
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 w-full max-w-6xl text-left">
        <div className="flex items-center space-x-6 ml-5">
          <Link href="https://web.facebook.com/godantown" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook.png" alt="Facebook" width={40} height={40} className="rounded-full cursor-pointer transition-transform duration-200 hover:scale-105" />
          </Link>
          <Link href="https://x.com/godantown" target="_blank" rel="noopener noreferrer">
            <Image src="/xLogo.png" alt="Twitter" width={40} height={40} className="rounded-full cursor-pointer transition-transform duration-200 hover:scale-105" />
          </Link>
          <Link href="https://www.instagram.com/godantown/" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Instagram" width={40} height={40} className="rounded-full cursor-pointer transition-transform duration-200 hover:scale-105" />
          </Link>
        </div>
        <Link href="https://godantown.com/" target="_blank" rel="noopener noreferrer" className="block mt-4 text-black text-lg ml-5 hover:underline">
          www.godantown.com
        </Link>
      </footer>

    </div>
  );
}
