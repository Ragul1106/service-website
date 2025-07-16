import React from "react";
import { Link } from "react-router-dom";
import aboutBg from "../assets/images/Screenshot 2025-06-12 151859.png";
import AboutUs from "../components/AboutUs";
import AboutUs2 from "../components/AboutUs2";
import AboutUs3 from "../components/AboutUs3";
import StatsSection from "../components/StatsSection";

const About = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 px-4 w-full flex justify-start items-center h-full">
          <div className="text-white max-w-xl pl-4 md:pl-20 text-center">
            <div className="flex justify-center space-x-2 text-3xl font-semibold mb-2">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="text-white">›|</span>
              <span>About Us</span>
            </div>
            <p className="text-sm md:text-2xl font-light">
              Sparking Innovation, Illuminating Lives
            </p>
          </div>
        </div>
      </div>
      <AboutUs />
      <AboutUs2 />
      <AboutUs3 />
      <StatsSection />
    </>
  );
};

export default About;
