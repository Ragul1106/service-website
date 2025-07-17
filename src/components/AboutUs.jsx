import React from "react";
import { useNavigate } from "react-router-dom";

import imgTop from "../assets/images/standard-quality-control-collage-concept.png";
import imgBottom from "../assets/images/Rectangle 375.png";
import person1 from "../assets/images/Ellipse 62.png";
import person2 from "../assets/images/Ellipse 63.png";
import person3 from "../assets/images/Ellipse 64.png";
import person4 from "../assets/images/Ellipse 65.png";
import person5 from "../assets/images/Ellipse 66.png";
import bulbIcon from "../assets/images/Group 568.png";
import testimonialimg from "../assets/images/material-symbols_electric-bolt-outline.png";
import circleIcon from "../assets/images/material-symbols_drag-click-rounded.png";
import personIcon from "../assets/images/Group 540.png";

const AboutUs = () => {
  const team = [person1, person2, person3, person4, person5];
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gray-50 relative overflow-hidden">

      <div className="relative w-full lg:w-1/2 flex justify-center items-end mb-10 lg:mb-0 min-h-[400px]">
        <div className="absolute left-0 top-[-4rem] z-20 flex flex-col items-center">
          <p className="text-3xl font-bold text-blue-700 mb-2">25</p>
          <div className="text-center [writing-mode:vertical-rl] rotate-180">
            <p className="text-md font-semibold tracking-wide">
              Years Experiences
            </p>
            <p className="text-md text-gray-600">Electro Mechanical</p>
          </div>
        </div>

        <img
          src={imgBottom}
          alt="Worker Bottom"
          className="absolute bottom-0 left-0 w-60 h-70 object-cover rounded-lg z-0"
        />

        <div className="relative z-10">
          <img
            src={imgTop}
            alt="Worker Main"
            className="w-[280px] md:w-[320px] lg:w-[360px] h-[24rem] md:h-[26rem] object-cover rounded-br-[80px] rounded-tl-[20px] shadow-xl"
          />

          <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
            <img src={personIcon} alt="Settings Icon" className="w-8 h-8" />
          </div>

          <div className="absolute bottom-4 left-4 bg-white rounded-full p-2 shadow-md">
            <img src={bulbIcon} alt="Bulb Icon" className="w-8 h-8" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 flex justify-center lg:justify-start items-center gap-2">
          About Us
          <img
            src={testimonialimg}
            alt="testimonial icon"
            className="h-8 w-auto"
          />
        </h2>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          Welcome to Zahrix!
        </h2>

        <h1 className="text-3xl md:text-4xl font-bold text-[#4A66A0] mt-6">
          Empowering Your Space, Enhancing <br /> Your Life
        </h1>

        <p className="mt-4 text-gray-700">
          At AH RIX, we're dedicated to delivering innovative electrical, CCTV,
          and Building Management System (BMS) solutions. Our expertise ensures
          a safer, more secure, and efficient environment for homes, businesses,
          and communities. With cutting-edge technology and exceptional service,
          we empower your space to reach its full potential. Trust us to
          illuminate your world with innovative solutions.
        </p>

        <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <button
            onClick={handleLearnMore}
            className="px-6 py-3 bg-[#4A66A0] text-white font-semibold rounded-lg flex items-center gap-2"
          >
            <img src={circleIcon} alt="icon" className="w-5 h-5" />
            <span>Learn More</span>
          </button>

          <div className="text-center lg:text-right">
            <h3 className="text-xl font-semibold mb-2">
              Meet Our Expert Team !
            </h3>
            <div className="flex justify-center lg:justify-end">
              {team.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Expert ${idx + 1}`}
                  className={`w-14 h-14 rounded-full object-cover border-2 border-white shadow-md ${
                    idx !== 0 ? "-ml-4" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
