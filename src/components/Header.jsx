import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { IoEarth } from 'react-icons/io5';
import { useState } from 'react';
import { loginWithPhoneNumber, verifyOtp } from '../utils/auth'; // Assuming OTPModal is saved as a separate component
import OTPModal from './OtpModel';

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignIn, setSignIn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpMode, setOtpMode] = useState(false);

  const handleSignIn = () => {
    if (mobileNumber) {
      // Optionally, you can call the login function here if needed
      setOtpMode(true);
      setModalOpen(true); // Show the modal when OTP mode is activated
    } else {
      alert('Please enter your mobile number.');
    }
  };

  const handleOtpVerification = () => {
    // verifyOtp(otp, () => {
    setSignIn(true);
    setModalOpen(false);
    setOtpMode(false);
    setMobileNumber('');
    setOtp('');
    // }, (error) => {
    //   alert(`Error: ${error.message}`);
    // });
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img src="/Vector.svg" alt="Green Logo" className="w-8 h-8" />
          <span className="text-green-600 font-semibold text-xl">Green</span>
        </div>

        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>

        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:flex space-x-8 text-gray-600`}>
          <Link to="/about" className="hover:text-green-600 focus:text-green-600 focus:outline-none">About Us</Link>
          <Link to="/shop" className="hover:text-green-600 focus:text-green-600 focus:outline-none">Shop</Link>
          <Link to="/cart" className="hover:text-green-600 focus:text-green-600 focus:outline-none">Cart</Link>
          <Link to="/offers" className="hover:text-green-600 focus:text-green-600 focus:outline-none">Offers</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-gray-500" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
              aria-label="Search"
            />
          </div>
          <IoEarth className="text-gray-600" aria-hidden="true" />

          <div className="flex items-center space-x-2">
            <FaUserCircle className="text-gray-600" aria-hidden="true" />
            {isSignIn ? (
              <button
                onClick={() => navigate('/my-account')} // Navigate to My Account
                className="hidden md:inline-block text-green-600"
              >
                My Account
              </button>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                className="hidden md:inline-block text-green-600"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Sign-In Modal when not in OTP mode */}
      {isModalOpen && !isOtpMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-auto relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Close"
            >
              &times; {/* This is the close (cross) button */}
            </button>
            <h2 className="text-2xl font-semibold mb-4">Signin/Login</h2>
            <div className="flex items-center mb-4">
              <input
                id="countryCode"
                type="text"
                className="w-16 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600 mr-1"
                value="+91"
                readOnly // Make this read-only since it's a fixed country code
              />
              <input
                id="mobileNumber"
                type="text"
                className="flex-grow border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter your mobile number"
              />
            </div>
            <label htmlFor="" className="p-2 mb-3">
              An OTP will be sent via SMS to verify the entered phone number.
            </label>
            <button
              onClick={handleSignIn}
              className="w-full bg-green-600 text-white p-2 mb-3 rounded-full"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      {isModalOpen && isOtpMode && (
        <OTPModal
          phoneNumber={mobileNumber}
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
            setOtpMode(false);
            setMobileNumber('');
            setOtp('');
          }}
          onVerifyOtp={handleOtpVerification}
          otp={otp}
          setOtp={setOtp}
        />
      )}
    </>
  );
}
