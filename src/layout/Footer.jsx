import React from 'react';
import { useLocation } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { footerData } from '../data/data';

const Footer = () => {
  const location = useLocation();
  
  return (
    <footer className={`w-full max-w-7xl mx-auto ${location.pathname !== '/contact' ? 'border-t border-gray-200' : ''}`}>
      <div className="bg-white px-4 md:px-8 py-8 md:py-12 space-x-8">

          <div className="flex flex-col md:flex-row items-center justify-between p-8 mt-20 mb-8 ml-8 gap-4">
            <div className="text-2xl md:text-3xl font-bold text-[#252B42]">
              {footerData.company.name}
            </div>
            <div className="flex gap-4">
              <a href="https://facebook.com" className='bg-[#23A6F0] md:rounded-full p-1 lg:p-2 flex items-center justify-center h-6 w-6 lg:h-6 lg:w-6'>
                <Facebook className='h-6 w-6 lg:h-[24px] lg:w-[24px] text-white fill-white transform translate-y-0.5 translate-x-0 ' strokeWidth={0.1} />
              </a>
              <a href="https://instagram.com" >
                <Instagram className='h-6 w-6 lg:h-[24px] lg:w-[24px] text-[#23A6F0]' />
              </a>
              <a href="https://twitter.com" >
                <Twitter className='fill-[#23A6F0] h-6 w-6 lg:h-[24px] lg:w-[24px]' strokeWidth={0.1} />
              </a>
            </div>
          </div>

        <div className="flex flex-col md:flex-row lg:flex-row gap-8 ml-8 border-t-2 border-gray-200 mt-20 md:space-x-16 md:space-y-2 leading-8 ">

          {footerData.sections.map((section, index) => (
            <div key={index} className="space-y-4 mt-20">
              <h3 className="text-xl font-semibold text-[#252B42] ml-4 ">{section.title}</h3>
              <ul className="space-y-3 ml-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-[#737373] font-bold hover:text-gray-900 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 mt-16">
            <h3 className="text-lg font-semibold text-gray-800 m-4">Get In Touch</h3>
            <div className="flex mb-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-1 py-8 px-9 h-12 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#23A6F0] rounded-sm"
              />
              <button className="bg-[#23A6F0] text-white h-12 w-36 px-12 py-2 text-lg rounded-sm font-medium hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-[#737373]">{footerData.company.description}</p>
          </div>
        </div>
      </div>

      <div className="border-25 border-gray-100 bg-gray-100 px-4 md:px-8 py-4 text-left mt-8">
        <p className="text-ml font-bold text-[#737373] ml-8">Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;