import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CartDrawer = ({ isOpen, toggleCart, cartItems, updateQuantity }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && (
        <div className="fixed right-0 top-0 h-full bg-white shadow-lg p-6 w-80">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Cart</h2>
            <button onClick={toggleCart}>
              <FaTimes className="text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="mt-4 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <img src={item.imageSrc} alt={item.name} className="w-12 h-12 object-cover rounded border" />
                <div className="flex-1 ml-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-1">
                    {/* Decrease Quantity */}
                    <button 
                      className="px-2 py-1 border" 
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>

                    {/* Display Quantity */}
                    <span className="px-4">{item.quantity}</span>

                    {/* Increase Quantity */}
                    <button 
                      className="px-2 py-1 border" 
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6 border-t pt-4">
            <p className="flex justify-between">
              <span>Bag MRP</span> <span>₹{totalAmount.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Discount on the MRP</span> <span>₹800</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping Charges</span> <span>FREE</span>
            </p>
            <p className="flex justify-between">
              <span>Loyalty Points</span> <span>₹8.29</span>
            </p>
            <p className="flex justify-between">
              <span>Coupon Applied</span> <span>FIRST30</span>
            </p>
            <p className="flex justify-between font-bold text-green-600 mt-2">
              <span>To Pay</span> <span>₹{totalAmount.toFixed(2)}</span>
            </p>
          </div>

          <button className="bg-green-600 text-white w-full py-2 rounded-full mt-4 flex justify-center items-center">
            Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default CartDrawer;
