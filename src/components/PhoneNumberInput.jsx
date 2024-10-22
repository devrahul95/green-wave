import React, { useState } from 'react';

const PhoneNumberModal = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    // Allow only digits and a maximum of 10 digits for phone number
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Phone number submitted:', phoneNumber);
  };

  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">Signin/Login</h1>

        {/* Phone Number Input */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <span className="text-gray-500 font-medium mr-3">+91</span>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={handleChange}
              className="bg-transparent w-full text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <p className="text-sm text-gray-500 text-center">
            An OTP will be sent via SMS to verify the entered phone number.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneNumberModal;
