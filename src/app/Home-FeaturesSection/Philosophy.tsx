import React from "react";
import Image from "next/image";
import Carusel from "./Carusel";

const Philosophy = () => {
  return (
    <div>
      <div className="bg-[#E1F5EB] lg:h-[800px] pt-10 sm:pt-[80px] md:pt-[100px] px-4 sm:px-8 md:px-[60px] lg:px-[117px] mb-[50px]">
        <div className="">
          <h1 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] text-[#006A44] font-bold">
            Philosophy for Strategic Alliances
          </h1>

          <p className="text-[#000000] text-base sm:text-[17px] md:text-[18px] leading-[30px] md:leading-[34px] pt-4 sm:pt-5 max-w-[1220px]">
            NBL Securities focuses on maximizing client service by providing
            technologically advanced products and services. Our core goal is to
            simplify investing for clients by ensuring efficient online trading,
            swift trade execution, offering fundamental and technical analysis
            databases, proprietary trading platforms, and easy access to margin
            facilities. Upholding this motto, NBL Securities emphasizes
            establishing and maintaining strategic alliances with various local
            and international organizations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[82px] items-center mt-10">
          {/* Image Section */}
          <div className="mt-6 lg:mt-[80px] flex justify-center lg:w-[700px] md:w-[600px] sm:w-[500px]">
            <Image
              src="/homepage-img/Partnership.png"
              alt="Partnership Logo"
              layout="responsive"
              width={600}
              height={441}
              className="w-full max-w-[600px] h-auto"
            />
          </div>

          {/* We Offer Section */}
          <div className="w-full max-w-[537px] mt-10 lg:mt-[100px]">
            <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-[#006A44] font-bold">
              We Offer
            </h2>
            <ul className="list-disc pl-5 leading-[30px] md:leading-[34px] pt-3 text-base sm:text-[17px] md:text-[18px] text-black">
              <li>Robust Technology.</li>
              <li>RM support for effective client service.</li>
              <li>Marketing and Business Development support.</li>
              <li>Training for partners and staff.</li>
            </ul>
          </div>
        </div>
      </div>

      <Carusel />
    </div>
  );
};

export default Philosophy;
