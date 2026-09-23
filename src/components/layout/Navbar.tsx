"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";

export const menuItems = [
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
      { label: "TKIT", href: "https://tkit.daruttaufiq.com" },
      { label: "SDIT", href: "https://sdit.daruttaufiq.com" },
      { label: "SMPIT", href: "https://smpit.daruttaufiq.com" },
      { label: "Perpustakaan", href: "https://library.daruttaufiq.com" },
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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-40 transition-all duration-300 fixed ${
        scrolled
          ? "top-0 bg-secondary/95 backdrop-blur-md shadow-lg"
          : "top-0 lg:top-10 bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/images/logo-pondokk.png"
              alt="Pondok Modern"
              width={58}
              height={58}
              className="h-12 lg:h-14 w-auto"
              priority
            />
            <div className="flex flex-col justify-center font-serif text-white mt-1">
              <span className="text-lg lg:text-xl uppercase tracking-wider leading-none whitespace-nowrap">DARUT TAUFIQ</span>
              <span className="text-[9px] lg:text-[11px] uppercase tracking-[0.2em] leading-tight mt-1 whitespace-nowrap">PONDOK PESANTREN</span>
            </div>
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
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <FaChevronDown className="text-[10px] mt-0.5" />
                  )}
                </Link>
                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                    <div className="bg-white shadow-xl overflow-hidden p-2 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          target={
                            child.href.startsWith("http") ? "_blank" : undefined
                          }
                          className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors"
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
              className="ml-2 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <FaSearch />
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ${isOpen ? "h-screen" : "h-0 pointer-events-none"}`}>
        <div 
          className={`bg-secondary-light border-t border-white/10 transition-transform duration-500 ease-in-out shadow-xl ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-4 space-y-1">
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
                        : "text-white/90 hover:text-gray-300"
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
                        className="block py-2 text-sm text-white/60 hover:text-gray-300 transition-colors"
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
      </div>
    </header>
  );
}
