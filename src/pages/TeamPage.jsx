import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Redo, Twitter, Menu, X, Search, ShoppingCart, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { teamMembers } from '../data/data';
import TeamCard from '../components/TeamCard';
import teamSection1 from "../assets/img/teamimg/teamsection1.jpg"
import teamSection2 from "../assets/img/teamimg/teamSection2.jpg"
import teamSection3 from "../assets/img/teamimg/teamSection3.jpg"
import teamSection4 from "../assets/img/teamimg/teamSection4.jpg"
import teamSection5 from "../assets/img/teamimg/teamSection5.jpg"
export default function TeamPage() {
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

            </section>
            <section className='mt-16 lg:mt-[120px] px-4'>
                <div className='space-y-6 lg:space-y-10 text-center lg:text-center order-1 lg:order-1 '>
                    <h3 className='text-ml font-semibold text-[#737373] '>WHAT WE DO</h3>
                    <h1 className='text-4xl lg:text-5xl text-[#252B42] font-bold '>Innovation tailored for you</h1>
                    <p className="text-gray-600 text-xl flex items-center justify-center gap-2">
                        <span className='font-bold'>Home</span>
                        <ChevronRight className="h-6 w-6 " />
                        <span>Team</span>
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-2 mt-10'>
                    <img src={teamSection1} alt="" className='w-[480px] h-[400px]' />
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <img src={teamSection2} alt="" className='w-60 h-48 object-cover' />
                            <img src={teamSection3} alt="" className='w-60 h-48 object-cover' />
                        </div>
                        <div className='flex gap-2'>
                            <img src={teamSection4} alt="" className='w-60 h-48 object-cover' />
                            <img src={teamSection5} alt="" className='w-60 h-48 object-cover' />
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-40'>
                <div className='text-center leading-4'>
                    <h1 className='text-3xl font-bold text-[#252B42]'>Meet Our Team</h1>
                </div>
                <div className='flex flex-wrap justify-center gap-x-6 gap-y-25 mt-20 max-w-3xl mx-auto'>
                    {teamMembers.map((member) => (
                        <div key={member.id} className='w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]'>
                            <TeamCard member={member} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center space-y-8 px-4 mt-20'>
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
