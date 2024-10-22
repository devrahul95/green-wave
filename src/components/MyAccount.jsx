import React from 'react';
import { FaUserCircle, FaShoppingCart, FaTrophy, FaClock, FaQuestionCircle, FaSignOutAlt, FaEdit, FaInfoCircle } from 'react-icons/fa';

const AccountSettings = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 min-h-screen"> {/* Ensure sidebar takes full height */}
        <nav className="space-y-4">
          <a href="#account" className="flex items-center p-3 bg-gray-200 rounded-md text-gray-700 font-semibold">
            <FaUserCircle className="mr-3" /> Account Settings
          </a>
          <a href="#orders" className="flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-200">
            <FaShoppingCart className="mr-3" /> My Orders
          </a>
          <a href="#rewards" className="flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-200">
            <FaTrophy className="mr-3" /> Rewards
          </a>
          <a href="#transactions" className="flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-200">
            <FaClock className="mr-3" /> Transactions
          </a>
          <a href="#help" className="flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-200">
            <FaQuestionCircle className="mr-3" /> Help
          </a>
          <a href="#logout" className="flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-200">
            <FaSignOutAlt className="mr-3" /> Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-white">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Account Settings</h1>
        </header>

        <section>
          <p className="text-gray-600 mb-4">Manage your account’s details.</p>

          {/* Personal Details Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Personal Details</h2>
              <button className="text-green-600 hover:underline"><FaEdit /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block font-semibold mb-1">First Name</label>
                <input type="text" value="David" className="w-full p-3 border rounded-md bg-gray-100" readOnly />
                <FaInfoCircle className="absolute top-3 right-3 text-gray-400" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Last Name</label>
                <input type="text" value="David" className="w-full p-3 border rounded-md bg-gray-100" readOnly />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Address</h2>
              <button className="text-green-600 hover:underline"><FaEdit /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Address Line 1</label>
                <input type="text" value="Lorem ipsum" className="w-full p-3 border rounded-md bg-gray-100" readOnly />
              </div>
              <div>
                <label className="block font-semibold mb-1">Address Line 2</label>
                <input type="text" value="Lorem ipsum" className="w-full p-3 border rounded-md bg-gray-100" readOnly />
              </div>
              <div>
                <label className="block font-semibold mb-1">City</label>
                <input type="text" value="Lorem ipsum" className="w-full p-3 border rounded-md bg-gray-100" readOnly />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccountSettings;
