import { FaStar } from "react-icons/fa";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Testimonial } from "@prisma/client";
export default async function TestimonialSection() {
  const testimonials = await prisma.testimonial.findMany();

  return (
    <section className="py-16 lg:py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Review Google
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
            Apa Kata Mereka?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Carousel / Grid (using CSS scroll snap for simplicity without client-side swiper on server component, or just a grid if few) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
          {testimonials.map((testi: Testimonial, i: number) => (
            <div
              key={testi.id}
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center bg-white p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col hover:shadow-md transition-shadow"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex text-[#FFB800] mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < testi.rating ? "" : "text-gray-200"} />
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={testi.avatar || "/images/avatar-placeholder.png"}
                    alt={testi.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{testi.name}</h4>
                  <p className="text-xs text-text-muted">{testi.role}</p>
                </div>
              </div>

              {/* Comment */}
              <div className="text-text-muted text-sm leading-relaxed italic">
                &quot;{testi.comment}&quot;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
