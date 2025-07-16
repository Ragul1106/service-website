import React from 'react';
import cctvBg from '../assets/images/Screenshot 2025-06-12 151428.png';
import rightarrowbanner from '../assets/images/rightarrowbanner.png';
const cctvBanner = () => {
  return (
    <section
      className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${cctvBg})` }}
    >

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center px-4 sm:px-8 sm:text-left sm:items-start flex flex-col items-center 
                      lg:left-48 lg:-translate-x-0 xl:left-64">

        <nav className="flex items-center text-sm sm:text-lg md:text-xl mb-2">
          <span className="font-semibold">Home</span>
          <span className="mx-1 sm:mx-2">
            <img src={rightarrowbanner} alt="arrow image" className="inline-block w-3 h-3 sm:w-4 sm:h-4" />
          </span>
          <span className="font-bold">Services</span>
        </nav>


        <h2 className="text-base sm:text-lg md:text-2xl font-light">
          Sparking Innovation, Illuminating Lives
        </h2>
      </div>
    </section>
  );
};

export default cctvBanner;
