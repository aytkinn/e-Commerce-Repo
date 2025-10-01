import React from 'react';

const ProductCard = ({ product }) => {
  const { id, name, price, originalPrice, discount, image, rating } = product;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 w-full">
      {/* Ürün Görseli */}
      <div className="relative mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover rounded-lg"
        />
        {/* İndirim Etiketi */}
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
        {/* Favori İkonu */}
        <div className="absolute top-2 right-2">
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Ürün Bilgileri */}
      <div className="space-y-2">
        {/* Ürün Adı */}
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        {rating && (
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
                    i < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">({rating})</span>
          </div>
        )}

        {/* Fiyat */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Renk Seçenekleri */}
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-300"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-gray-300"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
