"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaChevronDown,
} from "react-icons/fa";
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
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "Kapan waktu pendaftaran santri baru dibuka?",
      answer: "Pendaftaran santri baru biasanya dibuka pada bulan November hingga Februari setiap tahun ajaran baru. Silakan pantau website atau hubungi WhatsApp kami untuk tanggal pastinya."
    },
    {
      question: "Apakah bisa melakukan kunjungan/survey lokasi terlebih dahulu?",
      answer: "Tentu. Kami sangat menyarankan orang tua calon santri untuk melakukan kunjungan. Waktu kunjungan adalah Senin - Jumat (08.00 - 15.00) dan Sabtu (08.00 - 12.00) dengan konfirmasi sebelumnya."
    },
    {
      question: "Apakah asrama putra dan putri dipisah?",
      answer: "Ya, kawasan dan asrama untuk putra dan putri terpisah sepenuhnya dengan pengawasan ketat selama 24 jam."
    }
  ];

  const handleSubmit = async (e) => {
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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-surface">
      <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/images program/IMG-20260714-WA0092.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
        <div className="relative z-20 h-full pt-[20vh] md:pt-[25vh] lg:pt-[28vh]">
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

      <section className="relative z-30 -mt-24 px-4 lg:px-8 pb-16 lg:pb-24">
        <div className="w-full max-w-[1400px] mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FaPhoneAlt className="text-primary text-2xl" />
              </div>
              <h3 className="font-bold text-secondary mb-2 text-lg">Telepon</h3>
              <p className="text-gray-500 text-sm">(021) 82631191</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FaWhatsapp className="text-primary text-2xl" />
              </div>
              <h3 className="font-bold text-secondary mb-2 text-lg">WhatsApp</h3>
              <p className="text-gray-500 text-sm">+62 822 2888 0972</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FaEnvelope className="text-primary text-2xl" />
              </div>
              <h3 className="font-bold text-secondary mb-2 text-lg">Email</h3>
              <p className="text-gray-500 text-sm">info@daruttaufiq.com</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FaClock className="text-primary text-2xl" />
              </div>
              <h3 className="font-bold text-secondary mb-2 text-lg">Jam Operasional</h3>
              <p className="text-gray-500 text-sm">Senin - Sabtu<br/>08:00 - 15:00 WIB</p>
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
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-primary text-xl" />
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
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 mt-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold text-secondary mb-4">Pertanyaan Umum</h2>
              <p className="text-gray-900">Beberapa pertanyaan yang sering diajukan oleh calon orang tua santri.</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'border-primary ring-1 ring-primary/20' : 'border-gray-100 hover:border-gray-200'}`}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 bg-white text-left focus:outline-none"
                  >
                    <span className="font-semibold text-secondary">{faq.question}</span>
                    <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
