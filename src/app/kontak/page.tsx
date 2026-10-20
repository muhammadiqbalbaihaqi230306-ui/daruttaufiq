"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from "@/components/ui/FlaticonIcons";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Terjadi kesalahan jaringan");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0092.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
        <div className="relative z-20 h-full pt-[20vh] md:pt-[25vh] lg:pt-[28vh] -translate-y-[5px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6">
              <Breadcrumbs />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2]">
                Hubungi Kami
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                Kami siap membantu menjawab pertanyaan Anda seputar program pendidikan, pendaftaran, maupun informasi lainnya tentang Pondok Pesantren Darut Taufiq.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-30 -mt-20 lg:-mt-24 bg-white rounded-t-[2.5rem] lg:rounded-t-[4rem] pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 space-y-12">

          {/* Single Unified Contact Info Container */}
          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full items-center lg:divide-x divide-gray-100">
              
              {/* Telepon */}
              <a
                href="tel:02182631191"
                className="flex items-center gap-3.5 text-gray-700 lg:px-4 first:lg:pl-0"
              >
                <div className="text-primary flex items-center justify-center text-2xl shrink-0">
                  <FaPhoneAlt />
                </div>
                <div className="text-xs md:text-sm">
                  <span className="text-gray-500 font-medium">Telepon : </span>
                  <span className="font-bold text-secondary block sm:inline">
                    (021) 82631191
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6282228880972"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-gray-700 lg:px-4"
              >
                <div className="text-primary flex items-center justify-center text-2xl shrink-0">
                  <FaWhatsapp />
                </div>
                <div className="text-xs md:text-sm">
                  <span className="text-gray-500 font-medium">WhatsApp : </span>
                  <span className="font-bold text-secondary block sm:inline">
                    +62 822 2888 0972
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@daruttaufiq.com"
                className="flex items-center gap-3.5 text-gray-700 lg:px-4"
              >
                <div className="text-primary flex items-center justify-center text-2xl shrink-0">
                  <FaEnvelope />
                </div>
                <div className="text-xs xl:text-sm min-w-0">
                  <span className="text-gray-500 font-medium">Email : </span>
                  <span className="font-bold text-secondary block sm:inline">
                    info@daruttaufiq.com
                  </span>
                </div>
              </a>

              {/* Jam Operasional */}
              <div className="flex items-center gap-3.5 text-gray-700 lg:px-4">
                <div className="text-primary flex items-center justify-center text-2xl shrink-0">
                  <FaClock />
                </div>
                <div className="text-xs md:text-sm">
                  <span className="text-gray-500 font-medium">Jam Operasional : </span>
                  <span className="font-bold text-secondary block sm:inline">
                    Senin - Sabtu 08:00 - 15:00 WIB
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8 border-l-4 border-primary pl-4">
                <h2 className="text-2xl font-bold text-secondary">Kirim Pesan</h2>
              </div>
              {status === "success" && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 font-medium text-sm border border-green-100">
                  Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 font-medium text-sm border border-red-100">
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nama Lengkap</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Alamat Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subjek</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Informasi Pendaftaran" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Pesan</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
                    placeholder="Tulis pesan Anda..." />
                </div>
                <button type="submit" disabled={status === "loading"}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all shadow-sm hover:shadow-md disabled:opacity-70">
                  {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 flex-grow relative min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.098078387264!2d106.92056227428117!3d-6.117498259988558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a21ac8c2f48a5%3A0x713f98f89dd3ae44!2sPondok%20Pesantren%20Darut%20Taufiq!5e0!3m2!1sid!2sid!4v1790176840926!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.75rem", position: "absolute", top: 8, bottom: 8, left: 8, right: 8, width: "calc(100% - 16px)", height: "calc(100% - 16px)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="text-primary text-2xl shrink-0 mt-0.5">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Alamat Lengkap</h3>
                  <p className="text-gray-900 text-sm leading-relaxed">
                    Jl. Kb. Baru Metros No. 59, Semper Barat, Cilincing<br />
                    Jakarta Utara, DKI Jakarta 14130
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
