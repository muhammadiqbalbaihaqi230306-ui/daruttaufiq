"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaQuran,
  FaGlobe,
  FaMicroscope,
  FaPaintBrush,
  FaRunning,
  FaLaptopCode,
} from "react-icons/fa";

const programs = [
  {
    icon: FaQuran,
    title: "Tahfidz Al-Quran",
    description:
      "Program unggulan hafalan Al-Quran dengan metode yang menyenangkan dan target hafalan terstruktur.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: FaGlobe,
    title: "Bilingual Program",
    description:
      "Pembelajaran dwibahasa (Indonesia & English) untuk mempersiapkan siswa menghadapi era globalisasi.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: FaMicroscope,
    title: "Science & Math",
    description:
      "Penguatan bidang sains dan matematika dengan pendekatan eksperimen dan problem solving.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: FaPaintBrush,
    title: "Seni & Kreativitas",
    description:
      "Pengembangan bakat seni melalui kaligrafi, nasyid, dan berbagai kegiatan kreatif lainnya.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: FaRunning,
    title: "Olahraga & Outdoor",
    description:
      "Program panahan, berenang, futsal, dan outbound untuk menjaga kesehatan fisik dan mental.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: FaLaptopCode,
    title: "Digital Literacy",
    description:
      "Pengenalan teknologi dan coding sejak dini untuk mempersiapkan generasi digital.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function ProgramSection() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="program"
      className="py-16 lg:py-24 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Program Unggulan
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
            Mengembangkan Potensi Terbaik Siswa
          </h2>
          <p className="text-text-muted mt-4">
            Berbagai program dirancang untuk menumbuhkan potensi akademik,
            spiritual, dan keterampilan hidup peserta didik.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
                isVisible
                  ? `animate-fade-in-up`
                  : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : undefined,
              }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <program.icon className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">
                {program.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
