"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero/slide-1.jpg",
    title: "Sekolah Islam Favorit & Terbaik di Kota Bekasi",
    subtitle: "Bilingual Integrated Islamic School",
    cta: { label: "Daftar Sekarang", href: "https://ppdb.arkia.id" },
  },
  {
    image: "/images/hero/slide-2.jpg",
    title: "Membentuk Generasi Qurani yang Berprestasi",
    subtitle: "TK • SD • SMP Islam Terpadu",
    cta: { label: "Lihat Program", href: "#program" },
  },
  {
    image: "/images/hero/slide-3.jpg",
    title: "PPDB Tahun Ajaran 2027-2028 Telah Dibuka!",
    subtitle: "Kuota Terbatas — Segera Daftarkan Putra-Putri Anda",
    cta: { label: "Info Selengkapnya", href: "https://ppdb.arkia.id" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    if (timerRef.current) clearInterval(timerRef.current);
    startAutoplay();
  };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/60 to-secondary/30" />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl space-y-6">
                <p
                  className={`text-primary font-semibold text-sm md:text-base uppercase tracking-widest ${
                    index === current ? "animate-slide-in-left" : ""
                  }`}
                >
                  {slide.subtitle}
                </p>
                <h1
                  className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ${
                    index === current ? "animate-slide-in-right" : ""
                  }`}
                >
                  {slide.title}
                </h1>
                <div
                  className={`${
                    index === current ? "animate-slide-in-up delay-300" : ""
                  }`}
                >
                  <Link
                    href={slide.cta.href}
                    target={
                      slide.cta.href.startsWith("http") ? "_blank" : undefined
                    }
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
