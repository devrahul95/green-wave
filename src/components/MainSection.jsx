import React, { useState } from 'react';
import { FaArrowRight, FaAsterisk, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const MainSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Top Row */}
      <div className="flex flex-wrap justify-between w-full mt-8 md:mt-16">
        <div className="flex-1 text-left">
          <h1 className="text-6xl font-extrabold text-green-600">Greenwave</h1>
        </div>
        <div className="flex-1 text-right">
          <h1 className="text-6xl font-bold text-green-600">Ecology</h1>
        </div>
      </div>

      {/* Tree Image with Side Content */}
      <div className="flex flex-col md:flex-row items-center w-full mt-8">
        <div>
          <p className="text-gray-500 md:flex-1 md:text-left">
            Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis. 
          </p>
          <div className="flex flex-col justify-center mt-8">
            <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="flex bg-green-100 text-green-600 font-semibold px-6 py-3 rounded-full">
              Go Green
              <FaArrowRight className="ml-2" />
            </button>
          </div>

        </div>

        {/* Center Image Container */}
        <div className="flex justify-center mt-4 md:mt-0 md:px-4">
          <img src="./treeImage.svg" alt="Tree" className="h-80 md:h-96 object-contain" />
        </div>

        <p className="mt-4 text-gray-500 md:flex-1 md:text-right">
          Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis.
        </p>
        <div className="fixed bottom-8 right-8">
          <button
            className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full"
            onClick={toggleDrawer}
          >
            <FaAsterisk />
          </button>
          {drawerOpen && (
            <div className="absolute right-0 bottom-16 bg-white shadow-lg p-4 rounded-md flex flex-col space-y-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-pink-600 text-white rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full"
              >
                <FaTwitter />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
