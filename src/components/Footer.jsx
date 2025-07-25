import React, { useState, useContext } from "react";
import { toast, Toaster } from "react-hot-toast"; 
import logo from "../assets/images/logo.png";
import linkedinIcon from "../assets/images/linkedin.png";
import instagramIcon from "../assets/images/instagram.png";
import facebookIcon from "../assets/images/facebook.png";
import twitterIcon from "../assets/images/twitter.png";
import mailIcon from "../assets/images/mail.png";
import locationIcon from "../assets/images/location.png";
import phoneIcon from "../assets/images/phone.png";
import { DropdownContext } from "../context/DropdownContext";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { setIsDropdownOpen } = useContext(DropdownContext);

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    toast.success(`You've successfully subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-[#4A66A0] text-white py-10 px-4 relative">
      <Toaster position="top-right" reverseOrder={false} /> 

      <div className="max-w-7xl justify-content-between mx-auto grid md:grid-cols-2 gap-32 lg:gap-20">

        <div>
          <div className="flex items-center space-x-3 mb-10">
            <img src={logo} alt="Logo" className="h-22 w-22 me-10 rounded-full" />
            <h1 className="font-bold text-xl md:text-1xl  lg:text-4xl xl:text-2xl">ZAHIRX</h1>
          </div>

          <p className="text-sm md:text-lg lg:text-xl xl:text-xl mb-8 max-w-lg">
            “At ZAHIRX Delivering Electrical Solutions With Precision and Care”
          </p>

          <div className="space-y-5 text-sm md:text-base lg:text-lg xl:text-2xl">
            <div className="flex items-center space-x-3">
              <img src={mailIcon} alt="Email" className="w-12 h-12 object-contain" />
              <span>Zahrix@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={locationIcon} alt="Location" className="w-12 h-12 object-contain" />
              <span>23/9, Main Road Chennai.</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src={phoneIcon} alt="Phone" className="w-12 h-12 object-contain" />
              <span>+91 86456780987</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-4 text-lg md:text-2xl">Subscribe</h2>
          <form
            onSubmit={handleSubmit}
            className="flex items-stretch mb-2 w-full max-w-lg"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[70%] px-4 py-3 text-black rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-[30%] bg-black text-white px-4 py-3 rounded-r-md hover:bg-gray-800"
            >
              SIGN UP
            </button>
          </form>
          {error && <p className="text-red-300 text-sm mb-6">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 text-sm md:text-base lg:text-lg xl:text-lg mt-8">

            <div>
              <h3 className="font-semibold mb-3 text-base md:text-2xl">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/about">About Us</Link></li>
                <li>
                  <Link
                    to="/?openServices=true"
                    onClick={() => {
                      setIsDropdownOpen(true);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Our Services
                  </Link>
                </li>
                <li><Link to="/#testimonial">Testimonials</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-base md:text-2xl">Useful Links</h3>
              <ul className="space-y-3">
                <li><Link to="/terms">Terms of Use</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/careers">Careers</Link></li>
              </ul>
            </div>

            <div>
              <div className="flex flex-row md:flex-col gap-4">
                <a href="#"><img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10 object-contain" /></a>
                <a href="#"><img src={instagramIcon} alt="Instagram" className="w-10 h-10 object-contain" /></a>
                <a href="#"><img src={facebookIcon} alt="Facebook" className="w-10 h-10 object-contain" /></a>
                <a href="#"><img src={twitterIcon} alt="Twitter" className="w-10 h-10 object-contain" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm md:text-base text-white/90">
        © 2025 Developed & Maintained by ZAHIRX – All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
