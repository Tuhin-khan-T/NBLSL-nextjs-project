'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
  const [itemsPerSlide, setItemsPerSlide] = useState(5); // Default lg

  // Dynamically change items per slide based on screen width
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerSlide(2); // sm: <640px
      } else if (width < 768) {
        setItemsPerSlide(3); // md: <768px
      } else {
        setItemsPerSlide(5); // lg and up
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(logos.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const currentItems = logos.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className="w-full py-10 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-green-800">
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
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          {currentItems.map((logo, i) => (
            <div
              key={i}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 border-green-500 rounded-full flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Partner ${i}`}
                width={60}
                height={60}
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
