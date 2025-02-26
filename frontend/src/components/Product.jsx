import React from 'react';

function Product({ name, image, description, price }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Image Section */}
      <img className="w-full h-48 object-cover rounded-t-lg" src={image} alt={name} />

      {/* Product Details Section */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300">{name}</h1>
          <h1 className="text-xl font-semibold text-gray-700">${price}</h1>
        </div>

        {/* Description Section */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{description}</p>

        {/* Hoverable "Add to Cart" button */}
        <div className="mt-4">
          <button className="w-full py-2 px-4 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
