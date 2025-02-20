import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/NavBar";

const NotFound = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-5">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          Feeling Lost? Let&apos;s take you home
        </h1>
        <Image
          src="/404.png"
          alt="404 illustration"
          className="mb-5"
          width={300}
          height={200}
        />
        <Link
          href="/"
          className="text-lg text-blue-600 no-underline px-5 py-2 rounded-md transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
