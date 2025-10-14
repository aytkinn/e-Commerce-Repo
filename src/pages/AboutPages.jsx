import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Redo, Twitter, Menu, X, Search, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import about from "../assets/img/about.png";
import video from "../assets/img/videocart.jpg";
import team1 from '../assets/img/team1.jpg';
import { companyLogos } from '../data/products';
import team2 from '../assets/img/team2.jpg';
import team3 from '../assets/img/team3.jpg';
import aboutimg from '../assets/img/aboutimg.jpg';
export default function About() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col items-center mb-16">
            <section className="w-full max-w-7xl mx-auto px-4 lg:px-8">
                <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-4'>
                    <div className="flex items-center justify-center md:justify-between w-full md:w-auto">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 ">Bandage</h2>

                        <div className="md:hidden flex items-center gap-4">
                            <Search className="h-6 w-6 text-[#737373]" />
                            <ShoppingCart className="h-6 w-6 text-[#737373]" />
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-[#737373] hover:text-gray-900"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <nav className='text-[#737373] hover:text-gray-900 font-medium cursor-pointer relative flex items-center gap-8 md:gap-12 '>
                            <Link to="/">Home</Link>
                            <a href="">Product</a>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>
                    </div>

                    <div className='hidden md:flex gap-4 md:gap-8'>
                        <button className='text-[#23A6F0] font-semibold'>Login</button>
                        <button className='border border-[#23A6F0] bg-[#23A6F0] text-white text-ml font-semibold rounded-sm w-48 h-12'>Become a member →</button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden w-full bg-[#F6F6F6] ">
                        <nav className="flex flex-col py-4 text-center mt-8 space-y-8 ">
                            <Link to="/" className="text-[#737373] hover:text-gray-900 font-semibold px-4 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <a href="" className="text-[#737373] hover:text-gray-900 font-medium px-4 py-2">Product</a>
                            <Link to="/pricing" className="text-[#737373] hover:text-gray-900 font-medium px-4 py-2" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                            <Link to="/contact" className="text-[#737373] hover:text-gray-900 font-medium px-4 py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </nav>
                    </div>
                )}
                <div className='flex flex-col lg:flex-row md:justify-center lg:items-center gap-8 mt-12 lg:mt-[120px]'>
                    <div className='space-y-6 lg:space-y-10 text-center lg:text-left order-1 lg:order-1'>
                        <h3 className='text-ml font-bold text-[#252B42] '>ABOUT COMPANY</h3>
                        <h1 className='text-4xl lg:text-5xl text-[#252B42] font-bold '>ABOUT US</h1>
                        <p className='text-lg lg:text-2xl text-[#737373] '>We know how large objects will act,</p>
                        <p className='text-lg lg:text-2xl text-[#737373] -mt-2 lg:-mt-8 '>but things on a small scale</p>
                        <button className='border border-[#23A6F0] bg-[#23A6F0] text-white text-ml font-semibold rounded-sm w-48 h-12'>Get Quote Now</button>
                    </div>

                    <div className='relative order-2 lg:order-2 '>
                        <div className='absolute -z-10 h-72 w-72 bg-[#FFE9EA] rounded-full top-1/2 left-1/2 transform -translate-x-40 -translate-y-30'></div>
                        <img src={about} alt="Contact image" className='w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto mt-20 relative z-10' />
                        <div className='absolute h-16 w-16 bg-[#FFE9EA] rounded-full top-0 left-0 transform translate-x-20 translate-y-20'></div>
                        <div className='absolute h-4 w-4 bg-[#FFE9EA] rounded-full top-0 right-0 transform -translate-x-32 translate-y-63'></div>
                        <div className='absolute h-2 w-2 bg-[#977DF4] rounded-full top-0 left-0 transform translate-x-25 translate-y-80'></div>
                        <div className='absolute h-2 w-2 bg-[#977DF4] rounded-full top-0 right-0 transform -translate-x-32 translate-y-40'></div>
                    </div>
                </div>
            </section>
            <section className='mt-16 lg:mt-[120px] px-4'>
                <div className='flex flex-col lg:flex-row justify-between gap-12'>
                    <div className='text-center lg:text-left'>
                        <h2 className='text-sm font-semibold text-[#E74040] mb-8 '>Problems trying</h2>
                        <h1 className='text-xl font-bold text-[#252B42]'>Met minim Mollie non desert  met sent.</h1>
                        <h1 className='text-xl font-bold text-[#252B42]'> Alamo est sit cliquey dolor do</h1>
                        <h1 className=' text-xl font-bold text-[#252B42]'>met sent.</h1>
                    </div>
                    <div className='space-y-1 mt-12 text-center lg:text-left '>
                        <p className='text-sm lg:text-sm text-[#737373] '>Problems trying to resolve the conflict between the two major realms of </p>
                        <p className='text-sm lg:text-sm text-[#737373] '>Classical physics: Newtonian mechanics </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mt-8 lg:mt-[120px]'>
                    <div className='space-y-4 text-center w-full max-w-sm'>
                        <h5 className='text-lg lg:text-4xl font-bold text-[#252B42] mt-4 lg:mt-8'>15K</h5>
                        <p className='text-lg lg:text-sm font-bold text-[#737373]'>Happy Customers</p>
                    </div>
                    <div className='space-y-4 text-center w-full max-w-sm'>
                        <h5 className='text-lg lg:text-4xl font-bold text-[#252B42] mt-4 lg:mt-8'>150K</h5>
                        <p className='text-lg lg:text-sm font-bold text-[#737373]'>Monthly Visitors</p>
                    </div>
                    <div className='space-y-4 text-center w-full max-w-sm'>
                        <h5 className='text-lg lg:text-4xl font-bold text-[#252B42] mt-4 lg:mt-8'>15</h5>
                        <p className='text-lg lg:text-sm font-bold text-[#737373]'>Countries  Worldwide</p>
                    </div>
                    <div className='space-y-4 text-center w-full max-w-sm'>
                        <h5 className='text-lg lg:text-4xl font-bold text-[#252B42] mt-4 lg:mt-8'>100+</h5>
                        <p className='text-lg lg:text-sm font-bold text-[#737373]'>Top Partners</p>
                    </div>
                   
                </div>
            </section>

            <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-4 mt-16 lg:mt-20">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <div 
                            className="w-full h-64 lg:h-96 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${video})` }}
                        >
                        </div>
                        <div className="absolute inset-0  bg-opacity-20 flex items-center justify-center">
                            <div className="bg-[#23A6F0] rounded-full p-4 shadow-lg">
                                <svg className="w-8 h-8 lg:w-16 lg:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M8 5v10l8-5-8-5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-40'>
                <div className='text-center leading-4'>
                        <h1 className='text-3xl font-bold text-[#252B42]'>Meet Our Team</h1>
                        <p className='text-xs md:text-base font-semibold text-[#737373] mt-4'> Problems trying to resolve the conflict between</p>
                        <p className=' text-xs md:text-base font-semibold text-[#737373]'>the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='flex flex-col sm:flex-row justify-between mt-20 gap-4'>
                    <div className='text-center space-y-4'>
                    <img src={team1} alt="" className='w-48 h-36 mx-auto'/>
                    <h2 className='mt-8 font-bold text-sm text-[#252B42]'>Username</h2>
                    <p className='text-xs font-semibold text-[#737373]'>Profession</p>
                    <div className='flex justify-center gap-4'>
                       <div className='bg-[#335BF5] md:bg-[#23A6F0] md:rounded-full p-1 lg:p-2 flex items-center justify-center h-6 w-6 lg:h-6 lg:w-6'>
                            <Facebook className='h-6 w-6 lg:h-[24px] lg:w-[24px] text-white fill-white transform translate-y-0.5 translate-x-0 ' strokeWidth={0.1}/>
                        </div>
                        <Instagram className='text-[#E51F5A] h-6 w-6 lg:h-[24px] lg:w-[24px] md:text-[#23A6F0]'/>
                         <Twitter className='fill-[#21A6DF] md:fill-[#23A6F0] h-6 w-6 lg:h-[24px] lg:w-[24px]' strokeWidth={0.1}/>
                    </div>
                </div>
                 <div className='text-center space-y-4'>
                    <img src={team2} alt="" className='w-48 h-36 mx-auto'/>
                   <h2 className='mt-8 font-bold text-sm text-[#252B42]'>Username</h2>
                    <p className='text-xs font-semibold text-[#737373]'>Profession</p>
                    <div className='flex justify-center gap-4'>
                       <div className='bg-[#335BF5] md:bg-[#23A6F0] md:rounded-full p-1 lg:p-2 flex items-center justify-center h-6 w-6 lg:h-6 lg:w-6'>
                            <Facebook className='h-6 w-6 lg:h-[24px] lg:w-[24px] text-white fill-white transform translate-y-0.5 translate-x-0 ' strokeWidth={0.1}/>
                        </div>
                        <Instagram className='text-[#E51F5A] h-6 w-6 lg:h-[24px] lg:w-[24px] md:text-[#23A6F0]'/>
                         <Twitter className='fill-[#21A6DF] md:fill-[#23A6F0] h-6 w-6 lg:h-[24px] lg:w-[24px]' strokeWidth={0.1}/>
                    </div>
                </div>
                 <div className='text-center space-y-4'>
                    <img src={team3} alt="" className='w-48 h-36 mx-auto'/>
                    <h2 className='mt-8 font-bold text-sm text-[#252B42]'>Username</h2>
                    <p className='text-xs font-semibold text-[#737373]'>Profession</p>
                    <div className='flex justify-center gap-4'>
                       <div className='bg-[#335BF5] md:bg-[#23A6F0] md:rounded-full p-1 lg:p-2 flex items-center justify-center h-6 w-6 lg:h-6 lg:w-6'>
                            <Facebook className='h-6 w-6 lg:h-[24px] lg:w-[24px] text-white fill-white transform translate-y-0.5 translate-x-0 ' strokeWidth={0.1}/>
                        </div>
                        <Instagram className='text-[#E51F5A] h-6 w-6 lg:h-[24px] lg:w-[24px] md:text-[#23A6F0]'/>
                         <Twitter className='fill-[#21A6DF] md:fill-[#23A6F0] h-6 w-6 lg:h-[24px] lg:w-[24px]' strokeWidth={0.1}/>
                    </div>
                </div>
                </div>
            </div>       
        
        <div className="bg-[#FAFAFA] py-16 lg:h-[400px] w-full max-w-7xl mx-auto mt-30">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className='text-center mb-12 mt-20'>
                        <h1 className='text-3xl md:text-5xl font-bold text-[#252B42]'>Big Companies Are Here</h1>
                        <p className='text-xs md:text-base font-semibold text-[#737373] mt-4'> Problems trying to resolve the conflict between</p>
                        <p className=' text-xs md:text-base font-semibold text-[#737373]'>the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-12">
                    {companyLogos.map((company) => (
                        <a
                            key={company.id}
                            href={company.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                        >
                            <img 
                                src={company.logo} 
                                alt={company.name}
                                className="h-12 lg:h-12 w-auto object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <div className='border border-[#2A7CC7] bg-[#2A7CC7] py-20 h-[400px] lg:py-16 lg:h-[600px] w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20 mt-16'>
            <div className='text-center lg:text-left space-y-6 md:ml-8'>
                <h3  className='text-sm lg:text-base font-bold text-white '> WORK WITH US</h3>
                <h1 className='text-2xl lg:text-5xl font-bold text-white '>Now Let's grow Yours</h1>
                <p className='text-sm lg:text-base font-semibold text-white md:mt-4'>The gradual accumulation of information about atomic and</p>
                <p className='text-sm lg:text-base font-semibold text-white md:-mt-6'> small-scale behavior during the first quarter of the 20th</p>
                <button className='border border-white text-white text-sm lg:text-base font-semibold rounded-sm w-40 lg:w-48 h-10 lg:h-12'>Button</button>
            </div>
            <img src={aboutimg} alt="" className='hidden lg:block w-32 h-32 lg:w-[500px] lg:h-[600px] object-cover' />
        </div>
        </div>
    )
}
