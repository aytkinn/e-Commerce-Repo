import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, ChevronRight, Eye, ChevronLeft } from 'lucide-react';
import { products, productDetailData } from '../data/products';
import CompanyLogos from '../layout/CompanyLogos';
import productDetailsImg from '../assets/img/productdeatils1.jpg';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ürün Bulunamadı</h1>
        </div>
      </div>
    );
  }

  const { colors, productDetails } = productDetailData;

  const productImages = [product.image, product.image];

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6 mt-6 border border-[#FAFAFA] bg-[#FAFAFA] h-20">
        <div className="flex items-center text-sm text-gray-500 ml-20 mt-8">
          <span className='font-bold text-black'>Home</span>
          <ChevronRight className="h-6 w-6 " />
          <span className='font-light text-[#BDBDBD] '>Shop</span>
          <ChevronRight className="h-6 w-6 " />
          <span className="font-light text-[#BDBDBD] ">{product.name}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 border-[#FAFAFA] bg-[#FAFAFA]">
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 overflow-hidden relative group">
            <img
              src={productImages[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePreviousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity "
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity +"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {productImages.map((img, index) => (
              <div
                key={index}
                className={`aspect-square bg-gray-100 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-2 w-1/2 lg:w-1/4 ${currentImageIndex === index ? 'border-[#23A6F0]' : 'border-transparent'
                  }`}
                onClick={() => handleImageChange(index)}
              >
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 ml-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4 mt-4">
              <div className="flex items-center gap-2 ">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#F3CD03] fill-current" />
                ))}
                <Star className='h-4 w-4 text-[#F3CD03] ' />
              </div>
              <span className="text-sm font-bold text-[#737373]"> 10 Reviews </span>
            </div>
            <div className="flex items-center space-x-4 mb-6 mt-4">
              <span className="text-5xl font-bold text-[#252B42]">${product.price}</span>
            </div>
            <div className='flex gap-3 mt-4 mb-4' >
              <span className='font-bold text-[#737373] text-xl'> Availability  :</span>
              <span className='text-[#23A6F0] font-bold text-lg '> {productDetails.stockStatus} </span>
            </div>
            <p className='font-semibold text-ml text-left text-[#858585] leading-6 mb-8 mt-8'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
          <div>
            
            <div className="flex space-x-3 ">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 lg:mb-4 lg:mt-4 rounded-full border-2 ${selectedColor === color.value
                    ? 'border-gray-900'
                    : 'border-gray-300'
                    } ${color.class}`}
                  title={color.name}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <button className='border border-[#23A6F0] bg-[#23A6F0] text-white font-semibold rounded-lg w-36 h-12'>Select Options</button>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button className="p-4 border-10 bg-[#FFFFFF] border-[#FFFFFF] rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <Heart className="h-7 w-7 text-gray-600" />
                  </button>
                  <button className="p-4 border-10  border-[#FFFFFF] bg-[#FFFFFF] rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <ShoppingCart className="h-7 w-7 text-gray-600" />
                  </button>
                  <button className="p-4 border-10 bg-white border-[#FFFFFF] rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <Eye className="h-7 w-7 text-white fill-black" />
                  </button>
                </div>

              </div>
            </div>
          </div>
          </div>
      </div>
      <div>
        <nav className='flex gap-8 text-xl items-center justify-center font-bold text-[#737373] mt-8'>
          <a href="#">Description</a>
          <a href="#">Additional Information</a>
          <a href="#">Reviews <span className='text-[#23856D] '>(0)</span></a>
        </nav>
        <div className='mt-16 border-t-2 border-[#ECECEC] flex flex-col lg:flex-row gap-8'>
           <img  src={productDetailsImg} alt="product Details" className='w-full lg:w-72 h-72 rounded-md mt-8 border-r-12 border-b-12 border-[#C4C4C433]' />
          <div className='flex-1'>
            <h2 className='detail-heading'>the quick fox jumps over</h2>
            <p className='detail-text'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
          </div>
          <div className='flex-1'>
            <h2 className='detail-heading'>the quick fox jumps over</h2>
            <div className='detail-list-container'>
              <div className='detail-list-item'>
                <ChevronRight className='detail-list-icon' /> 
                <span className='detail-list-text'>the quick fox jumps over the lazy dog</span>
              </div>
              <div className='detail-list-item'>
                <ChevronRight className='detail-list-icon' /> 
                <span className='detail-list-text'>the quick fox jumps over the lazy dog</span>
              </div>
              <div className='detail-list-item'>
                <ChevronRight className='detail-list-icon' /> 
                <span className='detail-list-text'>the quick fox jumps over the lazy dog</span>
              </div>
              <div className='detail-list-item'>
                <ChevronRight className='detail-list-icon' /> 
                <span className='detail-list-text'>the quick fox jumps over the lazy dog</span>
              </div>
            </div>
            
            <h2 className='detail-heading'>the quick fox jumps over</h2>
            <div className='space-y-2'>
              <div className='detail-list-item'>
                <ChevronRight className='detail-list-icon' /> 
                <span className='detail-list-text'>the quick fox jumps over the lazy dog</span>
              </div>
              <div className='detail-list-item'>
                <ChevronRight className='detail-list-icon' /> 
                <span className='detail-list-text'>the quick fox jumps over the lazy dog</span>
              </div>
              <div className='detail-list-item'>
                <ChevronRight className='detail-list-icon' /> 
                <span className='detail-list-text'>the quick fox jumps over the lazy dog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-[#FAFAFA] bg-[#FAFAFA] mb-12  ">
         <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-8 text-center">BESTSELLER PRODUCTS</h2>
        <div className="flex flex-wrap gap-2 lg:gap-4 border-t-2 border-[#ECECEC] justify-center">
          {products.slice(0, 8).map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 mt-6 space-y-3 w-1/2 lg:w-1/4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-center text-sm">{relatedProduct.name}</h3>
              <p className="font-semibold text-[#737373] mb-1 text-center text-xs">English Department</p>
              <div className="flex justify-center gap-2">
                <span className="text-sm font-bold text-[#BDBDBD]"> ${relatedProduct.originalPrice} </span>
                <span className="text-sm font-bold text-[#23856D]">${relatedProduct.price}</span>
                
              </div>
            </div>
          ))}
        </div>
        <CompanyLogos />
      </div>

      
    </div>
  );
};

export default ProductDetailPage;
