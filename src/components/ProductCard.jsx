import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 w-full mb-4">
      <div className="mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <h3 className="font-bold text-[#252B42] mb-2">
        {product.name}
        
      </h3>
      <p className='text-[#737373] '>English Department</p>
      <div className="mb-2 space-x-2">
        {product.originalPrice && (
          <span className="text-xs text-gray-500 ml-2">
            ${product.originalPrice}
            
          </span>
        )}
         <span className="text-lg font-bold text-[#23856D]">
          ${product.price}
        </span>
      </div>
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-4 h-4 bg-[#23A6F0] rounded-full border-2 border-gray-300"></div>
          <div className="w-4 h-4 bg-[#23856D] rounded-full border-2 border-gray-300"></div>
          <div className="w-4 h-4 bg-[#E77C40] rounded-full border-2 border-gray-300"></div>
          <div className="w-4 h-4 bg-[#252B42] rounded-full border-2 border-gray-300"></div>
        </div>
    </div>
  );
};

export default ProductCard;
