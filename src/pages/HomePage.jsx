import React from 'react'
import { homePageData } from '../data/products'

export default function HomePage() {
  const { hero,herodata } = homePageData;

  return (
    <div className='w-[320px] mx-auto text-center mt-12 border border-[#FAFAFA] bg-[#FAFAFA] '>
        <div className='border-[#FFFFFF] bg-[#FFFFFF]'>
            <h2 className='font-bold mb-4'>{hero.title}</h2>
            <p className='text-xs text-gray-500 flex-wrap text-center mb-12'>{hero.subtitle}</p>
        </div>

        {hero.images.map((image) => (
          <div key={image.id} className="relative h-72 md:h-[600px] w-full mb-4">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40"></div>
            <div className="absolute bottom-4 left-4">
              <button className="bg-white text-gray-900 h-8 w-24 px-6 py-3 font-semibold flex items-center justify-center">
                {image.buttonText}
              </button>
            </div>
          </div>
        ))}
        
         <div className="mb-10">
           <div className="flex flex-wrap gap-3">
             {herodata.images.map((image) => (
               <div key={image.id} className="relative h-60 w-full">
                 <img 
                   src={image.src} 
                   alt={image.alt} 
                   className="w-full h-full object-cover "
                 />
                 
                  <div className="absolute bottom-4 left-8">
                    <button className="bg-white text-gray-900 px-4 text-sm font-semibold h-[40px] w-[120px]">
                      {image.buttonText}
                    </button>
                  </div>
               </div>
             ))}
           </div>
         </div>

    </div>
  )
}
