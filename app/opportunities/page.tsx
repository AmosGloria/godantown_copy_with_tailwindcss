import React from "react";
import Image from "next/image";

export default function VirtualCardFeature() {
    return (
        <div className="virtual-card-feature flex justify-between items-center font-sans h-screen overflow-hidden mx-[6%] px-[3%] mt-[2%]">
            <div className="w-1/2 p-5 text-left">
                <h1 className="text-2xl text-black mt-[10%] mb-5 font-impact">
                    Endless Possibilities <span className="block">with our Virtual Card</span> feature
                </h1>
                <p className="text-base text-gray-600">
                    Now you can shop online and pay for <span className="block">your subscription services with ease.</span>
                </p>
            </div>
            <div className="w-[400px] h-[400px]">
                <Image
                    src="/opportunities.png"
                    alt="Opportunities"
                    width={400}
                    height={400}
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
