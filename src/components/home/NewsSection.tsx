import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { prisma } from "@/lib/prisma";

export default async function NewsSection() {
  const posts = await prisma.post.findMany({
    take: 3,
    orderBy: {
      publishedAt: "desc",
    },
  });

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Berita & Informasi Sekolah
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
            Kabar Terbaru dari Arkan
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
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
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
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

        {/* Action */}
        <div className="text-center mt-12">
          <Link
            href="/berita"
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 text-sm uppercase tracking-wider transition-all rounded"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
}
