import { Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Header() {
    const [isOpen,setIsOpen]=useState(false);
    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }
  return (
   <div className='w-1/6 mx-auto'>
    <header className="bg-white shadow-md top-0 z-50">
      <div className=" flex justify-between items-center h-14 px-6 w-full">
        <div className="text-lg font-bold text-gray-900">
          Bandage
        </div>
        
        <div className="flex items-center space-x-4 gap-5  ">
          <User className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer"/>
          <Search className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            <span className="absolute -top-2 -right-2  text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"></span>
          </div>
          <button 
            onClick={toggleMenu}
            className="h-6 w-6 text-gray-600"
          >
            {isOpen ? <X className="h-6 w-6 hover:text-gray-900 cursor-pointer" /> : <Menu className="h-6 w-6 hover:text-gray-900 cursor-pointer" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute w-1/6 top-14 text-center leading-[35px] bg-white border-t z-50">
          <div className="px-6 py-4 space-y-4 text-gray-500 ">
            <a href="#" className="block hover:text-gray-900">
              Ana Sayfa
            </a>
            <a href="#" className="block hover:text-gray-900">
              Kategoriler
            </a>
            <a href="#" className="block hover:text-gray-900">
              Ürünler
            </a>
            <a href="#" className="block hover:text-gray-900">
              Hakkımızda
            </a>
            <a href="#" className="block hover:text-gray-900">
              İletişim
            </a>
          </div>
        </div>
      )}
      
    </header>
    
    {isOpen && (
      <div className="w-1/6 bg-white z-40">
        <div className="px-6 py-4 space-y-4 text-gray-500">
          <a href="#" className="block hover:text-gray-900">
            Ana Sayfa
          </a>
          <a href="#" className="block hover:text-gray-900">
            Kategoriler
          </a>
          <a href="#" className="block hover:text-gray-900">
            Ürünler
          </a>
          <a href="#" className="block hover:text-gray-900">
            Hakkımızda
          </a>
          <a href="#" className="block hover:text-gray-900">
            İletişim
          </a>
        </div>
      </div>
    )}
    
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="h-72 md:h-[600px] relative z-10"
    >
      <SwiperSlide>
        <div className="relative h-full">
          <img 
            src="/src/assets/img/product-slide-1.jpg" 
            alt="Slide 1"
            className="w-full h-full object-bottom-left"
          />
          <div className="absolute inset-0  bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Yeni Sezon</h2>
              <p className="text-lg mb-6">En Trend Ürünler</p>
              <button className="bg-green-300 text-gray-900 h-10 w-24 px-6 py-3 rounded-sm font-medium">
                Keşfet
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="relative h-full">
          <img 
            src="/src/assets/img/product-slide-1.jpg" 
            alt="Slide 2"
            className="w-full h-full object-bottom-left"
          />
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Büyük İndirim</h2>
              <p className="text-lg mb-6">%50'ye Varan İndirimler</p>
              <button className="bg-green-300 text-gray-900 h-12 w-36 px-6 py-3 rounded-xs font-medium">
                Alışverişe Başla
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  );
}
