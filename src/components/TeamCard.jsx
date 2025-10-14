import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const TeamCard = ({ member }) => {
    return (
        <div className='text-center space-y-4'>
            <img src={member.image} alt={member.name} className='w-56 h-44 mx-auto'/>
            <h2 className='mt-8 font-bold text-sm text-[#252B42]'>{member.name}</h2>
            <p className='text-xs font-semibold text-[#737373]'>{member.profession}</p>
            <div className='flex justify-center gap-4'>
                <div className='bg-[#335BF5] md:bg-[#23A6F0] md:rounded-full p-1 lg:p-2 flex items-center justify-center h-6 w-6 lg:h-6 lg:w-6'>
                    <Facebook className='h-6 w-6 lg:h-[24px] lg:w-[24px] text-white fill-white transform translate-y-0.5 translate-x-0 ' strokeWidth={0.1}/>
                </div>
                <Instagram className='text-[#E51F5A] h-6 w-6 lg:h-[24px] lg:w-[24px] md:text-[#23A6F0]'/>
                <Twitter className='fill-[#21A6DF] md:fill-[#23A6F0] h-6 w-6 lg:h-[24px] lg:w-[24px]' strokeWidth={0.1}/>
            </div>
        </div>
    );
};

export default TeamCard;
