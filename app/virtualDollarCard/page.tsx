import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/page";
import BestVirtualCard from "./bestVirtualCard/page";
import CheapestVirtualDollarCard from "./cheapestVirtualDollarCard/page";
import StressFreeSide from "./stressFreeSide/page";
import SoMuchEase from "./soMuch/page";
import Shopping from "./shopping/page";
import Faq from "./questions/page";

// Metadata override for this page
export const metadata = {
  title: "Get a Secure and Cheap Virtual Dollar Card in Nigeria",
  description:
    "Create a virtual dollar card for just $1 with zero funding fees. No transaction limits. Accepted everywhere, anytime, securely.",
  icons: {
    icon: "/godantownLogo.png", // Path to the logo in the public directory
  },
};

export default function VirtualDollarCard() {
  return (
    <>
      {/* Navbar Section */}
      <div className="bg-white w-full">
        <NavBar />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-wrap items-center justify-between px-10 py-16 mx-auto max-w-[1200px]">
        {/* Left Section */}
        <div className="max-w-[600px]">
          <div className="inline-block px-4 py-2 text-sm font-bold text-gray-700 border rounded-lg mt-[20%] border-gray-500">
            PAY SMARTER, PAY FASTER
          </div>
          <h1 className="mt-8 text-4xl font-semibold text-gray-900 animate-popForward">
            For just $1 create your virtual dollar card with{" "}
            <span className="text-[#39afc3]">zero funding fees.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            No transaction limit. Get the cheapest, most secure dollar virtual card in Nigeria - works everywhere, every time, almost for free.
          </p>

          {/* Buttons Section */}
          <div className="mt-6 flex gap-4">
            <Link
              href="/app/download/page.tsx"
              className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
            >
              Download App
            </Link>
            <Link
              href="/app/download/page.tsx"
              className="px-6 py-3 text-black border border-black rounded-full hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Accepted Everywhere Section */}
          <div className="mt-8 flex items-center gap-4">
            <p className="text-lg font-bold text-black">Accepted everywhere on</p>
            <Image src="/masterCard.png" alt="MasterCard" width={100} height={5} />
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center max-w-[700px] mt-12 md:mt-0 md:absolute top-[10%] right-0">
          <Image
            src="/createVirtualCard.png"
            alt="Create Virtual Card"
            width={500}
            height={350}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Other Sections */}
      <BestVirtualCard />
      <CheapestVirtualDollarCard />
      <StressFreeSide />
      <SoMuchEase />
      <Shopping />
      <Faq />
      <Footer />
    </>
  );
}
