'use client';
import Image from 'next/image';
import { useState } from 'react';

const logos = [
  '/homepage-img/Groupas.png',
  '/homepage-img/Payment Getway BD_logo 1.png',
  '/homepage-img/PaceCloud_Logo.png',
  '/homepage-img/LEADS_LOGO.png',
  '/homepage-img/LEADS_LOGO.png',
  '/homepage-img/ZagTrader_Logo.png',
  '/homepage-img/ZagTrader_Logo.png',
  '/homepage-img/ZagTrader_Logo.png',
  '/homepage-img/ZagTrader_Logo.png',
  '/homepage-img/ZagTrader_Logo.png',
];

const PartnerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ITEMS_PER_SLIDE = 5;
  const totalSlides = Math.ceil(logos.length / ITEMS_PER_SLIDE);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const currentItems = logos.slice(
    currentSlide * ITEMS_PER_SLIDE,
    currentSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  );

  return (
    <div className="w-full py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">
        OUR CURRENT PARTNERS
      </h2>

      <div className="flex items-center justify-center gap-4 sm:gap-6">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="p-2 text-gray-500 hover:text-green-600"
        >
          ❮
        </button>

        {/* Logos */}
        <div className="flex gap-4 sm:gap-6">
          {currentItems.map((logo, i) => (
            <div
              key={i}
              className="w-28 h-28 sm:w-32 sm:h-32 border-2 border-green-500 rounded-full flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Partner ${i}`}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="p-2 text-gray-500 hover:text-green-600"
        >
          ❯
        </button>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentSlide === i ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;
