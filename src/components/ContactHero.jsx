import React from 'react';
import workerImage from '../assets/images/Screenshot 2025-06-12 152750.png';
import rightarrowbanner from '../assets/images/rightarrowbanner.png';
const ContactHero = () => {
  return (
    <div className="relative bg-gray-900 h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${workerImage})`,
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-end text-white">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <nav className="flex items-center text-sm sm:text-lg md:text-xl mb-2">
            <span className="font-semibold">Home</span>
            <span className="mx-1 sm:mx-2">
              <img src={rightarrowbanner} alt="arrow image" className="inline-block w-3 h-3 sm:w-4 sm:h-4" />
            </span>
            <span className="font-bold">Contact US</span>
          </nav>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Sparking Innovation, Illuminating Lives
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
