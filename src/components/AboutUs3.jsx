import React from "react";
import { Zap } from "lucide-react";
import cctvImg from "../assets/images/Group 537.png";
import approachImg from "../assets/images/Rectangle 48.png";

const AboutUs3 = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative w-full max-w-md mx-auto">
          <div className="relative">
            <img
              src={approachImg}
              alt="Approach Worker"
              className="rounded-3xl w-full h-auto object-cover z-10 relative"
            />
            <div className="absolute bottom-[-20px] right-[-10px] sm:right-[-20px] w-[280px] sm:w-[320px] md:w-[360px] h-[220px] sm:h-[240px] md:h-[260px] bg-[#4A66A0] rounded-3xl z-0"></div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <Zap className="text-[#4A66A0]" size={22} />
            <h3 className="text-black font-semibold tracking-wide text-xl sm:text-2xl ml-2">
              OUR APPROACH
            </h3>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4A66A0] mb-6">
            Powering Communities With Safe &<br className="hidden md:block" />
            Reliable Solutions
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6 border border-gray-100 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-3">
              <div className="p-3">
                <img src={cctvImg} alt="Mission Icon" className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h4 className="font-semibold text-2xl sm:text-3xl">Our Mission</h4>
            </div>
            <p className="text-[#4A66A0] text-base sm:text-lg md:text-xl leading-relaxed">
              "To deliver high-quality electrical services that ensure safety,
              efficiency, and customer satisfaction, while building long-term
              relationships and contributing to the well-being of our community."
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-3">
              <div className="p-3">
                <img src={cctvImg} alt="Vision Icon" className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h4 className="font-semibold text-2xl sm:text-3xl">Our Vision</h4>
            </div>
            <p className="text-[#4A66A0] text-base sm:text-lg md:text-xl leading-relaxed">
              "To be the leading provider of innovative electrical solutions,
              exceeding customer expectations and setting new standards for
              excellence in the industry."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs3;
