"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CategoryFilter({ currentCategory }: { currentCategory?: string }) {
  const router = useRouter();
  const tabs = [
    { id: "", label: "Semua", href: "/berita" },
    { id: "kegiatan", label: "Kegiatan", href: "/berita?category=kegiatan" },
    { id: "artikel", label: "Artikel", href: "/berita?category=artikel" },
  ];

  const activeId = currentCategory?.toLowerCase() || "";

  return (
    <div className="flex justify-center mb-12">
      <div 
        className="inline-flex flex-nowrap overflow-x-auto gap-1 bg-gray-50 border border-gray-100 p-1.5 rounded-[8px] scrollbar-hide max-w-full" 
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {tabs.map((tab) => {
          const isActive = activeId === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                router.push(tab.href, { scroll: false });
              }}
              className={`relative px-6 py-2 text-sm font-bold border rounded-[6px] transition-all duration-200 whitespace-nowrap shrink-0 ${
                isActive 
                  ? "text-white bg-primary-dark border-primary-dark shadow-sm" 
                  : "bg-transparent text-primary border-primary hover:bg-primary-dark hover:text-white hover:border-primary-dark"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-berita-tab"
                  className="absolute inset-0 bg-primary-dark border border-primary-dark rounded-[6px] shadow-sm -z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
