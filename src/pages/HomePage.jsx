import React from 'react'
import { homePageData, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductSlider from '../components/ProductSlider'

export default function HomePage() {
  const { hero,herodata } = homePageData;
  return (
    <div className='w-full max-w-7xl mx-auto text-center mt-8 md:mt-12'>

        <div className='bg-white px-4 md:px-8 py-8 text-center'>
            <h2 className='text-2xl md:text-4xl font-bold text-gray-900 mb-2'>{hero.title}</h2>
            <p className='text-sm md:text-lg text-gray-600 mb-6'>{hero.subtitle}</p>
        </div>

        <div className="px-4 md:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="md:col-span-1">
              <div className="relative h-80 md:h-[500px] w-full rounded-lg overflow-hidden">
                <img 
                  src={hero.images[0].src} 
                  alt={hero.images[0].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-30"></div>
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white text-gray-900 px-6 py-3 text-sm md:text-base font-semibold shadow-lg hover:bg-gray-100 transition-colors rounded">
                    {hero.images[0].buttonText}
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="relative h-80 md:h-[500px] w-full rounded-lg overflow-hidden">
                <img 
                  src={hero.images[1].src} 
                  alt={hero.images[1].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-30"></div>
                <div className="absolute bottom-4 left-4">
                  <button className="bg-white text-gray-900 px-6 py-3 text-sm md:text-base font-semibold shadow-lg hover:bg-gray-100 transition-colors rounded">
                    {hero.images[1].buttonText}
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 space-y-4">
              {herodata.images.map((image) => (
                <div key={image.id} className="relative h-36 md:h-[240px] w-full rounded-lg overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-opacity-30"></div>
                  <div className="absolute bottom-2 left-2">
                    <button className="bg-white text-gray-900 px-3 py-1 text-xs md:text-sm font-semibold hover:bg-gray-100 transition-colors rounded">
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
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
             {products.map((product) => (
               <ProductCard key={product.id} product={product} />
             ))}
           </div>
         </div>

         {/* Product Slider */}
         <ProductSlider />

    </div>
  )
}
