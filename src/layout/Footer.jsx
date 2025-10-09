import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { footerData } from '../data/products';

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto border-t border-gray-200 ">
      <div className="bg-white px-4 md:px-8 py-8 md:py-12">

          <div className="flex items-center justify-between border-50 border-gray-100 bg-gray-100 p-8 mt-8 mb-8">
            <div className="text-2xl md:text-3xl font-bold text-gray-800">
              {footerData.company.name}
            </div>
            <div className="flex gap-4">
              {footerData.social.map((social, index) => {
                const IconComponent = social.icon === 'Facebook' ? Facebook : 
                                    social.icon === 'Instagram' ? Instagram : Twitter;
                return (
                  <a key={index} href={social.href} className="text-[#23A6F0] hover:text-blue-800 transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 ml-8">

          {footerData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
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

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 m-4">Get In Touch</h3>
            <div className="flex mb-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-1 py-8 px-9 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-[#23A6F0] text-white h-12 w-64 px-12 py-2 text-lg rounded-sm font-medium hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500">{footerData.company.description}</p>
          </div>
        </div>
      </div>

      <div className="border-25 border-gray-100 bg-gray-100 px-4 md:px-8 py-4 text-left mt-8">
        <p className="text-ml font-bold text-gray-600">Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;