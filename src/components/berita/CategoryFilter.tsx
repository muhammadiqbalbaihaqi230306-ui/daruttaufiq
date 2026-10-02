"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CategoryFilter({ currentCategory }: { currentCategory?: string }) {
  const router = useRouter();
  const tabs = [
    { id: "", label: "Semua", href: "/berita" },
    { id: "prestasi", label: "Prestasi", href: "/berita?category=prestasi" },
    { id: "artikel", label: "Artikel", href: "/berita?category=artikel" },
    { id: "kegiatan", label: "Kegiatan", href: "/berita?category=kegiatan" },
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
              className={`relative px-6 py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 rounded-[6px] ${
                isActive ? "text-white" : "text-text-muted hover:text-primary hover:bg-gray-200/50"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-berita-tab"
                  className="absolute inset-0 bg-primary rounded-[6px] shadow-sm"
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
