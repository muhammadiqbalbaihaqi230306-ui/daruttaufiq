"use client";

import Image from "next/image";
import { FaMoon, FaUsers, FaLaptopCode } from "react-icons/fa";

const programs = [
  {
    icon: FaMoon,
    title: "Tahfidz Qur'an",
    description: "Pondok Pesantren Darut Taufiq berkomitmen untuk mencetak generasi Qurani yang cinta, hafal, dan mengamalkan Al-Quran dalam kehidupan sehari-hari. Oleh karena itu, program Tahfidz Quran menjadi salah satu program unggulan favorit yang dirancang secara sistematis dan terstruktur guna membimbing peserta didik dalam menghafal Al-Quran dengan baik dan benar.",
    color: "bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30",
  },
  {
    icon: FaUsers,
    title: "Bilingual English & Arabic",
    description: "Pondok Pesantren Darut Taufiq menghadirkan Program Multi Bahasa sebagai program unggulan untuk membekali siswa dengan kemampuan bahasa yang kuat, khususnya dalam Bahasa Inggris dan Bahasa Arab. Program ini dirancang untuk menciptakan generasi yang tidak hanya unggul secara akademik tetapi juga mampu beradaptasi dalam lingkungan internasional.",
    color: "bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30",
  },
  {
    icon: FaLaptopCode,
    title: "Coding & Robotics",
    description: "Membekali santri dengan keterampilan teknologi masa depan melalui pembelajaran coding dan robotika dasar, melatih logika berpikir dan kreativitas dalam menyelesaikan masalah.",
    color: "bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30",
  },
];

export default function ProgramSection() {
  return (
    <section
      id="program"
      className="py-16 lg:py-24 bg-[#f4f5f7]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column - List */}
          <div className="space-y-10 lg:py-8" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-12">
              Program Unggulan Favorit
            </h2>
            
            <div className="space-y-12">
              {programs.map((program, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className={`w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center ${program.color} shadow-md`}>
                    <program.icon className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {program.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed text-justify">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Grid */}
          <div className="flex items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-2 grid-rows-2 shadow-xl w-full rounded-2xl overflow-hidden">
              
              {/* Image 1 */}
              <div className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer">
                <Image 
                  src="/images/WhatsApp-Image-2022-05-30-at-16.22.10.jpeg" 
                  alt="Program 1" 
                  fill 
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* Image 2 */}
              <div className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer">
                <Image 
                  src="/images/WhatsApp-Image-2022-05-30-at-16.22.11-1.jpeg" 
                  alt="Program 2" 
                  fill 
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* Image 3 */}
              <div className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer">
                <Image 
                  src="/images/WhatsApp-Image-2022-05-30-at-16.22.11-2.jpeg" 
                  alt="Program 3" 
                  fill 
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* Image 4 */}
              <div className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer">
                <Image 
                  src="/images/WhatsApp-Image-2022-05-30-at-16.22.13.jpeg" 
                  alt="Program 4" 
                  fill 
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
