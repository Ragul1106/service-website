import React from 'react';
import img1 from '../assets/images/Screenshot 2025-06-12 102855 h.png';
import img2 from '../assets/images/aj.png';
import img3 from '../assets/images/kp.png';
import arrowIcon from '../assets/images/mingcute_arrow-up-fill.png';

const Project3 = () => {
  return (
    <>
      <h2 className="text-5xl font-bold text-[#4A66A0] text-center my-4">
        03
      </h2>
      <h2 className="text-3xl font-bold text-black text-center">
        BMS Integration at DEF Hospital
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 px-4 lg:px-16 py-10 mx-4 md:mx-10 mb-10">
        <div className="rounded-2xl overflow-hidden shadow-lg w-full lg:w-1/3">
          <img src={img1} alt="Inspection" className="w-full h-full object-cover" />
        </div>

        <div className="relative overflow-visible rounded-3xl shadow-lg w-full lg:w-1/3 mt-10 lg:mt-28">
          <img
            src={img2}
            alt="LED Lighting"
            className="w-full h-[500px] md:h-[550px] lg:h-[600px] object-cover rounded-3xl"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center p-6 rounded-3xl">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              LED Lighting Retrofit
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-center max-w-sm">
              Illuminating spaces with energy-efficient LED lighting solutions,
              reducing energy consumption and maintenance costs.
            </p>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <img
              src={arrowIcon}
              alt="arrow icon"
              className="w-30 h-30 md:w-30 md:h-30 bg-[#4A66A0] rounded-full p-2 shadow-lg"
            />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg w-full lg:w-1/3">
          <img src={img3} alt="Electrical Panel" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Project3;
