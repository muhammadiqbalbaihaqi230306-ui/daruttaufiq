"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

const menuItems = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "#",
    children: [
      { label: "Sejarah", href: "/sejarah" },
      { label: "Manajemen", href: "/manajemen" },
      { label: "Pengajar", href: "/pengajar" },
      { label: "Nilai", href: "/values" },
      { label: "Budaya", href: "/budaya" },
    ],
  },
  {
    label: "Akademik",
    href: "#",
    children: [
      { label: "Program", href: "/program" },
      { label: "Fasilitas", href: "/fasilitas" },
      { label: "Ekskul", href: "/ekskul" },
      { label: "Biaya", href: "/biaya" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Unit",
    href: "#",
    children: [
      { label: "TKIT", href: "https://tkit.arkan.sch.id" },
      { label: "SDIT", href: "https://sdit.arkan.sch.id" },
      { label: "SMPIT", href: "https://smpit.arkan.sch.id" },
      { label: "Perpustakaan", href: "https://library.arkan.sch.id" },
    ],
  },
  {
    label: "Berita",
    href: "/berita",
    children: [
      { label: "Prestasi", href: "/berita?category=prestasi" },
      { label: "Artikel", href: "/berita?category=artikel" },
    ],
  },
  { label: "Kontak", href: "/kontak" },
  { label: "PPDB", href: "https://ppdb.arkia.id", highlight: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-secondary/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-arkan.png"
              alt="Arkan Islamic School"
              width={200}
              height={58}
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded ${
                    item.highlight
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <FaChevronDown className="text-[10px] mt-0.5" />
                  )}
                </Link>
                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-[200px]">
                    <div className="bg-secondary-light rounded-md shadow-xl border border-white/10 overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          target={
                            child.href.startsWith("http") ? "_blank" : undefined
                          }
                          className="block px-5 py-3 text-sm text-white/80 hover:bg-primary hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Search Icon */}
            <button
              aria-label="Search"
              className="ml-2 p-2 text-white hover:text-primary transition-colors"
            >
              <FaSearch />
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-secondary-light border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    onClick={() => !item.children && setIsOpen(false)}
                    className={`block py-3 text-sm font-medium transition-colors ${
                      item.highlight
                        ? "text-primary font-bold"
                        : "text-white/90 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      className="p-2 text-white/60"
                    >
                      <FaChevronDown
                        className={`text-xs transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && activeDropdown === item.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        target={
                          child.href.startsWith("http") ? "_blank" : undefined
                        }
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm text-white/60 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
