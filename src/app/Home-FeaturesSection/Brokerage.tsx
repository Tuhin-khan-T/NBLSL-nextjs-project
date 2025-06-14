import React from 'react';
import Image from 'next/image';
import KYC_Feature from './KYC_Feature';

const Brokerage = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20">

        {/* ---------- Left Text Section ---------- */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] text-[#006A44] font-bold pb-5 text-center lg:text-left">
            First Smart Brokerage Feature
          </h1>
          <ul className="list-disc pl-5 text-base sm:text-lg text-[#000000] leading-relaxed space-y-3">
            <li>
              Comprehensive online share trading platform offering modern,
              user-friendly features for seamless investing.
            </li>
            <li>Investing is simple, transparent, and for everyone.</li>
            <li>
              Mobile app to provide clients with a smart and seamless trading
              experience.
            </li>
            <li>Smart online tools and Live Chat feature.</li>
            <li>
              First-tier Order Management System (OMS) to enhance customer
              service standards.
            </li>
            <li>
              Technical and Fundamental analysis tools with real-time market
              data for DSE & CSE.
            </li>
          </ul>
        </div>

        {/* ---------- Right Image Section ---------- */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[250px] sm:w-[350px] sm:h-[310px] md:w-[400px] md:h-[350px] lg:w-[430px] lg:h-[385px]">
            <Image
              src="/homepage-img/Group 745.png"
              alt="Smart Brokerage Feature"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
      <KYC_Feature/>
    </div>
  );
};

export default Brokerage;
