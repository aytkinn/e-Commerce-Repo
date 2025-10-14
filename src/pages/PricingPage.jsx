import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Redo, Twitter, Menu, X, Search, ShoppingCart, ChevronRight, CircleCheck } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { companyLogos, pricingFAQs } from '../data/data';

export default function PiricingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isYearly, setIsYearly] = useState(false);
    const monthlyPrices = { free: 0, standard: 9.99, premium: 19.99 };
    const formatPrice = (value) => value.toFixed(2);
    const getPrice = (base) => {
        if (base === 0) return '0';
        const price = isYearly ? base * 12 * 0.75 : base;
        return formatPrice(price);
    };

    return (
        <div className="flex flex-col items-center mb-16">
            <section className="w-full max-w-7xl mx-auto px-4">
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
                            <Link to="/pricing" className="text-[#737373] hover:text-gray-900 font-medium px-4 py-2">Pricing</Link>
                            <Link to="/contact" className="text-[#737373] hover:text-gray-900 font-medium px-4 py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </nav>
                    </div>
                )}
                <div className='flex flex-col justify-center items-center gap-4 mt-12 md:mt-[120px]'>
                    <div className='space-y-4 md:space-y-6 text-center'>
                        <h3 className='text-xl font-bold text-[#252B42] '>PRICING</h3>
                        <h1 className='text-4xl md:text-7xl text-[#252B42] '>Simple Pricing</h1>
                        <p className="text-gray-600 text-xl flex items-center justify-center gap-2">
                            <span className='font-bold'>Home</span>
                            <ChevronRight className="h-6 w-6 " />
                            <span>Pricing</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className='mt-16 md:mt-[120px] px-4 bg-[#FAFAFA] '>
                <div className='text-center space-y-2'>
                    <h2 className='text-lg md:text-4xl font-semibold text-[#252B42] mt-20 '>Pricing</h2>
                    <p className='text-xs md:text-sm font-bold text-[#737373]'>Problems trying to resolve the conflict between </p>
                    <p className='text-xs md:text-sm font-bold text-[#737373]'> the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='flex items-center justify-center gap-6 mt-6'>
                    <span className={isYearly ? 'text-[#737373] font-semibold' : 'text-[#252B42] font-bold'}>Monthly</span>
                    <button
                        type="button"
                        onClick={() => setIsYearly(!isYearly)}
                        aria-pressed={isYearly}
                        className={`relative inline-flex h-8 w-14 items-center rounded-full border transition-colors duration-200 ${isYearly ? 'bg-[#23A6F0] border-[#23A6F0]' : 'bg-white border-[#23A6F0]'} `}
                    >
                        <span
                            className={`inline-block h-6 w-6 transform rounded-full bg-[#D0D0D0] border border-[#D0D0D0]  shadow transition-transform duration-200 ${isYearly ? 'translate-x-6 bg-white border border-white' : 'translate-x-1'}`}
                        />
                    </button>
                    <span className={isYearly ? 'text-[#252B42] font-bold' : 'text-[#737373] font-semibold'}>Yearly</span>
                    <span className='bg-[#B2E3FF] text-[#23A6F0] text-center font-semibold rounded-full w-24 h-8 py-2 px-4'>Save 25%</span>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-stretch gap-12 lg:gap-0 mt-8 md:mt-[120px] w-full max-w-7xl mx-auto'>
                    <div className='w-[360px] h-[700px] text-center mx-auto border-2 border-[#BDE1FF] rounded-2xl p-10 bg-white mt-15'>
                        <h3 className='text-2xl font-bold text-[#252B42] text-center mt-10'>FREE</h3>
                        <p className='text-[#737373] text-center mt-2'>Organize across all<br /> apps by hand</p>
                        <div className='flex items-end justify-center gap-2 mt-10'>
                            <span className='text-5xl font-bold text-[#252B42]'>{getPrice(monthlyPrices.free)}</span>
                            <span className='text-[#23A6F0] text-2xl font-bold'>$</span>
                        </div>
                        <p className='text-[#8EC2F2] text-center mt-1'>{isYearly ? 'Per Year' : 'Per Month'}</p>
                        <ul className='mt-8 space-y-4 text-[#252B42] text-sm'>
                            <li className='flex items-center gap-3 justify-center'><CircleCheck className='h-12 w-12 text-white fill-[#2DC071]' /> Unlimited product updates</li>
                            <li className='flex items-center gap-3 justify-center'><CircleCheck className='h-12 w-12 text-white fill-[#2DC071]' /> Unlimited product updates</li>
                            <li className='flex items-center gap-3 justify-center'><CircleCheck className='h-12 w-12 text-white fill-[#2DC071]' /> Unlimited product updates</li>
                            <li className='flex items-center gap-3 justify-center text-[#BDBDBD]'><CircleCheck className='h-12 w-12 text-white fill-[#BDBDBD]' /> 1GB  Cloud storage</li>
                            <li className='flex items-center gap-3 justify-center text-[#BDBDBD]'><CircleCheck className='h-12 w-12 text-white fill-[#BDBDBD]' /> Email and community support</li>
                        </ul>
                        <button className='w-60 h-12 rounded-md bg-[#252B42] text-white mt-10'>Try for free</button>
                    </div>
                    <div className='w-[360px] h-[800px] mx-auto rounded-2xl p-12 bg-[#252B42] text-white shadow-xl space-y-6 text-center'>
                        <h3 className='text-2xl font-bold text-center mt-10'>STANDARD</h3>
                        <p className='text-[#BDBDBD] text-center mt-2'>Organize across all<br /> apps by hand</p>
                        <div className='flex items-end justify-center gap-2 mt-10'>
                            <span className='text-5xl font-extrabold'>{getPrice(monthlyPrices.standard)}</span>
                            <span className='text-[#23A6F0] text-2xl font-bold'>$</span>
                        </div>
                        <p className='text-[#8EC2F2] text-center mt-1'>{isYearly ? 'Per Year' : 'Per Month'}</p>
                        <ul className='mt-8 space-y-4 text-base'>
                            <li className='flex items-center gap-3 justify-center text-white'><CircleCheck className='h-12 w-12 text-white fill-[#2DC071]' /> Unlimited product updates</li>
                            <li className='flex items-center gap-3 justify-center text-white'><CircleCheck className='h-12 w-12 text-white fill-[#2DC071]' /> Unlimited product updates</li>
                            <li className='flex items-center gap-3 justify-center text-white'><CircleCheck className='h-12 w-12 text-white fill-[#2DC071]' /> Unlimited product updates</li>
                            <li className='flex items-center gap-3 justify-center text-[#BDBDBD]'><CircleCheck className='h-12 w-12 text-white fill-[#BDBDBD]' /> 1GB  Cloud storage</li>
                            <li className='flex items-center gap-3 justify-center text-[#BDBDBD]'><CircleCheck className='h-12 w-12 text-white fill-[#BDBDBD]' /> Email and community support</li>
                        </ul>
                        <button className='mt-10 w-60 h-12 rounded-md bg-[#23A6F0] text-white mb-4'>Try for free</button>
                    </div>
                    <div className='w-[360px] h-[700px] text-center mx-auto border-2 border-[#BDE1FF] rounded-2xl p-10 bg-white mt-15'>
                        <h3 className='text-2xl font-bold text-[#252B42] text-center mt-10'>PREMIUM</h3>
                        <p className='text-[#737373] text-center mt-2'>Organize across all<br /> apps by hand</p>
                        <div className='flex items-end justify-center gap-2 mt-10'>
                            <span className='text-5xl font-bold text-[#252B42]'>{getPrice(monthlyPrices.premium)}</span>
                            <span className='text-[#23A6F0] text-2xl font-bold'>$</span>
                        </div>
                        <p className='text-[#8EC2F2] text-center mt-1'>{isYearly ? 'Per Year' : 'Per Month'}</p>
                        <ul className='mt-8 space-y-4 text-[#252B42] text-sm'>
                            <li className='flex items-center gap-3 justify-center'><CircleCheck className='h-12 w-12 text-white fill-[#2DC071]' /> Unlimited product updates</li>
                            <li className='flex items-center gap-3 justify-center'><CircleCheck className='h-12 w-12 text-white fill-[#2DC071]' /> Unlimited product updates</li>
                            <li className='flex items-center gap-3 justify-center'><CircleCheck className='h-12 w-12 text-white fill-[#2DC071]' /> Unlimited product updates</li>
                            <li className='flex items-center gap-3 justify-center text-[#BDBDBD]'><CircleCheck className='h-12 w-12 text-white fill-[#BDBDBD]' /> 1GB  Cloud storage</li>
                            <li className='flex items-center gap-3 justify-center text-[#BDBDBD]'><CircleCheck className='h-12 w-12 text-white fill-[#BDBDBD]' /> Email and community support</li>
                        </ul>
                        <button className='mt-10 w-60 h-12 rounded-md bg-[#23A6F0] text-white'>Try for free</button>
                    </div>

                </div>
                <div className="py-16 lg:h-[400px] w-full max-w-7xl mx-auto mt-30">
                    <div className="w-full px-4 sm:px-6 lg:px-8">
                        <div className='text-center mb-12 mt-20'>
                            <h1 className='text-xl md:text-2xl font-bold text-[#252B42]'>Trusted By Over 4000 Big Companies</h1>

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
            </section>
            <div className='border border-[#FFFFFF] '>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold md:text-5xl text-[#252B42] mt-20 mb-8'>Pricing FAQs</h1>
                    <p className="text-gray-600 text-lg flex items-center justify-center gap-2">Problems trying to resolve the conflict between</p>
                    <p className="text-gray-600 text-lg flex items-center justify-center gap-2">the two major realms of Classical physics</p>
                </div>

                <div className='w-full max-w-7xl mx-auto px-4 py-16 mt-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {pricingFAQs.map((faq) => (
                            <div key={faq.id} className='flex gap-4'>
                                <div className='flex-shrink-0'>
                                    <div className='w-8 h-8 text-[#23A6F0] flex items-center justify-center'>
                                        <ChevronRight className='hidden md:block w-6 h-6 text-[#23A6F0]' />
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-lg font-bold text-[#252B42] mb-3'>{faq.question}</h3>
                                    <p className='text-[#737373] text-sm leading-relaxed'>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='text-center mt-16'>
                        <p className='text-[#737373] text-lg'>
                            Haven't got your answer? <Link to="/contact" className='text-[#23A6F0] hover:underline'>Contact our support</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center space-y-8 px-4'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold md:text-5xl text-[#252B42] mt-20 mb-8'>Start your 14 days free trial</h1>
                    <p className="text-gray-600 text-lg flex items-center justify-center gap-2">Met minim Mollie non desert Alamo est sit cliquey dolor </p>
                    <p className="text-gray-600 text-lg flex items-center justify-center gap-2">do met sent. RELIT official consequent.</p>
                </div>
                <button className='border border-[#23A6F0] bg-[#23A6F0] text-white text-ml font-semibold rounded-sm w-48 h-12'>Try it free now</button>
                <div className='flex justify-center gap-8'>
                    <Twitter className='fill-[#55ACEE] h-8 w-8' strokeWidth={0.1} />
                    <div className='bg-[#395185] rounded-sm p-1 md:p-2 flex items-center justify-center h-8 w-8 '>
                        <Facebook className='h-8 w-8 md:h-[72px] md:w-[72px] text-white fill-white transform translate-y-1 translate-x-1 ' strokeWidth={0.1} />
                    </div>
                    <Instagram className='h-8 w-8 md:h-8 md:w-8 text-[#000000]' />
                    <div className='bg-[#0A66C2]  p-1 md:p-2 flex items-center justify-center h-8 w-8 '>
                        <Linkedin className='h-8 w-8 md:h-[72px] md:w-[72px] text-white fill-white transform translate-y-0 translate-x-0 ' strokeWidth={0.1} />
                    </div>
                </div>
            </div>

        </div>
    )
}