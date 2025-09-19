import React, { useState } from "react";

const Cart = ({ cart, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="absolute top-6 right-6 z-50">
      {/* Cart Button */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="relative bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-5 py-2 rounded-xl 
                   font-medium shadow-lg hover:from-indigo-600 hover:to-blue-700 active:scale-95 
                   transition-all duration-200"
      >
        🛒 Cart
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold text-white 
                           rounded-full w-6 h-6 flex items-center justify-center shadow-md">
            {totalItems}
          </span>
        )}
      </button>

      {/* Mini Cart Popup */}
      {showCart && (
        <div className="absolute right-0 mt-3 w-80 bg-white shadow-2xl rounded-2xl p-5 border border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Your Cart</h3>
          {cart.length > 0 ? (
            <ul className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-50 rounded-lg p-3 shadow-sm"
                >
                  <span className="text-sm font-medium text-gray-700 truncate w-32">
                    {item.title}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    x {item.quantity}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-xs font-bold transition-colors"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 text-center">Your cart is empty 🛒</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
