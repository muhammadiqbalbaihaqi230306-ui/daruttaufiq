import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import { prisma } from "@/lib/prisma";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });
  
  if (!post) return { title: "Not Found" };
  
  return {
    title: `${post.title} - Arkan Islamic School`,
    description: post.excerpt,
  };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) {
    notFound();
  }

  // Fetch recent posts for sidebar
  const recentPosts = await prisma.post.findMany({
    where: { NOT: { id: post.id } },
    take: 4,
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="bg-surface min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
          <Link href="/" className="hover:text-primary">Beranda</Link>
          <FaChevronRight className="text-[10px]" />
          <Link href="/berita" className="hover:text-primary">Berita</Link>
          <FaChevronRight className="text-[10px]" />
          <span className="text-secondary truncate">{post.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <article className="lg:w-2/3 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-[300px] md:h-[450px] w-full">
              <Image
                src={post.thumbnail || "/images/placeholder-news.jpg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
                {post.category}
              </div>
            </div>
            
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-2 text-text-muted text-sm mb-6 pb-6 border-b border-gray-100">
                <FaCalendarAlt className="text-primary" />
                <time dateTime={post.publishedAt.toISOString()}>
                  {new Intl.DateTimeFormat("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(post.publishedAt)}
                </time>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8 leading-tight">
                {post.title}
              </h1>
              
              {/* Content rendered safely since it's from trusted DB seed */}
              <div 
                className="prose prose-lg max-w-none text-text-muted prose-headings:text-secondary prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-28">
              <h3 className="text-xl font-bold text-secondary mb-6 pb-4 border-b border-gray-100 relative">
                Berita Terbaru
                <div className="absolute bottom-[-1px] left-0 w-12 h-0.5 bg-primary" />
              </h3>
              
              <div className="space-y-6">
                {recentPosts.map((recent) => (
                  <div key={recent.id} className="flex gap-4 group">
                    <Link href={`/berita/${recent.slug}`} className="flex-shrink-0 relative w-20 h-20 rounded-md overflow-hidden">
                      <Image
                        src={recent.thumbnail || "/images/placeholder-news.jpg"}
                        alt={recent.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </Link>
                    <div>
                      <Link href={`/berita/${recent.slug}`}>
                        <h4 className="text-secondary font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {recent.title}
                        </h4>
                      </Link>
                      <div className="flex items-center gap-1.5 text-text-muted text-xs mt-2">
                        <FaCalendarAlt className="text-primary/70" />
                        <time dateTime={recent.publishedAt.toISOString()}>
                          {new Intl.DateTimeFormat("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }).format(recent.publishedAt)}
                        </time>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
