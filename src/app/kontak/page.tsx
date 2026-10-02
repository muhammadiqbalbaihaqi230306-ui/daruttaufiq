"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Gagal mengirim pesan");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Terjadi kesalahan jaringan");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section (Mengikuti gaya Manajemen) */}
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0092.jpg')" }}
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6 relative -top-[23px]">
              <Breadcrumbs />
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Our Management
              </h1>
              {/* Summary */}
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl line-clamp-3">
                Mengenal sosok penuh dedikasi di balik pengelolaan Pondok Pesantren Darut Taufiq yang berkomitmen penuh dalam membangun institusi pendidikan Islam terpadu berkualitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="relative z-30 -mt-24 px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 xl:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-2">Alamat</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Jl. Kb. Baru Metros No. 59<br />
                  Semper Barat, Cilincing<br />
                  Jakarta Utara 14130
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-2">Telepon</h3>
                <p className="text-text-muted text-sm">(021) 82631191</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-2">WhatsApp</h3>
                <p className="text-text-muted text-sm">+6282228880972</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-2">Email</h3>
                <p className="text-text-muted text-sm">info@daruttaufiq.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Kirim Pesan
              </h2>
              
              {status === "success" && (
                <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6 font-medium text-sm">
                  Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6 font-medium text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-secondary">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Masukkan nama"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-secondary">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-secondary">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Judul pesan"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-secondary">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-surface border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-y"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-md transition-colors disabled:opacity-70"
                >
                  {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.098078387264!2d106.92056227428117!3d-6.117498259988558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a21ac8c2f48a5%3A0x713f98f89dd3ae44!2sPondok%20Pesantren%20Darut%20Taufiq!5e0!3m2!1sid!2sid!4v1790176840926!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
      </section>
    </main>
  );
}
