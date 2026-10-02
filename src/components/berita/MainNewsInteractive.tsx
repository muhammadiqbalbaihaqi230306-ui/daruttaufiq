"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function MainNewsInteractive({
  posts,
  hidePagination = false,
}: {
  posts: any[];
  hidePagination?: boolean;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-24 text-text-muted bg-surface rounded-2xl mt-8">
        Belum ada berita.
      </div>
    );
  }

  const featuredPost = posts[0];
  const listPosts = posts.slice(1);
  const itemsPerPage = 3;
  const totalPages = Math.max(1, Math.ceil(listPosts.length / itemsPerPage));

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const handleDotClick = (i: number) => {
    setDirection(i > currentPage ? 1 : -1);
    setCurrentPage(i);
  };

  const currentList = listPosts.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -30 : 30,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    }),
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-stretch">
      {/* Left Column - Featured Post */}
      <div className="w-full lg:w-1/2 flex">
        <div className="group flex flex-col border border-gray-200 rounded-[1.5rem] overflow-hidden bg-white w-full p-2 h-full">
          <div className="relative w-full h-64 lg:h-[340px] shrink-0">
            <div className="relative w-full h-full rounded-t-xl lg:rounded-xl overflow-hidden bg-gray-50">
              <Image
                src={featuredPost.thumbnail || "/images/placeholder-news.jpg"}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <Link href={`/berita/${featuredPost.slug}`}>
              <h3 className="text-lg lg:text-xl font-bold text-secondary mb-4 leading-snug line-clamp-2 group-hover:underline decoration-1 underline-offset-4 decoration-secondary cursor-pointer">
                {featuredPost.title}
              </h3>
            </Link>
            <div className="mt-auto flex justify-between items-end">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-xs text-gray-600 rounded">
                  Featured news
                </span>
                <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-xs text-gray-600 rounded">
                  {featuredPost.category}
                </span>
              </div>
              <Link
                href={`/berita/${featuredPost.slug}`}
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Small Posts List */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <div className="relative flex-grow flex flex-col">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-4 h-full"
            >
              {currentList.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col sm:flex-row border border-gray-200 rounded-[1.25rem] overflow-hidden bg-white p-2 gap-4 flex-1"
                >
                  <div className="relative w-full sm:w-48 h-32 sm:h-full min-h-[120px] shrink-0 rounded-xl overflow-hidden bg-gray-50">
                    <Image
                      src={post.thumbnail || "/images/placeholder-news.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-grow justify-between py-2 pr-2">
                    <Link href={`/berita/${post.slug}`}>
                      <h3 className="text-[15px] font-bold text-secondary leading-snug line-clamp-3 sm:line-clamp-2 group-hover:underline decoration-1 underline-offset-4 decoration-secondary cursor-pointer mb-2">
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex justify-between items-end mt-auto pt-2">
                      <div className="flex gap-2">
                        <span className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-[11px] text-gray-600 rounded">
                          Featured news
                        </span>
                        <span className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-[11px] text-gray-600 rounded">
                          {post.category}
                        </span>
                      </div>
                      <Link
                        href={`/berita/${post.slug}`}
                        className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors shrink-0"
                      >
                        <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {!hidePagination && (
          <div className="flex items-center justify-between px-2 pt-4 pb-1">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                    i === currentPage
                      ? "bg-primary"
                      : "border border-gray-300 hover:bg-gray-200"
                  }`}
                ></span>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === 0
                    ? "bg-gray-50 text-gray-300 cursor-not-allowed"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <FaArrowRight className="text-xs rotate-180" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === totalPages - 1
                    ? "bg-gray-50 text-gray-300 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
