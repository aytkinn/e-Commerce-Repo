import React from 'react';
import img from "src/assets/img/neural-universe.png";

const NeuralUniverse = () => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white mt-16 mb-16">
      <div className="flex flex-col md:flex-row items-center min-h-[500px]">
        <div className="w-full md:flex-1">
          <div className="relative">
            <img 
              src= {img}
              alt="Neural Universe"
              className="w-full h-[400px] md:h-[600px] object-contain object-center"
            />
            <div className="absolute top-4 left-4 md:hidden">
              <div className="flex items-center space-x-4">
                <button className="bg-[#23A6F0] text-white h-10 w-32 rounded-sm font-semibold transition-colors">
                  BUY NOW
                </button>
                <button className="border-[#23A6F0] bg-white text-[#23A6F0] border-2 h-10 w-32 rounded-sm font-semibold hover:bg-gray-50 transition-colors">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:flex-1 px-8 md:px-16 py-12 md:ml-24">
          <div className="space-y-6 text-left">
            <p className="text-sm font-medium text-gray-300 uppercase tracking-wide">
              SUMMER 2020
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] leading-tight">
              Part of the Neural<br />Universe
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-[#2DC071] text-white h-10 w-32 rounded-sm font-semibold hover:bg-green-700 transition-colors">
                BUY NOW
              </button>
              <button className="border-[#2DC071] bg-white text-[#2DC071] border-2 h-10 w-32 rounded-sm font-semibold hover:bg-gray-50 transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralUniverse;
