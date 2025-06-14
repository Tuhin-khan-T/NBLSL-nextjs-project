import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-[#D9F5EB] overflow-x-hidden">
      <div className="px-6  py-10 md:px-10 lg:px-[60px]  ">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/image/nblsl-logo-v2.svg"
            alt="NBL Logo"
            width={250}
            height={60}
            className="w-[200px] md:w-[250px] lg:w-[350px]"
          />
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
          {/* Why NBL */}
          <div>
            <h1 className="text-[18px] mb-4 text-[#006A44] font-bold">
              Why NBL Securities Limited
            </h1>
            <ul className="list-disc pl-5 lg:w-[300px] xl:w-[400px] space-y-2 text-base text-[#000000] ">
              <li>Full-fledged international standard RM-based brokerage services.</li>
              <li>Digital services with mobile applications</li>
              <li>Seamless trade executions through professional and authorized representatives.</li>
              <li>Advanced research and analytics services</li>
              <li>Stock trading at attractive commission rates.</li>
              <li>High standard retail brokerage services.</li>
            </ul>
          </div>

          {/* Switch To */}
          <div className="ml-0 lg:ml-24 xl:ml-44 min-w-[300px]">
            <h1 className="text-[18px] mb-4 text-[#006A44] font-bold">Switch To</h1>
            <ul className="space-y-2 text-base text-[#000000]">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/trek" className="hover:underline">Trek</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/deposit" className="hover:underline">Make Online Deposit</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="ml-0 lg:ml-12 xl:ml-32 min-w-[300px]">
            <h1 className="text-[18px] mb-4 text-[#006A44] font-bold">Important Links</h1>
            <div className="space-y-2">
              {[
                { name: "NBL", img: "NBL.png", link: "/" },
                { name: "BSEC", img: "BSEC.png" },
                { name: "DSE", img: "DSE.png" },
                { name: "CSE", img: "CSE.png" },
                { name: "Bangladesh Bank", img: "Bn Bank.png" },
                { name: "CDBL", img: "CDBL.png" },
              ].map(({ name, img, link }) => (
                <div className="flex items-center gap-2" key={name}>
                  <Image src={`/image/${img}`} alt={name} width={20} height={20} />
                  {link ? (
                    <a href={link} className="hover:underline text-base text-[#000000]">{name}</a>
                  ) : (
                    <span className="hover:underline cursor-pointer text-base text-[#000000]">{name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="xl:ml-24 min-w-[300px]">
            <h1 className="text-[18px] mb-4 text-[#006A44] font-bold">Legal</h1>
            <ul className="space-y-2 text-base text-[#000000]">
              <li><a href="/about" className="hover:underline">Customer Agreement</a></li>
              <li><a href="/about" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/about" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/about" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-[300px] xl:px-[50px]">
            <h1 className="text-[18px] mb-4 text-[#006A44] font-bold">Get in touch</h1>
            <p className="text-base text-[#000000] mb-2">
              Eunoos Trade Centre, (19th Floor),
              52 - 53 Dilkusha C/A, Dhaka - 1000.
            </p>
            <p className="text-base text-[#000000] mb-2">Email: support@nblsl.com</p>
            <p className="text-base text-[#000000]">Tel: 09638203203</p>
          </div>
        </div>

         <div className="mb-7 ">
          <Image
            src="/image/SSL_commerz_pay2.jpg"
            alt="NBL Logo"
            width={1400}
            height={60}
            className="w-full h-auto"
          />
         </div>

         <p className="text-[14px] text-center text-[#1D191F] ">Copyright © 2025 NBL Securities Limited | Designed & Developed by Techetron Ventures Ltd.</p>

      </div>
    </div>
  );
};

export default Footer;
