import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { DropdownContext } from '../context/DropdownContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDropdownOpen, setIsDropdownOpen } = useContext(DropdownContext);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav className="bg-[#4A66A0] text-white px-4 py-5 shadow-md relative z-[999]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" className="h-16 w-16 rounded-full" />
          <span className="font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide">ZAHIRX</span>
        </Link>

        <div className="hidden lg:flex space-x-8 items-center text-base lg:text-xl font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>

          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-1 hover:underline relative z-[2]">
              <span>Services</span>
              <ChevronDown size={18} />
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 bg-black/60 z-[1]" onClick={closeDropdown}></div>

                <div className="absolute left-0 mt-3 w-38 bg-white text-[#4A66A0] rounded-lg shadow-2xl z-[9999]">
                  <Link to="/services/electrical" className="block px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}>Electrical</Link>
                  <Link to="/services/cctv" className="block px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}>CCTV</Link>
                  <Link to="/services/bms" className="block px-4 py-2 hover:bg-gray-100" onClick={closeDropdown}>BMS</Link>
                </div>
              </>
            )}
          </div>

          <Link to="/projects" className="hover:underline">Projects</Link>
        </div>

        <Link to="/contact" className="hidden lg:inline-block bg-white text-[#4A66A0] px-5 py-2 rounded hover:bg-gray-100 font-medium text-sm lg:text-lg">
          Get a Quote
        </Link>

        <button onClick={toggleMobileMenu} className="lg:hidden text-white">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-3 px-4 text-base">
          <Link to="/" className="block" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className="block" onClick={closeMobileMenu}>About Us</Link>
          <div>
            <button onClick={toggleDropdown} className="flex items-center space-x-1">
              <span>Services</span>
              <ChevronDown size={16} />
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 bg-black/40 z-[1]" onClick={closeDropdown}></div>

                <div className="mt-2 bg-white text-[#4A66A0] rounded-md shadow-md text-base z-[9999] relative">
                  <Link to="/services/electrical" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>Electrical</Link>
                  <Link to="/services/cctv" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>CCTV</Link>
                  <Link to="/services/bms" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>BMS</Link>
                </div>
              </>
            )}
          </div>
          <Link to="/projects" className="block" onClick={closeMobileMenu}>Projects</Link>
          <Link to="/contact" className="inline-block bg-white text-[#4A66A0] px-4 py-2 rounded font-medium" onClick={closeMobileMenu}>
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;