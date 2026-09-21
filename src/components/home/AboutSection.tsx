"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-school.jpg"
                alt="Arkan Islamic School"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Tentang Kami
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                Arkan Islamic School
              </h2>
              <p className="text-lg text-secondary-light mt-1">
                Bilingual Integrated Islamic School
              </p>
            </div>

            <p className="text-text-muted leading-relaxed">
              Kami membantu orang tua mendidik putra-putrinya dalam menemukan &
              mengembangkan potensi siswa sesuai bakatnya dengan berbagai
              program. Arkan Islamic School berkomitmen memberikan pendidikan
              terbaik yang mengintegrasikan nilai-nilai Islam dalam setiap
              aspek pembelajaran.
            </p>

            <p className="text-text-muted leading-relaxed">
              Dengan kurikulum bilingual dan pendekatan Islam terpadu, kami
              membentuk generasi yang tidak hanya cerdas secara intelektual,
              tetapi juga memiliki akhlak mulia, mandiri, dan siap menghadapi
              tantangan masa depan.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-text-muted mt-1">Jenjang Pendidikan</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-text-muted mt-1">Peserta Didik</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-text-muted mt-1">Tenaga Pendidik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
