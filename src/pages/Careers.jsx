import React, { useState } from 'react';
import bgImage from '../assets/images/handshake-image.png';
import JobApplicationForm from '../components/JobApplicationForm';
import ticImage from '../assets/images/Group 33.png';
import rightarrowbanner from '../assets/images/rightarrowbanner.png';
const Careers = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-white px-6 md:px-16">
          <div className="text-lg md:text-xl mb-1">
            <span className="font-semibold">Home</span>
            <span className="mx-1 sm:mx-2">
              <img src={rightarrowbanner} alt="arrow image" className="inline-block w-3 h-3 sm:w-4 sm:h-4" />
            </span>
            <span className="font-bold">Careers</span>
          </div>
          <p className="text-sm md:text-base font-light">
            Sparking Innovation, Illuminating Lives
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-10">
        <JobApplicationForm setShowModal={setShowModal} />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl w-full max-w-xl text-center px-6 py-8 relative shadow-lg">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-black text-lg font-bold"
            >
              ×
            </button>
            <img src={ticImage} alt="tic image" className="w-20 h-20 mx-auto mb-6" />
            <p className="text-lg font-medium mb-6">
              Application submitted successfully!
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-[#3C5A99] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-800 transition"
            >
              Go Back Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Careers;
