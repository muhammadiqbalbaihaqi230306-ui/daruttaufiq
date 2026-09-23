"use client";

import Image from "next/image";

export default function AboutSection() {
  const features = [
    {
      title: "Pendidikan Karakter (ADMK)",
      description: "Membentuk generasi berprestasi sekaligus berakhlak mulia melalui Akhlaqul Karimah, Disiplin, Mandiri, dan Kreatif.",
      image: "/images/images program/IMG-20260714-WA0092.jpg",
    },
    {
      title: "Kurikulum Bilingual Terpadu",
      description: "Memadukan pendidikan nasional, wawasan global, dengan pemahaman nilai agama Islam yang mendalam.",
      image: "/images/images program/IMG-20260714-WA0110.jpg",
    },
    {
      title: "Lingkungan Kondusif",
      description: "Sistem kelas terpisah putra dan putri untuk menciptakan suasana belajar yang fokus, aman, dan sesuai syariat.",
      image: "/images/images program/IMG-20250427-WA0012.jpg",
    },
  ];

  return (
    <section className="relative z-30 -mt-16 bg-white rounded-t-[2.5rem] lg:rounded-t-[4rem] pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center lg:sticky lg:top-32" data-aos="fade-right">
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                Keunggulan
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary leading-[1.2]">
                Mengapa Memilih Darut Taufiq?
              </h2>
            </div>
          </div>

          {/* Right Content - Cards Grid */}
          <div className="w-full lg:w-2/3" data-aos="fade-left" data-aos-delay="100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col group">
                  {/* Image */}
                  <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-gray-100 shadow-sm">
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Text */}
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted text-[15px] leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
