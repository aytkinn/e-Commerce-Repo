import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { homePageData, products, sliderData } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductSlider from '../components/ProductSlider'
import NeuralUniverse from '../components/NeuralUniverse'
import FeaturedPosts from '../components/FeaturedPosts'

export default function HomePage() {
  const { hero,herodata } = homePageData;
  return (
    <div className='w-full max-w-7xl mx-auto text-center mt-8 md:mt-12'>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="h-80 md:h-[600px] relative z-10 mb-8"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-[500px] md:h-[700px] object-cover object-center"
              />
              <div className="absolute inset-0  bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-between text-white">
                <div className="text-left md:ml-[200px]">
                  <h2> {slide.h2} </h2>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-6 text-white">{slide.subtitle}</p>
                  <button className="btn-primary h-12 w-40 text-lg px-6 py-5">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        <div className='bg-white px-4 md:px-8 py-8 text-center'>
            <h2 className='text-2xl md:text-4xl font-bold text-gray-900 mb-2'>{hero.title}</h2>
            <p className='text-sm md:text-lg text-gray-600 mb-6'>{hero.subtitle}</p>
        </div>

        <div className="px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="md:col-span-1">
              <div className="relative h-80 md:h-[700px] w-[650px] rounded-lg overflow-hidden">
                <img 
                  src={hero.images[0].src} 
                  alt={hero.images[0].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-30"></div>
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white text-gray-900 h-12 w-24 px-6 py-3 text-sm md:text-base font-semibold shadow-lg hover:bg-gray-100 transition-colors ">
                    {hero.images[0].buttonText}
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="relative h-80 md:h-[700px] w-[400px] rounded-lg overflow-hidden">
                <img 
                  src={hero.images[1].src} 
                  alt={hero.images[1].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-30"></div>
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white text-gray-900 h-12 w-24 px-6 py-3 text-sm md:text-base font-semibold shadow-lg hover:bg-gray-100 transition-colors ">
                    {hero.images[1].buttonText}
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 space-y-4">
              {herodata.images.map((image) => (
                <div key={image.id} className="relative h-36 md:h-[340px] w-full rounded-lg overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-30"></div>
                  <div className="absolute bottom-2 left-2">
                    <button className="bg-white text-gray-900 h-12 w-24 px-3 py-1 text-xs md:text-sm font-semibold hover:bg-gray-100 transition-colors ">
                      {image.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
         <div className="px-4 md:px-8 py-6 bg-gray-50 mt-16">
           <div className="text-center mb-8">
             <h3 className="text-sm md:text-base font-semibold text-gray-500 mb-2">Featured Products</h3>
             <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">BESTSELLER PRODUCTS</h3>
             <p className='text-sm md:text-lg text-gray-600'>Problems trying to resolve the conflict between</p>
           </div>
           <div className="flex flex-wrap gap-4 md:gap-6">
             {products.map((product) => (
               <div key={product.id} className="md:w-1/5 md:ml-9">
                 <ProductCard product={product} />
               </div>
             ))}
           </div>
         </div>

     
         <ProductSlider />
         <NeuralUniverse />
         <FeaturedPosts />

    </div>
  )
}
