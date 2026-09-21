import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Berita & Kegiatan - Arkan Islamic School",
  description: "Kabar terbaru, prestasi, dan kegiatan dari Arkan Islamic School.",
};

export default async function BeritaPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  
  const posts = await prisma.post.findMany({
    where: category ? { category } : undefined,
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="bg-surface min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Berita & Kegiatan
          </h1>
          <p className="text-text-muted">
            Ikuti perkembangan terbaru, prestasi siswa, dan berbagai kegiatan
            menarik di lingkungan sekolah kami.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          <Link
            href="/berita"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              !category
                ? "bg-primary text-white"
                : "bg-white text-text-muted hover:text-primary"
            }`}
          >
            Semua
          </Link>
          <Link
            href="/berita?category=prestasi"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              category === "prestasi"
                ? "bg-primary text-white"
                : "bg-white text-text-muted hover:text-primary"
            }`}
          >
            Prestasi
          </Link>
          <Link
            href="/berita?category=artikel"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              category === "artikel"
                ? "bg-primary text-white"
                : "bg-white text-text-muted hover:text-primary"
            }`}
          >
            Artikel
          </Link>
          <Link
            href="/berita?category=kegiatan"
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              category === "kegiatan"
                ? "bg-primary text-white"
                : "bg-white text-text-muted hover:text-primary"
            }`}
          >
            Kegiatan
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Thumbnail */}
              <Link href={`/berita/${post.slug}`} className="relative h-56 overflow-hidden">
                <Image
                  src={post.thumbnail || "/images/placeholder-news.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                  <FaCalendarAlt className="text-primary" />
                  <time dateTime={post.publishedAt.toISOString()}>
                    {new Intl.DateTimeFormat("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(post.publishedAt)}
                  </time>
                </div>
                <Link href={`/berita/${post.slug}`}>
                  <h3 className="text-xl font-bold text-secondary mb-3 hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/berita/${post.slug}`}
                    className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-dark transition-colors group/link"
                  >
                    Read More
                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            Belum ada berita dalam kategori ini.
          </div>
        )}
      </div>
    </div>
  );
}
