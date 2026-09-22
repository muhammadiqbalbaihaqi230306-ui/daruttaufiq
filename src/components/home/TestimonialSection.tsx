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
    <section className="py-16 lg:py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 px-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Review Google
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
            Apa Kata Mereka ?
          </h2>
        </div>

        {/* Carousel */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
