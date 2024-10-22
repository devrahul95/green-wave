import React, { useState, useEffect } from 'react';

const OTPModal = ({ phoneNumber, isOpen, onClose }) => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [resendTime, setResendTime] = useState(120); // 2-minute countdown

  // Handle OTP input
  const handleOtpChange = (element, index) => {
    const value = element.value.replace(/\D/g, '');
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (element.nextSibling) element.nextSibling.focus();
    }
  };

  // Countdown logic
  useEffect(() => {
    if (resendTime > 0) {
      const timer = setTimeout(() => setResendTime(resendTime - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTime]);

  const formattedPhoneNumber = `${phoneNumber.slice(0, 5)}XXXXX`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-10 rounded-xl shadow-md w-100 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          &times;
        </button>

        {/* Title */}
        <h2 className="text-[16px] font-sans mb-2">Please enter the 6 digit code sent via SMS on</h2>

        {/* Phone number centered with last 5 digits hidden */}
        <p className="text-xl text-center text-gray-700 font-bold mb-4">+91 {formattedPhoneNumber}</p>

        {/* OTP inputs */}
        <div className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              name='-'
              type="text"
              maxLength="1"
              placeholder='-'
              value={digit}
              onChange={(e) => handleOtpChange(e.target, index)}
              className="w-12 h-12 text-2xl text-center bg-slate-100 focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        {/* Resend section */}
        <p className="text-center mb-4">
          Didn't receive a code? <button className="text-blue-500 font-medium" disabled={resendTime > 0}>Resend</button>
        </p>

        {/* Countdown */}
        {resendTime > 0 && (
          <p className="text-center text-gray-500 mb-4">
            {`${Math.floor(resendTime / 60).toString().padStart(2, '0')}:${(resendTime % 60).toString().padStart(2, '0')} sec`}
          </p>
        )}

        {/* Continue button */}
        <button className="bg-green-500 text-white text-lg w-full py-3 rounded-lg">Continue</button>
      </div>
    </div>
  );
};

export default OTPModal;
