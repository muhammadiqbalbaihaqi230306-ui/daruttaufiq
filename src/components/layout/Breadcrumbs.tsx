"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { menuItems } from "./Navbar";

export default function Breadcrumbs({ theme = "dark" }: { theme?: "dark" | "light" }) {
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

  // Fallback for dynamic URLs
  if (currentTitle === "Halaman") {
    const pathParts = pathname.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const lastPart = pathParts[pathParts.length - 1];
      currentTitle = lastPart.charAt(0).toUpperCase() + lastPart.slice(1).replace(/-/g, " ");
    }
  }

  const isDark = theme === "dark";
  const textClass = isDark ? "text-white/80" : "text-text-muted";
  const hoverClass = isDark ? "hover:text-white" : "hover:text-primary";
  const activeClass = isDark ? "text-white" : "text-secondary";

  return (
    <div className={`flex items-center gap-2 text-sm mb-6 font-light ${textClass}`}>
      <Link href="/" className={`${hoverClass} transition-colors`}>
        Home
      </Link>
      <FaChevronRight className="text-[10px] opacity-70" />
      {parentLabel && (
        <>
          <span className="cursor-default">{parentLabel}</span>
          <FaChevronRight className="text-[10px] opacity-70" />
        </>
      )}
      <span className={`${activeClass} font-medium`}>{currentTitle}</span>
    </div>
  );
}
