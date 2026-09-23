"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: any[];
}) {
  // Swiper requires more slides than slidesPerView to loop properly without breaking.
  // If we have few reviews (e.g., 3), we duplicate them to ensure smooth infinite looping.
  const displayTestimonials =
    testimonials.length > 0 && testimonials.length < 6
      ? [...testimonials, ...testimonials, ...testimonials].slice(0, 9)
      : testimonials;

  return (
    <div className="relative px-4 lg:px-16 testimonial-wrapper py-8 overflow-hidden">
      {/* Custom Navigation Buttons */}
      <button className="custom-swiper-button-prev hidden md:flex absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/5 rounded-full items-center justify-center shadow-[0_0_0_6px_rgba(18,84,79,0.1),0_4px_15px_rgba(0,0,0,0.05)] hover:bg-primary/10 hover:shadow-[0_0_0_8px_rgba(18,84,79,0.15),0_6px_20px_rgba(0,0,0,0.1)] transition-all duration-300 group outline-none">
        <FiChevronLeft className="text-primary text-2xl group-hover:scale-110 transition-transform" />
      </button>

      <button className="custom-swiper-button-next hidden md:flex absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/5 rounded-full items-center justify-center shadow-[0_0_0_6px_rgba(18,84,79,0.1),0_4px_15px_rgba(0,0,0,0.05)] hover:bg-primary/10 hover:shadow-[0_0_0_8px_rgba(18,84,79,0.15),0_6px_20px_rgba(0,0,0,0.1)] transition-all duration-300 group outline-none">
        <FiChevronRight className="text-primary text-2xl group-hover:scale-110 transition-transform" />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        centeredSlides={true}
        navigation={{
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next',
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        className="pb-16 pt-8 !overflow-visible"
      >
        {displayTestimonials.map((testi, index) => (
          <SwiperSlide key={`${testi.id}-${index}`} className="h-auto">
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-[0_10px_40px_rgb(0,0,0,0.06)] flex flex-col h-full transition-all duration-500 testi-card">
              {/* Rating */}
              <div className="flex text-[#FFC107] mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < testi.rating ? "" : "text-gray-200"}
                  />
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 text-gray-600 bg-gray-100 flex items-center justify-center">
                  {testi.avatar ? (
                    <Image
                      src={testi.avatar}
                      alt={testi.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <FaUserCircle className="w-full h-full text-[#4A4A4A]" />
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary">
                    {testi.name}
                  </h4>
                  <p className="text-sm text-gray-400 mt-0.5">
                    {testi.role || "Local Guide"}
                  </p>
                </div>
              </div>

              {/* Comment */}
              <div className="text-text-muted leading-relaxed text-justify">
                {testi.comment}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* Hide default swiper arrows entirely to prevent conflicts */
        .testimonial-wrapper .swiper-button-next,
        .testimonial-wrapper .swiper-button-prev {
          display: none !important;
        }
        
        .testimonial-wrapper .swiper-pagination-bullet-active {
          background-color: #12544F;
        }


        
        /* Hide all slides by default to prevent peeking at edges */
        .testimonial-wrapper .swiper-slide .testi-card {
          transform: scale(0.9);
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s ease;
        }
        
        /* Show only prev and next slides as faded */
        .testimonial-wrapper .swiper-slide-prev .testi-card,
        .testimonial-wrapper .swiper-slide-next .testi-card {
          opacity: 0.5;
          visibility: visible;
        }
        
        /* Make active center slide fully visible and large */
        .testimonial-wrapper .swiper-slide-active .testi-card {
          transform: scale(1.05);
          opacity: 1;
          visibility: visible;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        }
        
        /* Ensure custom navigation buttons handle disabled state gracefully */
        .custom-swiper-button-prev.swiper-button-disabled,
        .custom-swiper-button-next.swiper-button-disabled {
          opacity: 0.35;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
