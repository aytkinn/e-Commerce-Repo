import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductCard = ({ product, viewMode }) => {
  const history = useHistory();

  const handleProductClick = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-sm border border-gray-100 p-4 w-full mb-4 cursor-pointer hover:shadow-md transition-shadow ${
        viewMode === 'list' ? 'max-w-md mx-auto' : ''
      }`}
      onClick={handleProductClick}
    >
      <div className="mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full object-cover rounded-lg ${
            viewMode === 'list' 
              ? 'h-full' 
              : 'h-180 md:h-96'
          }`}
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
