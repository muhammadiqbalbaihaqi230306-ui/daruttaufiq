"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-secondary flex items-center justify-center min-h-[400px]"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Students learning"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div
          className={`space-y-8 ${
            isVisible ? "animate-slide-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Tertarik Sekolah di Arkan Islamic School?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Penerimaan Siswa Baru Tahun Ajaran 2027-2028 Telah Dibuka!
          </p>
          <div className="pt-4">
            <Link
              href="https://ppdb.arkia.id"
              target="_blank"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 text-sm md:text-base uppercase tracking-wider transition-all hover:shadow-xl hover:-translate-y-1 rounded"
            >
              DAFTAR SEKARANG
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
