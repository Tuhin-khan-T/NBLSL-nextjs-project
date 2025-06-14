"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaInfoCircle, FaPhoneAlt, FaEllipsisV } from 'react-icons/fa';


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
    <header className="w-full h-[75px] bg-[#EEF2FB] border-b border-black py-4 fixed top-0 left-0 z-50  ">
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Logo Part */}
        <div className="flex items-center space-x-2">
          <Image
            src="/image/nblsl-logo-v2.svg"
            alt="NBL Logo"
            width={250}
            height={250}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className=" text-[#0D5B2B] hover:text-green-600 font-medium flex items-center gap-1     text-[17px] ">
                 About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#0D5B2B] hover:text-green-600 font-medium flex items-center gap-1 text-[17px]">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative">
          <button
            onClick={() => setShowModal(!showModal)}
            className="text-gray-600 text-xl"
          >
            <FaEllipsisV />
          </button>

          {/* Dropdown Modal */}
          {showModal && (
            <div className="absolute top-10 right-0 w-56 bg-gray-100 rounded-lg shadow-lg z-50 p-4 flex items-start gap-4">
              <div className="flex flex-col gap-3">
                <Link
                  href="/about"
                  className="flex items-center gap-2 text-gray-700 hover:text-green-700"
                  onClick={() => setShowModal(false)}
                >
                  <FaInfoCircle /> About Us
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-gray-700 hover:text-green-700"
                  onClick={() => setShowModal(false)}
                >
                  <FaPhoneAlt /> Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
        
      </div>
      
    </header>
    
    </div>
  );
};

export default Navbar;
