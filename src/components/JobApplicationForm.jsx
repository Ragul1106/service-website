import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdSend, MdCancel } from 'react-icons/md';

const JobApplicationForm = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setShowModal(true); 
      console.log('Form submitted:', formData);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      resume: null,
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-white py-6">
      <h1 className="text-5xl font-bold text-black">WE ARE HIRING !</h1>
      <p className="text-dark-600 mt-2 mb-6 text-xl leading-relaxed">
        We appreciate your interest in joining Zahrix Electromechanical Services.
        <br /> Currently, we do not have any open positions.
      </p>

      <h2 className="text-3xl font-semibold mb-4">CAREER OPPORTUNITY</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-5">
          <div>
            <label className="block text-xl font-medium">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full border rounded py-4 px-4 text-xl"
              placeholder="Enter Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xl font-medium">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full border rounded py-4 px-4 text-xl"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xl font-medium">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              className="w-full border rounded py-4 px-4 text-xl"
              placeholder="Enter Phone No"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <p className="text-[#4A66A0] font-semibold text-lg">
            Thank You For Considering Zahrix As Your Future Workplace!
          </p>
        </div>

        
        <div className="space-y-5">
          <div>
            <label className="block text-xl font-medium">
              Resume<span className="text-red-500">*</span>
            </label>
            <div className="border rounded py-8 px-4 text-center">
              <p className="text-gray-500 mb-2 text-lg">
                Attach your resume in PDF format to ensure compatibility
              </p>
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleChange}
                className="mx-auto"
              />
              <p className="text-xs text-gray-500 mt-1">Maximum Size : 10 MB</p>
              {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xl font-medium">Additional Information</label>
            <input
              type="text"
              name="address"
              className="w-full border rounded py-4 px-4 text-xl"
              placeholder="Enter Address Line 1"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="font-semibold text-xl">Share Job:</span>
            <a href="#" className="text-black hover:text-blue-600 text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-black hover:text-blue-600 text-2xl"><FaXTwitter /></a>
            <a href="#" className="text-black hover:text-blue-600 text-2xl"><FaLinkedinIn /></a>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#4A66A0] text-white px-6 py-3 rounded shadow text-lg"
            >
          
              Submit Application
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 bg-gray-500 text-white px-6 py-3 rounded shadow text-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
