import React from 'react';
import { companyLogos } from '../data/data';

const CompanyLogos = () => {
  return (
    <div className="bg-[#FAFAFA] py-8 md:py-12 md:h-60 md:mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 ">
          {companyLogos.map((company) => (
            <a
              key={company.id}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300 mt-25 cursor-pointer mb-20"
            >
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-16 md:h-12 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
