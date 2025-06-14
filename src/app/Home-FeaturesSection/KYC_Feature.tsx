import React from "react";
import Image from "next/image";
import Philosophy from "./Philosophy";

const KYC_Feature = () => {
  return (
    <div>
      <div className="bg-white py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20  lg:pl-[116px] ">
          {/* ------ Left Image ------ */}
          <div className="relative w-[280px] h-[250px] sm:w-[350px] sm:h-[310px] md:w-[400px] md:h-[350px] lg:w-[504px] lg:h-[504px]">
            <Image
              src="/homepage-img/Frame.png"
              alt="Smart Brokerage Feature"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* ------ Right Text Section ------ */}
          <div className="bg-[#EEF2FB] p-6 md:p-10 rounded-lg w-full lg:h-[480px] content-center h-auto">
            <h1 className="text-2xl sm:text-3xl  lg:text-[32px] text-[#006A44] font-bold pb-5 text-center lg:text-left">
              First-Ever Online e-KYC Feature
            </h1>
            <ul className="list-disc pl-5 text-base sm:text-lg text-[#000000] leading-relaxed space-y-3">
              <li>
                Complete online trading process and access to portfolio from
                anywhere, anytime.
              </li>
              <li>Live Call Center to support customer queries.</li>
              <li>Hassle-free account opening.</li>
              <li>No physical branch visits.</li>
              <li>
                Paperless process integrating e-KYC, order management, fund
                deposit and withdrawal.
              </li>
            </ul>
          </div>
        </div>

        {/* ------End-to-End Automation Section Start------ */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20 px-6 md:px-12 lg:pl-28 mt-20 md:mt-32">
          {/* ------ Left Image ------ */}
          <div className="relative w-[280px] h-[250px] sm:w-[350px] sm:h-[310px] md:w-[400px] md:h-[350px] lg:w-[504px] lg:h-[504px]">
            <Image
              src="/homepage-img/image 3.png"
              alt="Smart Brokerage Feature"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* ------ Right Text Section ------ */}
          <div className=" p-6 md:p-10 rounded-lg w-full h-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] text-[#006A44] font-bold pb-5 text-center lg:text-left">
              First-Ever Online e-KYC Feature
            </h1>
            <ul className="list-disc pl-5 text-base sm:text-lg text-[#000000] leading-relaxed space-y-3">
              <li>
                Complete online trading process and access to portfolio from
                anywhere, anytime.
              </li>
              <li>
                Paperless process integrating e-KYC, order management, fund
                deposit and withdrawal.
              </li>
            </ul>
          </div>
        </div>
        {/* ------End-to-End Automation Section End------ */}
      </div>

      {/* ------Research Knows No Bound Section start------ */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-16 lg:w-[1444px] mb-[114px] ">
        {/* ------ Left Text Section ------ */}
        <div className="bg-[#EEF2FB] p-6 md:p-10 rounded-lg w-full h-auto lg:h-[556px] content-center">
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] text-[#006A44] font-bold pb-5 text-center lg:text-left">
            First-Ever Online e-KYC Feature
          </h1>
          <ul className="list-disc pl-5 text-base sm:text-lg text-[#000000] leading-relaxed space-y-3">
            <li>
              Complete online trading process and access to portfolio from
              anywhere, anytime.
            </li>
            <li>Live Call Center to support customer queries.</li>
            <li>Hassle-free account opening.</li>
            <li>No physical branch visits.</li>
            <li>
              Paperless process integrating e-KYC, order management, fund
              deposit and withdrawal.
            </li>
          </ul>
        </div>

        {/* ------ Right Image Section ------ */}
        <div className="relative w-[280px] h-[250px] sm:w-[350px] sm:h-[310px] md:w-[400px] md:h-[350px] lg:w-[504px] lg:h-[504px]">
          <Image
            src="/homepage-img/Group.png"
            alt="Smart Brokerage Feature"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
      {/* ------Research Knows No Bound Section End------ */}

      <Philosophy />
    </div>
  );
};

export default KYC_Feature;
