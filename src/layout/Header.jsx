import { Heart, Mail, Menu, Phone, Search, ShoppingCart, User, X, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { menuItems, sliderData, shopDropdownData } from '../data/products';

export default function Header() {
    const [isOpen,setIsOpen]=useState(false);
    const [showShopDropdown, setShowShopDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);    
    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }
    const handleCategorySelect = (category, gender) => {
        setSelectedCategory({ category, gender });
        setShowShopDropdown(false);
        console.log(`Seçilen kategori: ${category} (${gender})`);
    }
  return (
   <div className='w-full max-w-7xl mx-auto'>
    <header className="bg-white shadow-md top-0 z-50">
       <div className='border bg-blue-950 text-white hidden md:flex justify-between text-sm font-bold'>
        <div className='flex justify-baseline gap-10  m-4'>
        <div className='flex items-center gap-2'>
          <Phone className='icon'/>
          <span>(000)-000-0000</span>
        </div>
        <div className='flex items-center gap-2'>
          <Mail className='icon text-white' />
          <span>example@example.com</span>
        </div>
        </div>
        <h6 className=' mt-4 mb-4'>Follow Us  and get a chance to win 80% off</h6>
        <div className='flex justify-between flex-row gap-5 mt-4 mb-4 '>
          <h6>Follow Us : </h6>
          <div className='flex flex-row w-16 gap-1 mr-5'>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-16 px-4 md:px-8 w-full">
        <div className="text-xl md:text-2xl font-bold text-gray-900">
          Bandage
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          {menuItems.map((item) => (
            <div key={item.id} className="relative">
              {item.hasDropdown ? (
                <div 
                  className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer relative flex items-center gap-1"
                  onMouseEnter={() => setShowShopDropdown(true)}
                  onMouseLeave={() => setShowShopDropdown(false)}
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                  {selectedCategory && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      ✓
                    </span>
                  )}
                  {showShopDropdown && (
                    <div className="absolute top-full left-0 h-60 w-80 bg-white border border-gray-200 shadow-lg z-50 ">
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className='ml-8 mt-4'>
                            <h3 className="font-bold text-gray-800 mb-2">Kadın</h3>
                            <ul className="space-y-4 ">
                              {shopDropdownData.women.map((category, index) => (
                                <li key={index}>
                                  <button 
                                    onClick={() => handleCategorySelect(category, 'Kadın')}
                                    className={`text-sm w-full text-left p-1 rounded transition-colors ${
                                      selectedCategory?.category === category && selectedCategory?.gender === 'Kadın'
                                        ? 'bg-blue-100 text-blue-700 font-semibold'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                  >
                                    {category}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className='ml-4 mt-4'>
                            <h3 className="font-bold text-gray-800 mb-2">Erkek</h3>
                            <ul className="space-y-4">
                              {shopDropdownData.men.map((category, index) => (
                                <li key={index}>
                                  <button 
                                    onClick={() => handleCategorySelect(category, 'Erkek')}
                                    className={`text-sm w-full text-left p-1 rounded transition-colors ${
                                      selectedCategory?.category === category && selectedCategory?.gender === 'Erkek'
                                        ? 'bg-blue-100 text-blue-700 font-semibold'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                  >
                                    {category}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={item.href} className="text-gray-700 hover:text-gray-900 font-medium">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        <div className="icon-container">
          <User className="text-blue-400"/>
          <span className='hidden md:flex justify-between font-bold text-blue-400'>
            Login / Register
          </span>
          <Search className="text-blue-400" />
          <div className="relative">
            <ShoppingCart className="text-blue-400 " />
            <span className="hidden md:flex absolute -right-4 -top-0.5 text-blue-400 text-xl justify-center "> 1 </span>
          </div>
          <div className='relative'>
            <Heart className='text-blue-400' />
          <span className="hidden md:flex absolute -right-4 -top-0.5 text-blue-400 text-xl justify-center "> 1 </span>
          </div>
          <button 
            onClick={toggleMenu}
            className="md:hidden h-6 w-6 text-gray-600"
          >
            {isOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
      </div>

    </header>
    
      {isOpen && (
      <div className="md:hidden w-full top-16 text-center leading-[35px] bg-white border-t z-50">
        <div className="menu-container">
          {menuItems.map((item) => (
            <Link key={item.id} to={item.href} className="menu-link">
              {item.name}
            </Link>
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
      className="h-80 md:h-[600px] relative z-10"
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
  </div>
  );
}
