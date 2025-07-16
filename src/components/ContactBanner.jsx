import React from 'react';
import bannerImg from '../assets/images/light-bulb-electricity.png';
import personImg from '../assets/images/Screenshot 2025-06-12 110247.png';
import contactIcon from '../assets/images/material-symbols_drag-click-rounded.png';
import testimonialimg from '../assets/images/ic_baseline-electric-bolt.png';

const ContactBanner = () => {
  return (
    <section className="relative w-full h-[550px] lg:h-[600px] overflow-hidden">

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:py-16">

        <div className="text-white max-w-xl text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 inline-flex items-center gap-2">
            Let’s Connect
            <img src={testimonialimg} alt="testimonial icon" className="h-8 w-auto" />
          </h2>

          <div className="h-[2px] w-16 bg-white mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            We’re here to answer your <br />
            <span className="text-blue-300">questions and help</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-200 mb-6">
            Whether you’re planning a new project or need emergency support,
            we’re available to provide fast and reliable assistance.
          </p>

          <button className="flex items-center gap-2 bg-[#4A66A0] text-white px-6 py-3 rounded-lg font-semibold">
            <img src={contactIcon} alt="contact" className="w-5 h-5" />
            Contact Us
          </button>
        </div>

        <div className="absolute top-0 -right-20 mt-10 lg:mt-0 w-[400px] lg:w-[500px] h-[700px]">
          <img
            src={personImg}
            alt="Electrician"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
