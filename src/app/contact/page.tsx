import React from "react";
import Navbar from "../component/Navbar";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineCorporateFare } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Branceoffice from "./Branceoffice";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[75px] relative">
        <Image
          src="/contact-img/Header Image_2.png"
          alt="NBL Logo"
          width={1440}
          height={60}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center bg-[#013C27]/60 justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            CONTACT US
          </h1>
        </div>
      </div>

      <div
        className="w-full min-h-[622px]  bg-[#D9F5EB] pb-[90px] bg-cover bg-center"
        style={{ backgroundImage: "url(/contact-img/contact-us-banner.png)" }}
      >
        <div className="max-w-[90%] md:max-w-[70%] mx-auto mt-24">
          <h1 className="text-center text-[28px] md:text-[36px] text-[#222222] font-bold mb-16">
            Head Office
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Phone */}
            <div className="bg-white w-full max-w-[343px] h-[162px] rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-[50px] h-[50px] bg-[#126E37] rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <FiPhone className="w-[24px] h-[24px] text-white flex-shrink-0" />
              </div>
              <h3 className="text-[#555555] text-[16px] mb-1">
                Customer Care Hotline:
              </h3>
              <p className="text-[#222222] text-[16px]">09638203203</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white w-full max-w-[343px] h-[162px] rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-[50px] h-[50px] bg-[#126E37] rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <FaWhatsapp className="w-[24px] h-[24px] text-white flex-shrink-0" />
              </div>
              <h3 className="text-[#555555] text-[16px] mb-1">
                WhatsApp Support:
              </h3>
              <p className="text-[#222222] text-[16px] text-lg">
                01324724838, 01754728527
              </p>
            </div>

            {/* Corporate */}
            <div className="bg-white w-full max-w-[343px] h-[162px] rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
              <div className="w-[50px] h-[50px] bg-[#126E37] rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <MdOutlineCorporateFare className="w-[24px] h-[24px] text-white flex-shrink-0" />
              </div>
              <h3 className="text-[#555555] text-[16px] mb-1">
                Corporate Office
              </h3>
              <p className="text-[#222222] text-[16px]">
                01705600000, 0247119622
              </p>
            </div>

            {/* Email */}
            <div className="bg-white w-full max-w-[343px] h-[162px] rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center lg:ml-[400px]">
              <div className="w-[50px] h-[50px] bg-[#126E37] rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <CgMail className="w-[24px] h-[24px] text-white flex-shrink-0" />
              </div>
              <h3 className="text-[#555555] text-[16px] mb-1">Email</h3>
              <p className="text-[#222222] text-[16px]">support@nblsl.com</p>
            </div>

            {/* Location */}
            <div className="bg-white w-full max-w-[343px] h-[162px] rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center lg:ml-[400px]">
              <div className="w-[50px] h-[50px] bg-[#126E37] rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <IoLocationSharp className="w-[24px] h-[24px] text-white flex-shrink-0" />
              </div>
              <p className="text-[#222222] text-[16px]">
                Eunoos Trade Centre, (19th Floor), 52 - 53 Dilkusha C/A, Dhaka -
                1000
              </p>
            </div>
          </div>
        </div>
      </div>

      <Branceoffice />
    </div>
  );
};

export default page;
