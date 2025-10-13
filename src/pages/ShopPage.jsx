import React, { useState } from 'react';
import { ListChecks, ChevronRight, LayoutGrid } from 'lucide-react';
import { products, shopPageData } from '../data/products';
import ProductCard from '../components/ProductCard';
import CompanyLogos from '../layout/CompanyLogos';

const ShopPage = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const { sortOptions,shopHeader } = shopPageData;
  
  const itemsPerPage = 9;

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6">
      <div className="mb-8 mt-8 border-30 border-[#FAFAFA] bg-[#FAFAFA] ">
        <div className=' flex-wrap text-center md:flex md:justify-between mb-10 md:ml-30 md:mr-30 '>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 ">Shop</h1>
        <p className="text-gray-600 text-xl flex  gap-2">
          <span className='font-bold'>Home</span>
          <ChevronRight className="h-6 w-6 " />
          <span>Shop</span>
        </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-10 px-2 md:px-0">
          {shopHeader.map((item) => (
            <a
              key={item.id}
              href="#"
              className="relative group overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-32 w-32 md:h-64 md:w-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-48 md:w-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0  bg-opacity-20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{item.name}</h3>
                  <p className="text-xs md:text-sm opacity-90">{item.comments} Items</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
      </div>
      
        

      <div className="w-full">
          <div className="bg-white p-4 mb-6">
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} results
              </span>
              </div>

              <div className="flex-wrap items-end md:items-center gap-2">
                <span className="text-sm text-gray-600">Views:</span>
                <div className="flex  rounded-lg gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-8 border border-gray-300 w-8 h-8 rounded-sm flex items-center justify-center ${viewMode === 'grid' ? 'bg-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <LayoutGrid className="h-4 w-4 text-black fill-black" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 border border-gray-300 w-8 h-8 rounded-sm flex items-center justify-center ${viewMode === 'list' ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`}
                  >
                    <ListChecks  className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>              
            
             <div className='flex gap-4'>
               <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            <button
              className="bg-[#23A6F0] text-white w-24 h-12  px-4 py-2 rounded text-sm font-medium hover:bg-[#0989d4] transition-colors"
            >
              Filter
            </button>
             </div>
          </div>
        </div>

        <div className={`flex gap-2 md:gap-6 text-center leading-8 ${
          viewMode === 'grid' 
            ? 'flex-wrap justify-center' 
            : 'flex-col'
        }`}>
          {currentProducts.map((product, index) => (
            <div key={product.id} className={`${viewMode === 'grid' && index >= 4 ? 'hidden md:block' : ''} ${viewMode === 'grid' ? 'w-1/2 md:w-1/4' : 'w-full'}`}>
              <ProductCard product={product} viewMode={viewMode} />
            </div>
          ))}
        </div>

        {currentProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center mt-6 md:mt-8 gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 md:px-3 py-2 h-10 md:h-12 w-16 md:w-24 border border-gray-300 rounded text-xs md:text-sm font-medium text-[#23A6F0] disabled:text-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-2 md:px-3 py-2 h-8 md:h-12 w-8 md:w-12 border rounded text-xs md:text-sm font-medium ${
                    currentPage === page
                      ? 'bg-[#23A6F0] text-white border-[#23A6F0]'
                      : 'border-gray-300 text-[#23A6F0] hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 md:px-3 py-2 h-10 md:h-12 w-16 md:w-24 border border-gray-300 rounded text-xs md:text-sm font-medium text-[#23A6F0] disabled:text-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
       </div>
       <CompanyLogos />
    </div>
  );
};

export default ShopPage;