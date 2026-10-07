"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="mt-12 w-full max-w-[750px] mx-auto flex flex-col items-center">
      <div 
        className="w-full h-[30px] opacity-[0.2] mb-6" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 3L27 15L15 27L3 15ZM0 0h12L0 12ZM30 0H18L30 12ZM0 30h12L0 18ZM30 30H18L30 18Z' fill='%231A202C'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: '30px 30px'
        }} 
      />
      
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-50 border border-gray-100">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="relative min-w-full h-full flex-shrink-0">
              <Image 
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-between w-full mt-8 px-2">
        {/* Dots (Left) */}
        <div className="flex gap-2.5">
           {images.map((_, idx) => (
             <button
               key={idx}
               onClick={() => setCurrentIndex(idx)}
               className={`w-3 h-3 rounded-full transition-colors ${
                 currentIndex === idx 
                   ? "bg-[#1B4332]" 
                   : "bg-transparent border border-gray-300 hover:border-gray-400"
               }`}
             />
           ))}
        </div>

        {/* Arrows (Right) */}
        <div className="flex items-center gap-3">
          <button 
            onClick={prevSlide}
            className={`w-11 h-11 rounded-full flex items-center justify-center shadow-sm transition-colors ${
              currentIndex === 0 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-[#1B4332] text-white hover:bg-[#1B4332]/90 shadow-[#1B4332]/20"
            }`}
            disabled={currentIndex === 0}
          >
             <FaArrowLeft size={14} />
          </button>
          
          <button 
            onClick={nextSlide}
            className={`w-11 h-11 rounded-full flex items-center justify-center shadow-sm transition-colors ${
              currentIndex === images.length - 1 
                ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                : "bg-[#1B4332] text-white hover:bg-[#1B4332]/90 shadow-[#1B4332]/20"
            }`}
            disabled={currentIndex === images.length - 1}
          >
             <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      <div 
        className="w-full h-[30px] opacity-[0.2] mt-8" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 3L27 15L15 27L3 15ZM0 0h12L0 12ZM30 0H18L30 12ZM0 30h12L0 18ZM30 30H18L30 18Z' fill='%231A202C'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: '30px 30px'
        }} 
      />
    </div>
  );
}
