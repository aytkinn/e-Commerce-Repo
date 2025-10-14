import { Heart, Mail, Menu, Phone, Search, ShoppingCart, User, X, ChevronDown, Instagram, Youtube, Facebook, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menuItems, shopDropdownData } from '../data/data';

export default function Header() {
    const [isOpen,setIsOpen]=useState(false);
    const [showShopDropdown, setShowShopDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const location = useLocation();    
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
       <div className={`border text-white hidden md:flex justify-between text-sm font-bold ${
         location.pathname === '/shop' || location.pathname.startsWith('/product/') ? 'bg-[#23856D]' : 'bg-blue-950'
       }`}>
        <div className='flex justify-baseline gap-10  m-4 md:ml-30'>
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
        <div className='flex justify-between flex-row gap-5 mt-4 mb-4 md:mr-30 '>
          <h6>Follow Us : </h6>
          <div className='flex flex-row w-16 gap-1 mr-5'>
            <Instagram className="h-5 w-5" />
            <Youtube className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-16 px-4 md:px-8 w-full">
        <div className="text-xl md:text-2xl font-bold text-gray-900 md:ml-30">
          Bandage
        </div>
        <nav className="hidden md:flex items-center space-x-10 md:mr-30">
          {menuItems.map((item) => (
            <div key={item.id} className="relative">
              {item.hasDropdown ? (
                <div 
                  className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer relative flex items-center gap-1"
                  onMouseEnter={() => setShowShopDropdown(true)}
                  onMouseLeave={() => setShowShopDropdown(false)}
                >
                  <Link to={item.href} className="flex items-center gap-1">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  {selectedCategory && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      ✓
                    </span>
                  )}
                  {showShopDropdown && (
                    <div className="absolute top-full left-0 h-60 w-80 bg-white border border-gray-200 shadow-lg z-50 ">
                      <div className="p-6">
                        <div className="flex gap-4">
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
        
        <div className="icon-container md:mr-20">
          <div className="hidden md:flex items-center gap-4">
            <User className="text-blue-400"/>
            <span className='font-bold text-blue-400'>
              Login / Register
            </span>
            <Search className="text-blue-400" />
            <div className="relative">
              <ShoppingCart className="text-blue-400 " />
              <span className="absolute -right-4 -top-0.5 text-blue-400 text-xl justify-center "> 1 </span>
            </div>
            <div className='relative'>
              <Heart className='text-blue-400' />
              <span className="absolute -right-4 -top-0.5 text-blue-400 text-xl justify-center "> 1 </span>
            </div>
          </div>
          
          <div className={`md:hidden flex items-center gap-4 ${
            location.pathname === '/' ? 'flex' : 'hidden'
          }`}>
            <User className="text-blue-400"/>
            <Search className="text-blue-400" />
            <div className="relative">
              <ShoppingCart className="text-blue-400 " />
              <span className="absolute -right-4 -top-0.5 text-blue-400 text-xl justify-center "> 1 </span>
            </div>
            <div className='relative'>
              <Heart className='text-blue-400' />
              <span className="absolute -right-4 -top-0.5 text-blue-400 text-xl justify-center "> 1 </span>
            </div>
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
          
          {location.pathname !== '/' && (
            <div className="flex items-center justify-center gap-2 py-6">
              <User className="h-6 w-6 text-[#23A6F0]" />
              <span className="text-[#23A6F0] font-medium">Login / Register</span>
            </div>
          )}
          
          {location.pathname !== '/' && (
            <div className="flex flex-col items-center gap-6 py-6">
              <div className="flex items-center gap-2">
                <Search className="h-6 w-6 text-[#23A6F0]" />
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-[#23A6F0]" />
                <span className="text-[#23A6F0] text-sm font-medium">1</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-[#23A6F0]" />
                <span className="text-[#23A6F0] text-sm font-medium">1</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
  );
}
