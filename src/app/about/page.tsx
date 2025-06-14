import React from "react";
import Navbar from "../component/Navbar";
import Image from "next/image";
import Footer from "../component/Footer";

const page = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />

      {/* Hero Image with Overlay Text */}
      <div className="mt-[75px] relative mb-10">
       
        <Image
          src="/image/about.png"
          alt="NBL Logo"
          width={1440}
          height={60}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center bg-[#013C27]/70 justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">About us</h1>
        </div>
        
      </div>

      {/* Main Content */}
      <div className="max-w-[95%] md:max-w-[894px] mx-auto mb-20 lg:mb-[150px] px-4 md:px-0">

        <h1 className="mb-5 text-[28px] md:text-[32px] text-[#006A44] font-bold">
          Corporate Profile
        </h1>

        <div className="text-[#6A6A6A] text-[16px] md:text-[18px] leading-[30px] md:leading-[34px] space-y-6">
          <p>
            NBL Securities Limited (NBLSL) is a subsidiary company of National Bank Limited. NBLSL is licensed to act as broker by Dhaka Stock Exchange (DSE) TREC No 203 and Chittagong Stock Exchange TREC No. 012 and under the regulatory framework of Bangladesh Securities and Exchange Commission (BSEC). NBLSL is fully compliant with Securities and Exchange Commission policies. Presently, we have 6 branches and two extension offices in different locations in Bangladesh.
          </p>

          <p>
            NBLSL has implemented the most updated back office and front office software that can be maneuvered for all services needed to be provided by a brokerage house. For the enhancement of customer service quality, NBLSL is going to introduce its own OMS and Mobile App through API (Application Programming Interface) connection with DSE and CSE matching engines.
          </p>

          <p>
            NBLSL is committed to being a preferred brokerage house providing comprehensive services to help achieve the financial goals through the guidance of its highly qualified and experienced human resources. NBLSL handles prestigious and renowned corporate clients, individual investors and financial institutions by providing a wide range of services.
          </p>

          <p>
            NBLSL also encourages investment based on fundamentals and has an in-house research team that provides equity valuation reports, industry & macroeconomic reviews, daily & weekly market updates, and helps investors in making informed investment decisions.
          </p>

          <p className="lg:mb-[150px] mb-10">
            Trade Licence No: TRAD/DSCC/336924/2019
          </p>
        </div>

        {/* Aim of Achievement Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className=" flex  w-[370px]">
            <Image
              src="/image/illustration.png"
              alt="NBL Illustration"
              width={297}
              height={218}
              className=""
            />
          </div>
          <div className="text-left lg:text-right lg:w-[800px]">
            <h1 className="text-[26px] md:text-[32px] text-[#006A44] font-bold mb-4">
              Aim of Achievement
            </h1>
            <p className="text-[#6A6A6A] leading-[30px] md:leading-[34px] text-[16px] md:text-[18px]">
              To be one of the most compliant, customer oriented, efficient and state of the art technology based brokerage platforms focusing on protection and maximization of investors wealth as well as the development of capital market and the economy of the country.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
