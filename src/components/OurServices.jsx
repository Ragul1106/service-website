import React from 'react';
import serviceBg from '../assets/images/Screenshot 2025-06-12 125941.png';
import cctvIcon from '../assets/images/Group 552.png';
import lightningIcon from '../assets/images/Group 24.png';


const Services = () => {
  return (
    <section className="px-4 py-12 text-center bg-white">
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-black tracking-wide flex justify-center items-center gap-2">
          OUR SERVICES
          <img src={lightningIcon} alt="Lightning Icon" className="w-12 h-12 md:w-12 md:h-12 object-contain" />
        </h2>

        <h3 className="text-xl md:text-2xl text-[#4A66A0] font-semibold mt-2">
          Expert Services for a Safer, Smarter World
        </h3>
        <p className="text-gray-800 mt-3">
          At ZAHIRX, we offer a comprehensive range of electrical services designed to meet the needs of
          homes and businesses. Our team of experts is dedicated to providing safe, efficient, and reliable
          electrical solutions.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <img
          src={serviceBg}
          alt="CCTV Service"
          className="w-full h-auto object-cover"
        />

        <div className="absolute inset-0 bg-[#002B5B]/60 flex justify-start items-center text-white px-6 md:px-16 py-6">
          <div className="flex flex-col items-center text-center max-w-md">
            <div className="bg-[#4A66A0] w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-md mb-3">
              <img src={cctvIcon} alt="CCTV" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-1">CCTV</h4>
            <p className="text-sm md:text-base">
              Advanced CCTV systems for enhanced security and surveillance,
              providing peace of mind and protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
