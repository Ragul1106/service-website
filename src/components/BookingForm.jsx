import React, { useState } from 'react';
import arrowRight from '../assets/images/material-symbols_drag-click-rounded.png';
import lightningIcon from '../assets/images/material-symbols_electric-bolt-outline.png';
import { FaCheckCircle } from 'react-icons/fa';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z ]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = 'First name should contain only letters';
    }

    if (!/^[A-Za-z ]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = 'Last name should contain only letters';
    }

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Phone number should be 10 digits';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'You must accept the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fields = [
    { label: 'First name', name: 'firstName', type: 'text', placeholder: 'e.g. John' },
    { label: 'Last name', name: 'lastName', type: 'text', placeholder: 'e.g. Doe' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'e.g. john@example.com' },
    { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'e.g. 9876543210' },
    { label: 'Pick the date', name: 'date', type: 'date', placeholder: '' },
    { label: 'Choose Your Time', name: 'time', type: 'time', placeholder: '' },
  ];

  return (
    <>
      <div className="w-full px-4 md:px-10 py-12 lg:py-20 text-[#000]">
        <h1 className="text-4xl font-bold text-center">Get In Touch With Us</h1>
        <p className="text-xl text-center text-gray-600 mt-1 mb-8">
          For More Information About Our <span className="font-medium">Services.</span>
        </p>

        <h2 className="text-4xl md:text-3xl font-bold text-left mb-2 flex items-center gap-2">
          Booking Your Service Today!
          <img src={lightningIcon} alt="lightning icon" className="w-6 h-6 inline-block" />
        </h2>

        <p className="text-left text-gray-500 mb-10 max-w-2xl">
          Whether you’re planning a new project or need emergency support,
          we’re available to provide fast and reliable assistance.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-16 text-left w-full px-4 md:px-10"
        >
          {fields.map((field, idx) => (
            <div key={idx} className="w-full">
              <label className="block text-[#3C5A99] text-xl md:text-2xl font-semibold mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className={`w-full border ${
                  errors[field.name] ? 'border-red-500' : 'border-[#3C5A99]'
                } rounded-md px-6 py-6 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                required
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}

          <div className="flex items-start gap-3 mt-4 md:col-span-2">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="w-5 h-5 mt-1 accent-[#3C5A99]"
            />
            <label className="text-sm md:text-base font-medium leading-snug">
              I have read and accepted terms and Privacy
            </label>
          </div>
          {errors.acceptedTerms && (
            <p className="text-red-500 text-sm md:col-span-2 mt-1">{errors.acceptedTerms}</p>
          )}

          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-[#3C5A99] text-white flex items-center justify-center gap-2 mx-auto px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition"
            >
              <img src={arrowRight} alt="arrow" className="w-5 h-5" />
              Submit
            </button>
          </div>
        </form>
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

            <FaCheckCircle className="text-green-700 text-5xl mx-auto mb-4" />
            <p className="text-lg font-medium mb-6">
              "We've received your inquiry. Our team will contact you soon."
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

export default BookingForm;
