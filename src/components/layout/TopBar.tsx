"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-secondary text-white text-sm hidden lg:block">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center justify-between h-11">
        {/* Left - Contact Info */}
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="https://wa.me/6282228880972"
              target="_blank"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <FaWhatsapp className="text-base" />
              <span>+6282228880972</span>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:info@daruttaufiq.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <FaEnvelope className="text-base" />
              <span>info@daruttaufiq.com</span>
            </Link>
          </li>
          <li className="flex items-center gap-1.5">
            <FaClock className="text-base" />
            <span>Senin - Jumat : 07:30 - 16:00 WIB</span>
          </li>
        </ul>

        {/* Right - Social Media */}
        <ul className="flex items-center gap-3">
          <li>
            <Link
              href="https://www.instagram.com/ponpesdaruttaufiq?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <FaInstagram className="text-base" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.tiktok.com/@ponpes.darut.taufiq?_r=1&_t=ZS-99xQlp7LLpn"
              target="_blank"
              aria-label="TikTok"
              className="hover:text-primary transition-colors"
            >
              <FaTiktok className="text-base" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@daruttaufiqtv"
              target="_blank"
              aria-label="YouTube"
              className="hover:text-primary transition-colors"
            >
              <FaYoutube className="text-base" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/share/1CAZB2ZE1M/"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <FaFacebookF className="text-base" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
