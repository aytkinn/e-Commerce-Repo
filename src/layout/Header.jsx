import { Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { menuItems, sliderData } from '../data/products';

export default function Header() {
    const [isOpen,setIsOpen]=useState(false);
    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }
  return (
   <div className='w-[320px] mx-auto'>
    <header className="bg-white shadow-md top-0 z-50">
      <div className=" flex justify-between items-center h-14 px-6 w-full">
        <div className="text-lg font-bold text-gray-900">
          Bandage
        </div>
        
        <div className="icon-container">
          <User className="icon"/>
          <Search className="icon" />
          <div className="relative">
            <ShoppingCart className="icon" />
            <span className="absolute -top-2 -right-2  text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"></span>
          </div>
          <button 
            onClick={toggleMenu}
            className="h-6 w-6 text-gray-600"
          >
            {isOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
      </div>

    </header>
    
      {isOpen && (
      <div className="w-[320px] top-14 text-center leading-[35px] bg-white border-t z-50">
        <div className="menu-container">
          {menuItems.map((item) => (
            <a key={item.id} href={item.href} className="menu-link">
              {item.name}
            </a>
          ))}
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
      {sliderData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-full">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-bottom-left"
            />
            <div className="absolute inset-0 bg-opacity-40"></div>
            <div className="overlay-content">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.subtitle}</p>
                <button className="btn-primary h-10 w-24">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}
