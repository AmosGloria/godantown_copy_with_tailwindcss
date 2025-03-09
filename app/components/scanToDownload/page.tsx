"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

interface ScanToDownloadProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScanToDownload: React.FC<ScanToDownloadProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50 p-4">
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-sm sm:max-w-md md:max-w-lg"
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
          aria-label="Close modal"
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="flex flex-col items-center">
          <Image
            src="/scanToDownload.png"
            alt="Scan to Download"
            width={250}
            height={250}
            className="w-3/4 sm:w-2/3 md:w-1/2"
          />
          <p className="text-center text-gray-700 font-semibold mt-3 text-sm sm:text-base">
            Scan the QR code to download the app
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScanToDownload;
