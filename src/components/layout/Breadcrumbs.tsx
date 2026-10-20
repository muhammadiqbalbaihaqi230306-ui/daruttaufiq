"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { menuItems } from "./Navbar";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ 
  theme = "dark",
  items,
}: { 
  theme?: "dark" | "light";
  items?: BreadcrumbItem[];
}) {
  const pathname = usePathname();

  const isDark = theme === "dark";
  const textClass = isDark ? "text-white/80" : "text-text-muted";
  const hoverClass = isDark ? "hover:text-white" : "hover:text-primary";
  const activeClass = isDark ? "text-white" : "text-secondary";

  if (items && items.length > 0) {
    return (
      <div className={`flex items-center gap-2 text-sm mb-6 font-light ${textClass}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              {index > 0 && <FaChevronRight className="text-[10px] opacity-70" />}
              {isLast ? (
                item.href ? (
                  <Link href={item.href} className={`${activeClass} font-medium ${hoverClass} transition-colors`}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={`${activeClass} font-medium`}>{item.label}</span>
                )
              ) : item.href ? (
                <Link href={item.href} className={`${hoverClass} transition-colors`}>
                  {item.label}
                </Link>
              ) : (
                <span className="cursor-default">{item.label}</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

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
