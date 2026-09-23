import { prisma } from "@/lib/prisma";
import TestimonialCarousel from "./TestimonialCarousel";

export default async function TestimonialSection() {
  const dbTestimonials = await prisma.testimonial.findMany();
  
  // Gunakan data dummy jika database masih kosong agar desain tetap terlihat
  const testimonials = dbTestimonials.length > 0 ? dbTestimonials : [
    {
      id: "dummy-1",
      name: "Akhmad Bisri",
      role: "Local Guide",
      rating: 5,
      comment: "Bersih.. Rapi.. Nyaman buat sekolah.. Insya Allah berkah barokah ilmu dan para gurunya. Masjidnya bersih, rapi..nyaman buat sholat Sekolah TK, SD, dan SMP Islam Terpadu yg berada di Bekasi. Lengkap dan mantapp",
      avatar: null,
    },
    {
      id: "dummy-2",
      name: "Tarmizi Fahmi",
      role: "Local Guide",
      rating: 5,
      comment: "Ya, sekolah Islami yg seperti ini yang harus di dukung oleh Umat Islam,sesuai dgn cita cita pemiliknya, dari pada di sekolahkan anak anak ke sekolah Non Muslim yg rawan pendangkalan akidah,pelayanan petugas cukup ramah dan dan cukup bersahabat. 👍👍👍",
      avatar: null,
    },
    {
      id: "dummy-3",
      name: "Rahma Ummuaiza&sarah",
      role: "Local Guide",
      rating: 5,
      comment: "Salaf school mashaa Allah alhamdulillah...banyak ngadain acara sekolah yg memberi byk kesempatan untuk siswanya brani tampil...sekolah sangat mendukung siswanya utk mengasah skill nya...recommended...my son is in here !",
      avatar: null,
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF5] overflow-hidden relative">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 -left-20 w-[40%] md:w-[30%] lg:w-[25%] h-full bg-white/60 skew-x-[25deg] origin-bottom-left pointer-events-none" />
      <div className="absolute top-0 -right-20 w-[40%] md:w-[30%] lg:w-[25%] h-full bg-white/60 -skew-x-[25deg] origin-bottom-right pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 px-4" data-aos="fade-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Review Google
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-secondary">
            Apa Kata Mereka ?
          </h2>
        </div>

        {/* Carousel */}
        <div data-aos="fade-up" data-aos-delay="200">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
