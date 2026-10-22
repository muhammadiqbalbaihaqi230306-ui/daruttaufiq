import Image from "next/image";

export interface EkskulItem {
  title: string;
  description: string;
  image: string;
}

function EthnicStrip() {
  return (
    <div
      className="absolute left-0 top-0 bottom-0 w-[11px] sm:w-[13px] z-10 pointer-events-none select-none bg-repeat-y bg-left"
      style={{ backgroundImage: "url('/images/ethnic-strip.svg')", backgroundSize: "100% auto" }}
    />
  );
}

export default function EkskulCard({ eskul }: { eskul: EkskulItem }) {
  return (
    <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
      {/* Pita Motif Sisi Kiri (Versi Indonesia LTR) */}
      <EthnicStrip />

      {/* Gambar Foto Dokumentasi: Langsung menempel di atas, kiri (sampai pita motif), dan kanan */}
      <div className="relative w-full h-52 sm:h-56 bg-gray-100 flex-shrink-0">
        <Image
          src={eskul.image}
          alt={eskul.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Konten Teks Card */}
      <div className="pl-7 sm:pl-8 pr-6 pt-5 pb-6 flex-1 flex flex-col text-left">
        {/* Judul */}
        <h3 className="text-xl sm:text-2xl font-bold text-secondary leading-snug mb-2.5">
          {eskul.title}
        </h3>

        {/* Deskripsi */}
        <p className="text-text-muted text-sm sm:text-[15px] leading-relaxed">
          {eskul.description}
        </p>
      </div>
    </div>
  );
}
