import Image from "next/image";

export interface EkskulItem {
  title: string;
  description: string;
  image: string;
}

function EthnicBottomStrip() {
  return (
    <div
      className="absolute left-0 right-0 bottom-0 h-[11px] sm:h-[13px] z-10 pointer-events-none select-none bg-repeat-x bg-bottom"
      style={{ backgroundImage: "url('/images/ethnic-strip-bottom.svg')", backgroundSize: "auto 100%" }}
    />
  );
}

export default function EkskulCard({ eskul }: { eskul: EkskulItem }) {
  return (
    <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
      {/* Gambar Foto Dokumentasi */}
      <div className="relative w-full h-52 sm:h-56 bg-gray-100 shrink-0">
        <Image
          src={eskul.image}
          alt={eskul.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Konten Teks Card */}
      <div className="px-6 pt-5 pb-8 sm:pb-9 flex-1 flex flex-col text-left">
        {/* Judul */}
        <h3 className="text-xl sm:text-2xl font-bold text-secondary leading-snug mb-2.5">
          {eskul.title}
        </h3>

        {/* Deskripsi */}
        <p className="text-text-muted text-sm sm:text-[15px] leading-relaxed">
          {eskul.description}
        </p>
      </div>

      {/* Pita Motif Sisi Bawah (Sama seperti Card Review) */}
      <EthnicBottomStrip />
    </div>
  );
}
