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
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10">
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
              href="mailto:info@arkan.sch.id"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <FaEnvelope className="text-base" />
              <span>info@arkan.sch.id</span>
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
              href="https://www.instagram.com/arkan_islamicschool"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <FaInstagram className="text-base" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.tiktok.com/@arkan_islamicschool"
              target="_blank"
              aria-label="TikTok"
              className="hover:text-primary transition-colors"
            >
              <FaTiktok className="text-base" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@arkanschooltv"
              target="_blank"
              aria-label="YouTube"
              className="hover:text-primary transition-colors"
            >
              <FaYoutube className="text-base" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/arkanislamicschool"
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
