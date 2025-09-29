import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="w-1/6 border-2 border-gray-100 bg-gray-300 mx-auto">
      <div className="bg-white p-6 pl-20 flex flex-col gap-8">


        <div className="flex flex-col gap-3 border-[#FAFAFA] bg-[#FAFAFA]">
          <div className="text-2xl font-bold text-gray-800 mb-4  mt-8 ml-4">
            Bandage
          </div>
          <div className="flex justify-start gap-x-2 mb-8 ml-4 ">
            <a href="#" className="text-black ">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-black ">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-black ">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          
        </div>
        
        <div className="text-left self-start w-full leading-8">
          <h3 className="font-bold text-gray-800 mb-8 ml-4">Company Info</h3>
          <ul className="flex flex-col space-y-2 text-sm text-gray-600 ml-4">
            <li><a href="#" className="hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="hover:text-gray-800">Carrier</a></li>
            <li><a href="#" className="hover:text-gray-800">We are hiring</a></li>
            <li><a href="#" className="hover:text-gray-800">Blog</a></li>
          </ul>
        </div>

        <div className="text-left self-start w-full">
          <h3 className="font-bold text-gray-800 mb-3 ml-4">Legal</h3>
          <ul className="flex flex-col space-y-2 text-sm text-gray-600 ml-4">
            <li><a href="#" className="hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="hover:text-gray-800">Carrier</a></li>
            <li><a href="#" className="hover:text-gray-800">We are hiring</a></li>
            <li><a href="#" className="hover:text-gray-800">Blog</a></li>
          </ul>
        </div>

        <div className="text-left self-start w-full">
          <h3 className="font-bold text-gray-800 mb-3 ml-4">Features</h3>
          <ul className="flex flex-col space-y-2 text-sm text-gray-600 ml-4">
            <li><a href="#" className="hover:text-gray-800">Business Marketing</a></li>
            <li><a href="#" className="hover:text-gray-800">User Analytic</a></li>
            <li><a href="#" className="hover:text-gray-800">Live Chat</a></li>
            <li><a href="#" className="hover:text-gray-800">Unlimited Support</a></li>
          </ul>
        </div>


        <div className="text-left self-start w-full">
          <h3 className="font-bold text-gray-800 mb-3 ml-4">Resources</h3>
          <ul className="flex flex-col space-y-2 text-sm text-gray-600 ml-4">
            <li><a href="#" className="hover:text-gray-800">IOS & Android</a></li>
            <li><a href="#" className="hover:text-gray-800">Watch a Demo</a></li>
            <li><a href="#" className="hover:text-gray-800">Customers</a></li>
            <li><a href="#" className="hover:text-gray-800">API</a></li>
          </ul>
        </div>

        <div className="text-left self-start w-full">
          <h3 className="font-bold text-gray-800 mb-3 ml-4">Get In Touch</h3>
          <div className="flex mb-2 w-64">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l text-sm ml-4"
            />
            <button className="bg-[#23A6F0] text-white w-20 h-12 px-4 py-5 rounded-r text-sm font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 ml-4">Lore imp sum dolor Amit</p>
        </div>

        <div className=" border-gray-300 text-center w-57 ml-2.5">
          <div className="bg-gray-100 -mx-6 -mb-6 px-6 py-4">
            <p className="text-sm text-gray-600">Made With Love By</p>
            <p className="text-sm text-gray-600">Finland All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;