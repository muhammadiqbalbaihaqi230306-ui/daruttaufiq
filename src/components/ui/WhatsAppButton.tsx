"use client";

import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "628999444673";
  const message = encodeURIComponent(
    "Assalamualaikum *Arkan Islamic School*! I need more info about Arkan Islamic School"
  );

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-[#075E54] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Arkan Islamic School
                </p>
                <p className="text-white/70 text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD] min-h-[120px]">
            <div className="bg-white rounded-lg p-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-gray-700">
                Hi 👋, welcome to <strong>Arkan Islamic School</strong>
              </p>
              <p className="text-sm text-gray-700 mt-1">Can we help you?</p>
              <p className="text-[10px] text-gray-400 text-right mt-1">
                just now
              </p>
            </div>
          </div>

          {/* Open Chat Button */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-medium text-sm hover:bg-[#1ebe57] transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            Open Chat
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Open WhatsApp Chat"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </button>
    </div>
  );
}
