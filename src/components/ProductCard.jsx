import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-full sm:w-80 bg-white shadow-lg rounded-xl p-4 flex flex-col items-center hover:shadow-xl transition">
      {/* Product Image */}
      <div className="h-40 w-full flex items-center justify-center mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Title */}
      <h3
        className="text-gray-800 font-semibold text-sm mb-2 w-full truncate"
        title={product.title}
      >
        {product.title}
      </h3>

      {/* Product Price */}
      <p className="text-lg font-bold text-indigo-600 mb-3">${product.price}</p>

      {/* Quantity Control */}
      <div className="flex items-center space-x-3 mb-3">
        <button
          onClick={decrease}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-300"
        >
          −
        </button>
        <span className="text-base font-medium">{quantity}</span>
        <button
          onClick={increase}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product, quantity)}
        className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-2 rounded-lg hover:from-indigo-600 hover:to-blue-700 transition shadow-md font-medium"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
