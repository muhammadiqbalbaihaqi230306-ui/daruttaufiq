"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaSearch, FaArrowRight, FaFileAlt, FaNewspaper } from "@/components/ui/FlaticonIcons";

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
      { label: "SDIT", href: "/sdit" },
      { label: "SMPIT", href: "/smpit" },
    ],
  },
  {
    label: "Berita",
    href: "/berita",
  },
  { label: "Kontak", href: "/kontak" },
  { label: "PPDB", href: "/ppdb", highlight: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchToggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search when route changes
  useEffect(() => {
    setIsSearchOpen(false);
    setSearchQuery("");
  }, [pathname]);

  // Handle click outside & escape to close search
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        (searchContainerRef.current && searchContainerRef.current.contains(target)) ||
        (mobileSearchContainerRef.current && mobileSearchContainerRef.current.contains(target)) ||
        (mobileSearchToggleRef.current && mobileSearchToggleRef.current.contains(target))
      ) {
        return;
      }
      setIsSearchOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.trim();
    setIsSearchOpen(false);
    setSearchQuery("");
    router.push(`/berita?q=${encodeURIComponent(q)}`);
  };

  const isLightPage = pathname === "/ppdb/daftar";

  return (
    <header
      className={`w-full z-40 transition-all duration-300 fixed ${
        scrolled
          ? "top-0 bg-secondary/95 backdrop-blur-md shadow-lg"
          : isLightPage
          ? "top-0 lg:top-10 bg-secondary shadow-md"
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
            {menuItems.map((item) => {
              const isItemActive =
                (item.href !== "#" && item.href !== "/" && pathname.startsWith(item.href)) ||
                (item.href === "/" && pathname === "/") ||
                item.children?.some(
                  (child) =>
                    child.href !== "#" && child.href !== "/" && pathname.startsWith(child.href.split("?")[0])
                );

              return (
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
                        : isItemActive
                        ? "text-gray-300"
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
                        {item.children.map((child) => {
                          const isChildActive = child.href !== "#" && child.href !== "/" && pathname.startsWith(child.href.split("?")[0]);
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              target={
                                child.href.startsWith("http") ? "_blank" : undefined
                              }
                              className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                                isChildActive
                                  ? "bg-primary text-white"
                                  : "text-gray-700 hover:bg-primary hover:text-white"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {/* Desktop Expandable Search Bar */}
            <div ref={searchContainerRef} className="relative flex items-center ml-2">
              <form
                onSubmit={handleSearchSubmit}
                className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${
                  isSearchOpen
                    ? "w-64 xl:w-80 h-10 opacity-100 bg-white/20 hover:bg-white/25 focus-within:bg-white/25 backdrop-blur-md rounded-full px-3.5 shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] border border-white/30"
                    : "w-0 h-10 opacity-0 pointer-events-none"
                }`}
              >
                <FaSearch className="text-white/80 text-sm shrink-0 mr-2.5" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari di Darut Taufiq..."
                  className="w-full bg-transparent text-white text-sm font-medium focus:outline-none placeholder:text-white/70"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      searchInputRef.current?.focus();
                    }}
                    className="text-white/70 hover:text-white p-1 shrink-0"
                    aria-label="Clear input"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                )}
              </form>

              {/* Search Toggle Icon */}
              <button
                type="button"
                onClick={() => {
                  const nextState = !isSearchOpen;
                  setIsSearchOpen(nextState);
                  if (nextState) {
                    setTimeout(() => searchInputRef.current?.focus(), 150);
                  } else {
                    setSearchQuery("");
                  }
                }}
                aria-label="Toggle Search"
                className={`w-10 h-10 shrink-0 aspect-square flex items-center justify-center transition-all rounded-full ${
                  isSearchOpen
                    ? "ml-2 text-white bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 shadow-sm"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {isSearchOpen ? <FaTimes className="text-sm" /> : <FaSearch className="text-sm" />}
              </button>
            </div>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              ref={mobileSearchToggleRef}
              onClick={() => {
                const nextState = !isSearchOpen;
                setIsSearchOpen(nextState);
                if (nextState) {
                  setTimeout(() => mobileSearchInputRef.current?.focus(), 150);
                } else {
                  setSearchQuery("");
                }
              }}
              className="p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Toggle Search"
            >
              <FaSearch size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Expandable Search Bar */}
        {isSearchOpen && (
          <div ref={mobileSearchContainerRef} className="lg:hidden pb-4 pt-1 animate-fade-in relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                ref={mobileSearchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berita, informasi sekolah..."
                autoFocus
                className="w-full bg-white/20 hover:bg-white/25 focus:bg-white/25 backdrop-blur-md text-white text-sm rounded-xl pl-10 pr-10 py-2.5 shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] border border-white/30 focus:outline-none placeholder:text-white/70"
              />
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/80 text-sm" />
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1"
                aria-label="Close search"
              >
                <FaTimes className="text-sm" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ${isOpen ? "h-screen" : "h-0 pointer-events-none"}`}>
        <div 
          className={`bg-secondary-light border-t border-white/10 transition-transform duration-500 ease-in-out shadow-xl ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-4 space-y-1">
            {menuItems.map((item) => {
              const isItemActive =
                (item.href !== "#" && item.href !== "/" && pathname.startsWith(item.href)) ||
                (item.href === "/" && pathname === "/") ||
                item.children?.some(
                  (child) =>
                    child.href !== "#" && child.href !== "/" && pathname.startsWith(child.href.split("?")[0])
                );

              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 text-sm font-medium transition-colors w-full ${
                        item.highlight
                          ? "text-primary font-bold"
                          : isItemActive
                          ? "text-gray-300"
                          : "text-white/90 hover:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdown(
                            activeDropdown === item.label ? null : item.label
                          );
                        }}
                        className={`p-3 ml-2 transition-colors focus:outline-none ${isItemActive ? "text-gray-300" : "text-white/60 hover:text-white"}`}
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
                      {item.children.map((child) => {
                        const isChildActive = child.href !== "#" && child.href !== "/" && pathname.startsWith(child.href.split("?")[0]);
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            target={
                              child.href.startsWith("http") ? "_blank" : undefined
                            }
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 text-sm transition-colors ${
                              isChildActive
                                ? "text-gray-300 font-medium"
                                : "text-white/60 hover:text-gray-300"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
