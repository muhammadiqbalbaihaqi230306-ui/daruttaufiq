"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function NewsCarousel({ posts }: { posts: any[] }) {
  // Jika postingan kurang dari 6, kita duplicate agar looping mulus
  const displayPosts =
    posts.length > 0 && posts.length < 6
      ? [...posts, ...posts, ...posts].slice(0, 6)
      : posts;

  return (
    <div className="relative news-carousel-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={32} // setara gap-8
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        navigation={{
          prevEl: ".news-prev",
          nextEl: ".news-next",
        }}
        pagination={{
          el: ".news-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<button class="${className}">${index + 1}</button>`;
          },
        }}
        className="pb-8"
      >
        {displayPosts.map((post, index) => (
          <SwiperSlide key={`${post.id}-${index}`} className="h-auto">
            <div className="group flex flex-col h-full bg-white">
              {/* Thumbnail */}
              <Link
                href={`/berita/${post.slug}`}
                className="relative h-[240px] overflow-hidden mb-5 block"
              >
                <Image
                  src={post.thumbnail || "/images/placeholder-news.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              {/* Content */}
              <Link href={`/berita/${post.slug}`}>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-3">
                  {post.title}
                </h3>
              </Link>

              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <FaRegCalendarAlt className="text-gray-400" />
                <time dateTime={post.publishedAt instanceof Date ? post.publishedAt.toISOString() : new Date(post.publishedAt).toISOString()}>
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(post.publishedAt))}
                </time>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/berita/${post.slug}`}
                  className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 text-sm transition-colors rounded-md font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-12" slot="container-end">
          <button className="news-prev-fast w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-700 bg-white hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none text-lg hidden md:flex">
            «
          </button>
          <button className="news-prev w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-700 bg-white hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none text-lg">
            ‹
          </button>

          {/* Pagination Wrapper */}
          <div className="news-pagination flex gap-2 items-center justify-center"></div>

          <button className="news-next w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-700 bg-white hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none text-lg">
            ›
          </button>
          <button className="news-next-fast w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-700 bg-white hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none text-lg hidden md:flex">
            »
          </button>
        </div>
      </Swiper>

      <style jsx global>{`
        /* Styling for the custom pagination bullets injected by Swiper */
        .news-pagination {
          width: auto !important;
          position: static !important;
        }
        .news-pagination .swiper-pagination-bullet {
          background: white !important;
          border: 1px solid #e5e7eb !important;
          color: #374151; /* text-gray-700 */
          font-weight: 400;
          font-size: 1rem;
          opacity: 1;
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px; /* square with slight rounding */
          transition: all 0.2s;
          margin: 0 !important;
        }
        .news-pagination .swiper-pagination-bullet:hover {
          background-color: #12544F !important;
          color: white !important;
          border-color: #12544F !important;
        }
        .news-pagination .swiper-pagination-bullet-active {
          background-color: #12544F !important; /* The primary green */
          color: white !important;
          border-color: #12544F !important;
          box-shadow: none;
        }
        
        /* Ensure disabled arrows look disabled */
        .news-prev.swiper-button-disabled,
        .news-next.swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
