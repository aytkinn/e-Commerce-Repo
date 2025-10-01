import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { footerData } from '../data/products';

const Footer = () => {
  return (
    <footer className="w-[320px] border-2 border-gray-100 bg-gray-300 mx-auto">
      <div className="bg-white p-6 pl-20 flex flex-col gap-8">


        <div className="flex flex-col gap-3 border-[#FAFAFA] bg-[#FAFAFA]">
          <div className="text-2xl font-bold text-gray-800 mb-4 mt-8 ml-4">
            {footerData.company.name}
          </div>
          <div className="social-container">
            {footerData.social.map((social, index) => {
              const IconComponent = social.icon === 'Facebook' ? Facebook : 
                                  social.icon === 'Instagram' ? Instagram : Twitter;
              return (
                <a key={index} href={social.href} className="social-icon">
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>

        {footerData.sections.map((section, index) => (
          <div key={index} className={`section-container ${index === 0 ? 'leading-8' : ''}`}>
            <h3 className={`section-title ${index === 0 ? 'mb-8' : ''}`}>{section.title}</h3>
            <ul className="section-list">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href} className="hover:text-gray-800">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="section-container">
          <h3 className="section-title">Get In Touch</h3>
          <div className="flex mb-2 w-64 ml-4">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-1 py-2 border border-gray-300 rounded-l text-sm ml-0"
            />
            <button className="bg-[#23A6F0] text-white w-24 h-12 px-4 py-5 rounded-r text-sm font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-xs font-semibold text-gray-500 ml-4">{footerData.company.description}</p>
        </div>

        <div className=" border-gray-300 text-center h-8">
          <div className="bg-gray-100 px-6 py-4">
            <p className="text-sm text-gray-600">Made With Love By</p>
            <p className="text-sm text-gray-600">Finland All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;