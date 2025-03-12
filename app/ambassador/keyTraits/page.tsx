import Image from 'next/image';

export default function WhoAreWeLookingFor() {
  return (
    <div className="bg-gray-100 py-12 px-5 md:px-10 lg:px-20 w-full overflow-hidden ">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
        Who are we looking for?
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 text-center">
        We are looking for entrepreneurial and innovative students who can push the Dantown brand in their campuses. They will be our student brand influencers and will earn income through our loyalty program and also monthly prizes.
      </p>

      {/* Subtitle */}
      <h2 className="text-2xl font-bold text-[#21c0e7] mb-8 text-center">
        KEY TRAITS NEEDED
      </h2>

      {/* Traits Container */}
      <div className="flex flex-nowrap justify-center gap-6 overflow-x-auto md:overflow-visible px-4 md:px-0 ">
        {/* Influential */}
        <div className="bg-white shadow-md rounded-lg p-6 w-[300px] sm:w-[350px] md:w-[370px] h-[250px] text-center flex flex-col justify-center shrink-0">
          <div className="flex items-center justify-center gap-4">
            <Image src="/keyTraits.png" alt="Influential" width={50} height={50} />
            <h2 className="text-xl font-bold text-gray-800">Influential</h2>
          </div>
          <p className="text-gray-600 text-base leading-relaxed mt-6">
            You can influence your tribe of friends and others to become Dantown customers.
          </p>
        </div>

        {/* Innovative */}
        <div className="bg-white shadow-md rounded-lg p-6 w-[300px] sm:w-[350px] md:w-[370px] h-[250px] text-center flex flex-col justify-center shrink-0">
          <div className="flex items-center justify-center gap-4">
            <Image src="/keyTraits.png" alt="Innovative" width={50} height={50} />
            <h2 className="text-xl font-bold text-gray-800">Innovative</h2>
          </div>
          <p className="text-gray-600 text-base leading-relaxed mt-6">
            You can sell and represent the company&apos;s brand through innovative ways.
          </p>
        </div>

        {/* Enthusiastic */}
        <div className="bg-white shadow-md rounded-lg p-6 w-[300px] sm:w-[350px] md:w-[370px] h-[250px] text-center flex flex-col justify-center shrink-0">
          <div className="flex items-center justify-center gap-4">
            <Image src="/keyTraits.png" alt="Enthusiastic" width={50} height={50} />
            <h2 className="text-xl font-bold text-gray-800">Enthusiastic</h2>
          </div>
          <p className="text-gray-600 text-base leading-relaxed mt-6">
            You are self-driven, energetic, and a positive person.
          </p>
        </div>
      </div>
    </div>
  );
}
