import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const instagramPosts = [
  { id: 1, image: "/images/ig/ig-1.jpg" },
  { id: 2, image: "/images/ig/ig-2.jpg" },
  { id: 3, image: "/images/ig/ig-3.jpg" },
  { id: 4, image: "/images/ig/ig-4.jpg" },
  { id: 5, image: "/images/ig/ig-5.jpg" },
  { id: 6, image: "/images/ig/ig-6.jpg" },
];

export default function InstagramSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary flex items-center gap-3">
              <FaInstagram className="text-primary" />
              @daruttaufiq
            </h2>
            <p className="text-text-muted mt-2">
              Ikuti kegiatan terbaru kami di Instagram
            </p>
          </div>
          <Link
            href="https://www.instagram.com/daruttaufiq"
            target="_blank"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-2.5 text-sm uppercase tracking-wider transition-all rounded"
          >
            Follow Us
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://www.instagram.com/daruttaufiq"
              target="_blank"
              className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden block"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
