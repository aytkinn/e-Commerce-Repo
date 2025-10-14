
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Redo, Twitter, Menu, X, Search, ShoppingCart } from 'lucide-react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import contact from "../assets/img/contact.png";

export default function ContactPages() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mb-16">
    <section className="w-full max-w-7xl mx-auto px-4">
        <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-4'>
            <div className="flex items-center justify-center md:justify-between w-full md:w-auto">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 ">Bandage</h2>

                <div className="md:hidden flex items-center gap-4">
                    <Search className="h-6 w-6 text-[#737373]"/>
                    <ShoppingCart className="h-6 w-6 text-[#737373]"/>
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
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8 mt-12 md:mt-[120px]'>
            <div className='space-y-6 md:space-y-10 text-center lg:text-left order-1 lg:order-1'>
                <h3 className='text-xl font-bold text-[#252B42] '>CONTACT US</h3>
                <h1 className='text-4xl md:text-7xl text-[#252B42] '>Get in touch</h1>
                <h1 className='text-4xl md:text-7xl text-[#252B42] -mt-2 md:-mt-8 '>today!</h1>
                <p className='text-lg md:text-2xl text-[#737373] '>We know how large objects will act,</p>
                <p className='text-lg md:text-2xl text-[#737373] -mt-2 md:-mt-8 '>but things on a small scale</p>
                <p className='text-xl md:text-3xl font-bold text-[#252B42]'>Phone : +451 215 215 </p>
                <p className='text-xl md:text-3xl font-bold text-[#252B42]'>Fax : +451 215 215</p>
                <div className='flex justify-center gap-6 md:gap-12'>
                    <Twitter className='fill-[#252B42] h-8 w-8 md:h-16 md:w-16' strokeWidth={0.1}/>
                    <div className='bg-[#252B42] rounded-sm p-1 md:p-2 flex items-center justify-center h-8 w-8 md:h-16 md:w-16'>
                        <Facebook className='h-6 w-6 md:h-[72px] md:w-[72px] text-white fill-white transform translate-y-1 translate-x-1 ' strokeWidth={0.1}/>
                    </div>
                    <Instagram className='h-8 w-8 md:h-16 md:w-16 text-[#252B42]' />
                    <div className='bg-[#252B42] rounded-sm p-1 md:p-2 flex items-center justify-center h-8 w-8 md:h-16 md:w-16'>
                        <Linkedin className='h-6 w-6 md:h-12 md:w-12 text-white fill-white'/>
                    </div>
                </div>
            </div>
            <img src={contact} alt="Contact image" className='w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto mt-8 lg:mt-20 order-2 lg:order-2' />
        </div>
    </section>
    <section className='mt-16 md:mt-[120px] px-4'>
        <div className='text-center'>
            <h2 className='text-lg md:text-xl font-semibold text-[#252B42] '>VISIT OUR OFFICE</h2>
            <h1 className='text-3xl md:text-6xl font-bold text-[#252B42]'>We help small businesses</h1>
            <h1 className='text-3xl md:text-6xl font-bold text-[#252B42]'> with big ideas</h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mt-8 md:mt-[120px]'>
            <div className='space-y-4 text-center w-full max-w-sm'>
                <Phone className='h-16 md:h-24 w-16 md:w-24 text-[#23A6F0] mx-auto' />
                <p className='text-lg md:text-xl font-bold text-[#252B42]'>georgia.young@example.com</p>
                <p className='text-lg md:text-xl font-bold text-[#252B42]'>georgia.young@ple.com</p>
                <h5 className='text-lg md:text-xl font-bold text-[#252B42] mt-4 md:mt-8'>Get Support</h5>
                <button className='border-2 border-[#23A6F0] h-12 md:h-[72px] w-32 md:w-36 rounded-full text-sm md:text-base'>Submit Request</button>
            </div>
            <div className='border-10 border-[#252B42] bg-[#252B42] w-full max-w-sm h-auto md:h-[432px] text-center space-y-4 p-6 md:p-8'>
                <MapPin className='h-16 md:h-[72px] w-16 md:w-[72px] text-[#23A6F0] mx-auto mt-2 md:mt-[50px] md:mb-10' />
                <p className='text-lg md:text-xl font-bold text-[#FFFFFF]'>georgia.young@example.com</p>
                <p className='text-lg md:text-xl font-bold text-[#FFFFFF]'>georgia.young@ple.com</p>
                <h5 className='text-lg md:text-xl font-bold text-[#FFFFFF] mt-4 md:mt-8'>Get Support</h5>
                <button className='border-2 border-[#23A6F0] h-12 md:h-[72px] w-32 md:w-36 rounded-full text-[#23A6F0] text-sm md:text-base'>Submit Request</button>
            </div>
             <div className='space-y-4 text-center w-full max-w-sm'>
                <Mail className='h-16 md:h-24 w-16 md:w-24 text-[#23A6F0] mx-auto' />
                <p className='text-lg md:text-xl font-bold text-[#252B42]'>georgia.young@example.com</p>
                <p className='text-lg md:text-xl font-bold text-[#252B42]'>georgia.young@ple.com</p>
                <h5 className='text-lg md:text-xl font-bold text-[#252B42] mt-4 md:mt-8'>Get Support</h5>
                <button className='border-2 border-[#23A6F0] h-12 md:h-[72px] w-32 md:w-36 rounded-full text-sm md:text-base'>Submit Request</button>
            </div>
        </div>
    </section>

        <div className="flex flex-col items-center space-y-6 md:space-y-8 px-4">
            <Redo className="transform rotate-90 h-16 md:h-24 w-16 md:w-24 text-[#23A6F0] mt-8 md:mt-20" />
            <p className='text-lg md:text-xl font-semibold text-[#252B42] text-center'>WE Can't WAIT TO MEET YOU</p>
            <h1 className='text-3xl md:text-6xl text-center'>Let's Talk</h1>
            <button className='border border-[#23A6F0] bg-[#23A6F0] text-white text-sm md:text-base font-semibold rounded-sm w-40 md:w-48 h-10 md:h-12'>Try it free now</button>
        </div>

    </div>
  )
}
