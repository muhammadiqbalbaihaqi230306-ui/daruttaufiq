

export const metadata = {
  title: "Sejarah | Pondok Pesantren Darut Taufiq",
  description: "Sejarah berdirinya Pondok Pesantren Darut Taufiq.",
};

export default function SejarahPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section Khusus Sejarah */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images%20halaman%20pp/IMG_20260921_074120.jpg')" }}
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mt-16 lg:mt-0">
            <div className="max-w-3xl space-y-6">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Our History
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Menelusuri jejak perjalanan Pondok Pesantren Darut Taufiq dalam dedikasinya membangun institusi pendidikan Islam terpadu yang berkualitas di Kota Bekasi.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Konten Sejarah */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-8">
            Sejarah Darut Taufiq
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Pondok Pesantren Darut Taufiq didirikan dengan visi untuk mencetak generasi Islami yang cerdas, mandiri, dan berakhlak mulia.
          </p>
          <p className="text-text-muted leading-relaxed text-sm italic">
            (Konten sejarah lengkap sedang dalam penyusunan)
          </p>
        </div>
      </section>
    </main>
  );
}
