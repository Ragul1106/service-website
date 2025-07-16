import React from 'react';
import waveBg from "../assets/images/image 1.png";
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ServiceCards from '../components/ServiceCards';
import Testimonials from '../components/Testimonials';
import ContactBanner from '../components/ContactBanner';

function Home() {
  return (
    <section className="relative overflow-y">
      <img
        src={waveBg}
        alt="Wave Background"
        className="absolute scale-x-[-1] opacity-50 top-[1800px] left-0 w-[250px] sm:w-[350px] md:w-[600px] z-10 pointer-events-none"
      />
      <img
        src={waveBg}
        alt="Wave Background"
        className="absolute scale-x-[-1] opacity-50 bottom-[1000px] right-0 max-w-full w-[250px] sm:w-[350px] md:w-[600px] z-10 pointer-events-none"
      />

      <div className="relative z-20">
        <HeroSection />
        <AboutUs />
        <Services />
        <ServiceCards />
        <Testimonials />
        <ContactBanner />
      </div>
    </section>
  );
}

export default Home;
