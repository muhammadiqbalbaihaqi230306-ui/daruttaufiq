"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const programs = [
  {
    title: "Tahfidz Qur'an",
    description: "Program Tahfidz Quran terstruktur untuk membimbing peserta didik dalam menghafal Al-Quran dengan baik dan benar, mencetak generasi Qurani yang berakhlak mulia.",
  },
  {
    title: "Bilingual English & Arabic",
    description: "Program Multi Bahasa membekali siswa dengan kemampuan bahasa internasional yang kuat untuk menciptakan generasi yang mampu beradaptasi secara global.",
  },
  {
    title: "Coding & Robotics",
    description: "Membekali santri dengan keterampilan teknologi masa depan melalui pembelajaran coding dan robotika, melatih logika berpikir dalam menyelesaikan masalah.",
  },
];

const programImages = [
  "/images/images program/IMG-20250427-WA0012.jpg",
  "/images/images program/IMG-20250427-WA0018.jpg",
  "/images/images program/IMG-20260714-WA0092.jpg",
  "/images/images program/IMG-20260714-WA0110.jpg"
];

export default function ProgramSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % programImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="program" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        {/* The Dark Box */}
        <div className="bg-[#121212] rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 xl:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#9B6F3E]/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-12 lg:mb-16" data-aos="fade-up">
              <span className="inline-block px-5 py-1.5 rounded-full bg-primary/20 text-primary font-medium text-xs mb-6 border border-primary/20 backdrop-blur-md">
                Program Utama
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Program Unggulan Favorit
              </h2>
              <p className="text-white/70 max-w-3xl text-sm md:text-base leading-relaxed font-light">
                Menghadirkan kurikulum komprehensif yang dirancang untuk membangun kecerdasan intelektual, spiritual, dan keterampilan praktis santri dalam menghadapi tantangan masa depan.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">
              {/* Left Column - List */}
              <div className="space-y-4" data-aos="fade-right">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 px-2">
                  Pilihan Program Kami
                </h3>
            
                {programs.map((program, index) => (
                  <div 
                    key={index} 
                    className="group p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-xl shadow-lg"
                  >
                    <h4 className="text-base md:text-lg font-bold text-white mb-1.5">
                      {program.title}
                    </h4>
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light line-clamp-2">
                      {program.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column - Image Collage / Decoration */}
              <div className="relative flex justify-center items-center h-full min-h-[400px] lg:min-h-[450px]" data-aos="fade-left">
                {/* Decorative angled background similar to screenshot */}
                <div className="absolute w-[80%] aspect-square bg-gradient-to-tr from-[#8a6844]/40 to-transparent rounded-[3rem] rotate-12 -z-10 blur-sm" />
                <div className="absolute w-[70%] aspect-square bg-[#159893]/20 rounded-[3rem] -rotate-6 -z-10 blur-sm" />
                
                {/* Main Image Container */}
                <div className="relative w-[85%] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                  {programImages.map((src, idx) => (
                    <Image 
                      key={src}
                      src={src} 
                      alt={`Program Unggulan ${idx + 1}`} 
                      fill 
                      className={`object-cover transition-opacity duration-1000 ${idx === activeImageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
                    />
                  ))}
                </div>
                
                {/* Secondary Floating Images (Thumbnails) */}
                <div className="absolute -bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 flex gap-4 md:gap-6 z-20">
                  {programImages.map((src, idx) => {
                    // Only show thumbnails for images that are NOT currently active
                    if (idx === activeImageIndex) return null;
                    
                    return (
                      <div 
                        key={src}
                        className="relative w-20 h-20 md:w-24 md:h-24 aspect-square rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl cursor-pointer transition-transform hover:scale-105 hover:-translate-y-2 bg-black"
                        onClick={() => setActiveImageIndex(idx)}
                      >
                        <Image 
                          src={src} 
                          alt={`Thumbnail ${idx + 1}`} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Feature Row */}
            <div className="mt-24 md:mt-32 -mb-8 lg:-mb-12 xl:-mb-16 -mx-8 lg:-mx-12 xl:-mx-16 px-8 lg:px-12 xl:px-16 py-8 bg-white/5 backdrop-blur-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative shadow-lg" data-aos="fade-up">
              
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="md:pr-6 md:border-r border-white/10">
                  <h4 className="text-[#e2a856] font-semibold text-sm mb-1.5">Fasilitas Modern</h4>
                  <p className="text-white/60 text-xs leading-relaxed font-light">
                    Ruang belajar nyaman, asrama bersih, dan pendukung lengkap untuk pembelajaran.
                  </p>
                </div>
                <div className="md:pr-6 md:border-r border-white/10 md:pl-2">
                  <h4 className="text-[#e2a856] font-semibold text-sm mb-1.5">Tenaga Pengajar</h4>
                  <p className="text-white/60 text-xs leading-relaxed font-light">
                    Dibimbing asatidz berkompeten lulusan universitas terkemuka dalam dan luar negeri.
                  </p>
                </div>
                <div className="md:pl-2">
                  <h4 className="text-[#e2a856] font-semibold text-sm mb-1.5">Lingkungan Islami</h4>
                  <p className="text-white/60 text-xs leading-relaxed font-light">
                    Menumbuhkan karakter akhlakul karimah melalui lingkungan yang kondusif.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 lg:ml-8 lg:self-center">
                <button className="text-primary hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                  Lebih Banyak <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
