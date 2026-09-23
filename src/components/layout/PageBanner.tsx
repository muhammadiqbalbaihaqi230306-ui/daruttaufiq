"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { menuItems } from "./Navbar";

export default function PageBanner() {
  const pathname = usePathname();

  // Don't show on home page
  if (pathname === "/") return null;

  let currentTitle = "Halaman";
  let parentLabel = "";

  // Cari judul halaman dan parent-nya berdasarkan menuItems
  for (const item of menuItems) {
    if (item.href === pathname) {
      currentTitle = item.label;
      break;
    }
    if (item.children) {
      const child = item.children.find((c) => c.href === pathname);
      if (child) {
        currentTitle = child.label;
        parentLabel = item.label;
        break;
      }
    }
  }

  // Jika tidak ketemu di menu, buat judul otomatis dari URL
  if (currentTitle === "Halaman") {
    const pathParts = pathname.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const lastPart = pathParts[pathParts.length - 1];
      currentTitle = lastPart.charAt(0).toUpperCase() + lastPart.slice(1).replace(/-/g, " ");
    }
  }

  return (
    <div className="bg-secondary text-white pt-24 pb-12 lg:pt-32 lg:pb-16 mt-20">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-white/70 mb-4 font-light">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <FaChevronRight className="text-[10px]" />
          {parentLabel && (
            <>
              <span className="cursor-default">{parentLabel}</span>
              <FaChevronRight className="text-[10px]" />
            </>
          )}
          <span className="text-white font-medium">{currentTitle}</span>
        </div>
        
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-bold">{currentTitle}</h1>
      </div>
    </div>
  );
}
