"use client";

import CountUp from "@/components/ui/CountUp";

const stats = [
  { end: 5, label: "Tahun Pengalaman" },
  { end: 140, label: "Pengajar" },
  { end: 20, label: "Staff" },
  { end: 900, label: "Siswa" },
];

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-24">
        <div className="bg-white shadow-[0_10px_60px_rgba(0,0,0,0.08)] py-12 px-6 border border-gray-100 rounded-2xl" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 md:divide-x divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <CountUp
                  end={stat.end}
                  suffix="+"
                  duration={2000}
                  className="font-bold text-5xl lg:text-7xl text-secondary mb-3"
                  suffixClassName="text-primary text-3xl lg:text-5xl ml-1 font-bold"
                />
                <p className="text-text-muted text-sm lg:text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
