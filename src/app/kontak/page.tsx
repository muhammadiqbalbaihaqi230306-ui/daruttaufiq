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
    <div className="bg-surface min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <Breadcrumbs theme="light" />
          <h1 className="text-4xl font-bold text-secondary mb-4">Hubungi Kami</h1>
          <p className="text-text-muted">
            Punya pertanyaan seputar pendaftaran, program sekolah, atau info
            lainnya? Jangan ragu untuk menghubungi kami.
          </p>
        </div>

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
                  Jl. Bawang Raya No. 62<br />
                  Cimuning, Mustikajaya<br />
                  Kota Bekasi, Jawa Barat
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9189196236316!2d107.03063251433932!3d-6.274384695459174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698fd4fb9a5723%3A0xc6d05f3a0937a85e!2sDarut Taufiq%20Islamic%20School!5e0!3m2!1sen!2sid!4v1684560012345!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
