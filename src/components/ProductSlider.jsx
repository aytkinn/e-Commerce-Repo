import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { productSliderData } from '../data/data';

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productSliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productSliderData.length) % productSliderData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-[#23856D] relative overflow-hidden">
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-200 transition-colors"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-200 transition-colors"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="flex items-center min-h-[500px] px-16 py-12 text-left">
        <div className="flex-1 text-white pr-8">
          <div className="space-y-6">
            
            <p className="text-left font-medium opacity-90 ml-24">{productSliderData[currentSlide].season}</p>
            <h1 className="text-left md:text-5xl font-bold leading-tight ml-24">
              {productSliderData[currentSlide].title}
            </h1>
            <p className="text-left opacity-90 max-w-md ml-24">
              {productSliderData[currentSlide].description}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold ml-24">{productSliderData[currentSlide].price}</span>
              <button className="bg-[#2DC071] text-white h-10 w-30 font-semibold hover:bg-gray-100 transition-colors rounded-sm ml-8">
                {productSliderData[currentSlide].buttonText}
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img 
              src={productSliderData[currentSlide].image}
              alt={productSliderData[currentSlide].title}
              className="h-96 w-auto object-contain"
            />
          </div>
        </div>
      </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {productSliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-8 h-1 rounded transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
              }`}
            />
          ))}
        </div>
    </div>
  );
};

export default ProductSlider;
