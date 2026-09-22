"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo for smoother ending
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

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
            <div className="relative group cursor-pointer">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:shadow-3xl group-hover:shadow-primary/20">
                <Image
                  src="/images/WhatsApp-Image-2022-05-30-at-16.22.13.jpeg"
                  alt="Pondok Pesantren Darut Taufiq"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700 mix-blend-overlay" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-6" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10 transition-transform duration-700 ease-out group-hover:-translate-x-6 group-hover:-translate-y-6" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div>
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">
                Tentang Kami
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
                Pondok Pesantren Darut Taufiq
              </h2>
              <p className="text-base text-secondary-light mt-1">
                Bilingual Integrated Islamic School
              </p>
            </div>

            <p className="text-sm md:text-[15px] text-text-muted leading-relaxed">
              Kami membantu orang tua mendidik putra-putrinya dalam menemukan &
              mengembangkan potensi siswa sesuai bakatnya dengan berbagai
              program. Pondok Pesantren Darut Taufiq berkomitmen memberikan pendidikan
              terbaik yang mengintegrasikan nilai-nilai Islam dalam setiap
              aspek pembelajaran.
            </p>

            <p className="text-sm md:text-[15px] text-text-muted leading-relaxed">
              Dengan kurikulum bilingual dan pendekatan Islam terpadu, kami
              membentuk generasi yang tidak hanya cerdas secara intelektual,
              tetapi juga memiliki akhlak mulia, mandiri, dan siap menghadapi
              tantangan masa depan.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-primary">
                  <AnimatedCounter end={3} duration={1500} />
                </p>
                <p className="text-xs text-text-muted mt-1">Jenjang Pendidikan</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-primary">
                  <AnimatedCounter end={500} suffix="+" duration={2500} />
                </p>
                <p className="text-xs text-text-muted mt-1">Peserta Didik</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl lg:text-3xl font-bold text-primary">
                  <AnimatedCounter end={50} suffix="+" duration={2000} />
                </p>
                <p className="text-xs text-text-muted mt-1">Tenaga Pendidik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
