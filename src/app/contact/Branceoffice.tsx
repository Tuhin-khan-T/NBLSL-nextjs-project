import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Footer from '../component/Footer';

const Branceoffice = () => {
  const branches = [
    {
      name: "Banani Branch",
      address: "Ahmed Tower (1st Floor, West Side) 28-30, Kamal Ataturk Avenue Banani, Dhaka-1213",
      phone: "+880 16 1864 4555",
    },
    {
      name: "Mirpur Branch",
      address:
        "Sagufta RM Center (3rd Floor, South Part) Plot- 16 & 17, Main Road# 03, Section-07, Mirpur, Pallabi, Dhaka-1216",
      phone: "+880 17 3071 8539",
    },
    {
      name: "Dhanmondi Branch",
      address:
        "Bikalpa Dental Clinic & Commercial Complex (5th Floor, North Side) House# 74, Road# 5/A, Satmasjid Road, Dhanmondi, Dhaka-1209",
      phone: "+880 15 5266 5356",
    },
    {
      name: "Uttara Branch",
      address: "Auckland Center (3rd Floor, West Side) House # 11, Road# 6, Sector# 4, Uttara, Dhaka-1230",
      phone: "+880 19 4750 5050",
    },
    {
      name: "Agrabad Branch",
      address: "NBL tower,13(A), New SK Mujib Road Agrabad Chattogram # 4100",
      phone: "",
    },
    {
      name: "Anderkilla Branch",
      address: "K B Aman Ali Tower 2nd Floor 30, Anderkilla Chattagong # 4000",
      phone: "",
    },
    {
      name: "Moulovibazar Branch",
      address: "1, Moulovibazar (2nd Floor), Dhaka # 1100",
    },
  ];

  return (
    <div>
    <div className="bg-[#FFFFFF] px-4 py-8  ">
      <div className="max-w-7xl mx-auto lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-start">
          {/* Map Section */}
          <div className="relative lg:mt-14">
            <div className="bg-white rounded-lg">
              <Image
                src="/contact-img/Group 1000002462.png"
                alt="Bangladesh Map with Branch Locations"
                width={600}
                height={690}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Branch Information Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 lg:mt-8">Branch Office</h1>
            </div>

            <div className="space-y-8 lg:w-[440px]">
              {branches.map((branch, index) => (
                <div key={index} className="group">
                  <div className="space-y-2 mb-6">
                    {/* Branch Name */}
                    <h3 className="text-xl font-semibold text-[#0D5B2B] flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-emerald-600" />
                      </div>
                      {branch.name}
                    </h3>

                    {/* Address */}
                    <div className="pl-14">
                      <p className="text-[#222222] text-base leading-relaxed">{branch.address}</p>
                    </div>

                    {/* Phone */}
                    {branch.phone && (
                      <div className="">
                        <div className="flex items-center gap-4 text-[#222222]">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-base font-medium">{branch.phone}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <hr className="border-t border-[#126E37]/30 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>

    <Footer />
    </div>
  );
};

export default Branceoffice;
