import React from 'react';

const ProductCard = ({ imageSrc, name, price, rating, onClick }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 max-w-xs" onClick={onClick}>
      <div className="relative">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">₹{price}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">{'★'.repeat(rating)}</span>
          <span className="text-gray-400">{'★'.repeat(5 - rating)}</span>
        </div>
      </div>
      <button className="mt-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-full flex justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18M3 9h18M9 21h6M7.5 15h9m-9 0h9m-9 0v6m9-6v6"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard