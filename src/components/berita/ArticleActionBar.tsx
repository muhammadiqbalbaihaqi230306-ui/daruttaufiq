"use client";

import React, { useState, useEffect } from "react";
import {
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaPrint,
  FaCheck,
  UIcon,
} from "@/components/ui/FlaticonIcons";

interface ArticleActionBarProps {
  title: string;
  content?: string;
  authorName?: string;
  authorRole?: string;
}

export default function ArticleActionBar({
  title,
  content = "",
  authorName = "Redaksi & Humas Darut Taufiq",
  authorRole = "Tim Dokumentasi & Publikasi",
}: ArticleActionBarProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Hitung perkiraan waktu baca (rata-rata 180 kata per menit)
  const calculateReadingTime = () => {
    if (!content) return 2;
    const cleanText = content.replace(/<[^>]*>?/gm, " ").trim();
    const words = cleanText.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 180));
  };

  const readingTime = calculateReadingTime();

  const handleCopyLink = async () => {
    try {
      const urlToCopy = currentUrl || window.location.href;
      await navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Gagal menyalin link:", err);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const shareText = encodeURIComponent(`${title}\n\nBaca selengkapnya di:`);
  const encodedUrl = encodeURIComponent(currentUrl);

  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodedUrl}`;

  return (
    <div className="w-full bg-linear-to-r from-slate-50 via-teal-50/20 to-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Sisi Kiri: Info Penulis & Waktu Baca (Tanpa Foto & Tanpa Badge Terverifikasi) */}
        <div>
          <span className="font-semibold text-slate-800 text-[15px] sm:text-[16px] leading-tight block">
            {authorName}
          </span>
          
          <div className="flex items-center gap-3 mt-1 text-slate-500 text-xs">
            <span>{authorRole}</span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-600">
              <FaClock className="text-slate-400 text-xs" />
              {readingTime} menit baca
            </span>
          </div>
        </div>

        {/* Sisi Kanan: Action & Social Share Buttons (Disembunyikan saat Cetak PDF) */}
        <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-200/60 print:hidden">
          <span className="text-xs font-medium text-slate-400 mr-1 hidden lg:inline-block">
            Bagikan:
          </span>

          {/* WhatsApp Button (Solid Brand Color) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Bagikan ke WhatsApp"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white border border-[#25D366] shadow-xs hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            <FaWhatsapp className="text-[17px]" />
          </a>

          {/* Facebook Button (Solid Brand Color) */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Bagikan ke Facebook"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white border border-[#1877F2] shadow-xs hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            <FaFacebook className="text-[16px]" />
          </a>

          {/* Twitter / X Button (Solid Brand Color) */}
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Bagikan ke X (Twitter)"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-black hover:bg-neutral-800 text-white border border-black shadow-xs hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            <FaTwitter className="text-[15px]" />
          </a>

          {/* Salin Tautan (Copy Link) */}
          <button
            type="button"
            onClick={handleCopyLink}
            title={copied ? "Tautan Tersalin!" : "Salin Tautan Artikel"}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 h-9 rounded-xl text-xs font-medium transition-all duration-200 shadow-xs ${
              copied
                ? "bg-emerald-600 text-white border border-emerald-600 scale-102"
                : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 hover:scale-105"
            }`}
          >
            {copied ? (
              <>
                <FaCheck className="text-xs" />
                <span>Tersalin</span>
              </>
            ) : (
              <>
                <UIcon name="link-alt" className="text-xs" />
                <span>Salin Link</span>
              </>
            )}
          </button>

          {/* Tombol Cetak / PDF */}
          <button
            type="button"
            onClick={handlePrint}
            title="Cetak Artikel ini"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs hover:shadow-sm transition-all duration-200 hover:scale-105"
          >
            <FaPrint className="text-sm" />
          </button>
        </div>

      </div>
    </div>
  );
}
