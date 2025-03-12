import Image from 'next/image';

export default function BecomePart() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-8 px-4 sm:px-6 md:px-10 lg:px-20 mt-4 mb-14 w-full min-w-0 overflow-hidden">
      {/* Left Side - Image */}
      <div className="flex flex-1 justify-center items-center w-full sm:w-1/2 lg:w-2/5 min-w-0 sm:mb-8">
        <div className="relative w-full max-w-[400px] h-auto">
          <Image 
            src="/becomePart.png" 
            alt="Become Part" 
            width={350} 
            height={350} 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="flex flex-1 flex-col w-full sm:w-1/2 lg:w-3/5 min-w-0 text-right md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-center md:text-center">
          Become Part Of Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 mb-6 text-center sm:text-left">
          Are you an enthusiastic young student in the university yearning to be thrown into the deep end of a fast-moving, dynamic, and social work environment?
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 mb-6 text-center sm:text-left">
          Are you looking for an opportunity to turn your influence to impact and income?
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 mb-6 text-center sm:text-left">
          Are you intentional about building professional credibility through building your work experience with a fast-growing tech company?
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 text-center sm:text-left">
          If this is you, then this opportunity is for you.
        </p>
      </div>
    </div>
  );
}
