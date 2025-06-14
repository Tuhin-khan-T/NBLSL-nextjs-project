import Image from 'next/image';
import React from 'react';


const Hero = () => {
  return (
    <div className="w-full h-[756px] bg-[url('/homepage-img/Hero%20Image.png')] bg-cover bg-no-repeat bg-center mt-[75px] bg-[#0A2F2B]">
      <div className="max-w-[85%] mx-auto py-[211px] flex flex-col gap-10">
        {/* Text Section */}
        <div className="w-full max-w-[619px] leading-[1.6] lg:mb-16">
          <h1 className="text-white font-bold text-[20px] md:text-[24px]">NBL Securities Limited</h1>
          <h1 className="text-white font-bold text-[26px] md:text-[32px] mt-2">
            Approaches the Capital Market
          </h1>
          <p className="mt-4 text-[#D7FCFF] leading-[28px] text-[14px] md:text-[16px]">
            NBL Securities is a full-service brokerage with its successful transformation from traditional boutique services to a comprehensive smart brokerage ecosystem.
          </p>
        </div>

        {/* Achievement Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* First Achievement */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/homepage-img/achievement 1.png"
                alt="Years of experience"
                width={44}
                height={44}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] md:text-[18px] font-bold text-white mb-1">20 Years</p>
              <p className="text-[16px] md:text-[18px] text-white">of Stock Market</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-[70px] bg-white"></div>

          {/* Second Achievement */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/homepage-img/customer 1.png"
                alt="Years of experience"
                width={44}
                height={44}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] md:text-[18px] font-bold text-white mb-1">20 Years</p>
              <p className="text-[16px] md:text-[18px] text-white">of Stock Market</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
