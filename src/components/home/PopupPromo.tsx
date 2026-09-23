"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

export default function PopupPromo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Munculkan popup setelah 1,5 detik
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popupScaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-popup-fade {
          animation: popupFadeIn 0.4s ease-out forwards;
        }
        .animate-popup-scale {
          animation: popupScaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-popup-fade"
        onClick={() => setIsOpen(false)}
      >
        <div 
          className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-[90%] max-w-2xl overflow-hidden animate-popup-scale flex flex-col md:flex-row font-sans"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tombol Close */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-white hover:bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:rotate-90 shadow-md"
          >
            <FaTimes size={16} />
          </button>

          {/* Kolom Kiri: Judul & Highlight */}
          <div className="bg-gradient-to-br from-[#12544F] to-[#0a302d] text-white p-5 md:p-8 md:w-5/12 flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Dekorasi Background */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <Image 
              src="/images/logo-pondokk.png" 
              width={50} 
              height={50} 
              alt="Logo" 
              className="mb-4 md:mb-6 drop-shadow-xl relative z-10" 
            />
            
            <div className="relative z-10">
              <h2 className="text-xl md:text-3xl font-extrabold mb-1.5 md:mb-2 leading-tight tracking-tight">
                PENERIMAAN<br/>SANTRI BARU
              </h2>
              <div className="w-10 md:w-12 h-1 bg-[#FFC107] mx-auto mb-2 md:mb-3 rounded-full"></div>
              <p className="text-[#FFC107] font-bold tracking-wider text-[10px] md:text-[11px] mb-4 md:mb-6">
                TAHUN AJARAN 2027/2028
              </p>
              
              <div className="inline-flex items-center gap-2">
                <FaCalendarAlt className="text-[#FFC107] text-sm" />
                <span className="font-semibold text-xs">Dibuka 15 Agustus 2026</span>
              </div>
            </div>
          </div>
          
          {/* Kolom Kanan: Jadwal & Info */}
          <div className="p-5 md:p-8 md:w-7/12 bg-white flex flex-col justify-center">
            
            <div className="text-center mb-4 md:mb-6">
              <h3 className="text-[#12544F] font-semibold text-xs md:text-sm tracking-wide">2 MODEL TES SELEKSI</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="p-2 md:p-3 text-center">
                <FaMapMarkerAlt className="mx-auto text-lg md:text-xl text-[#12544F] mb-1 md:mb-1.5" />
                <h4 className="font-bold text-[#12544F] text-[11px] md:text-xs">OFFLINE</h4>
                <p className="text-[8px] md:text-[9px] leading-tight text-text-muted mt-0.5 md:mt-1">Khusus pendaftar<br/>Pulau Jawa</p>
              </div>
              <div className="p-2 md:p-3 text-center">
                <FaGlobe className="mx-auto text-lg md:text-xl text-[#12544F] mb-1 md:mb-1.5" />
                <h4 className="font-bold text-[#12544F] text-[11px] md:text-xs">ONLINE</h4>
                <p className="text-[8px] md:text-[9px] leading-tight text-text-muted mt-0.5 md:mt-1">Khusus pendaftar<br/>luar Pulau Jawa</p>
              </div>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              {/* Gelombang 1 */}
              <div className="flex bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                <div className="bg-[#12544F] text-white p-2 md:p-3 flex flex-col items-center justify-center w-16 md:w-20">
                  <span className="text-lg md:text-xl font-bold leading-none">1</span>
                  <span className="text-[7px] md:text-[8px] text-center uppercase tracking-wider mt-1">Gelombang</span>
                </div>
                <div className="p-2 md:p-3 flex-1">
                  <div className="flex justify-between items-center mb-1 md:mb-1.5">
                    <span className="text-[9px] md:text-[10px] font-semibold text-text-muted flex items-center gap-1 md:gap-1.5"><FaCalendarAlt className="text-gray-400"/> Pendaftaran:</span>
                    <span className="text-[10px] md:text-xs font-bold text-secondary">15 Ags - 9 Okt 26</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] md:text-[10px] font-semibold text-text-muted flex items-center gap-1 md:gap-1.5"><FaCalendarAlt className="text-gray-400"/> Tes:</span>
                    <span className="text-[10px] md:text-xs font-bold text-secondary">19 Sep - 11 Okt 26</span>
                  </div>
                </div>
              </div>
              
              {/* Gelombang 2 */}
              <div className="flex bg-gray-50 rounded-lg overflow-hidden border border-gray-100 opacity-80">
                <div className="bg-[#12544F] text-white p-2 md:p-3 flex flex-col items-center justify-center w-16 md:w-20">
                  <span className="text-lg md:text-xl font-bold leading-none">2</span>
                  <span className="text-[7px] md:text-[8px] text-center uppercase tracking-wider mt-1">Gelombang</span>
                </div>
                <div className="p-2 md:p-3 flex-1">
                  <div className="flex justify-between items-center mb-1 md:mb-1.5">
                    <span className="text-[9px] md:text-[10px] font-semibold text-text-muted flex items-center gap-1 md:gap-1.5"><FaCalendarAlt className="text-gray-400"/> Pendaftaran:</span>
                    <span className="text-[10px] md:text-xs font-bold text-secondary">24 Okt - 6 Nov 26</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] md:text-[10px] font-semibold text-text-muted flex items-center gap-1 md:gap-1.5"><FaCalendarAlt className="text-gray-400"/> Tes:</span>
                    <span className="text-[10px] md:text-xs font-bold text-secondary">31 Okt - 8 Nov 26</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 md:mt-4 text-center">
              <span className="inline-block text-primary text-[8px] md:text-[9px] font-medium leading-tight px-2">
                * Gelombang II dibuka jika kuota Gelombang I belum terpenuhi.
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
