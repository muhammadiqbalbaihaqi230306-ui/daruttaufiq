"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { 
  FaUserGraduate, 
  FaCheckCircle, 
  FaArrowRight, 
  FaArrowLeft, 
  FaWhatsapp, 
  FaPrint, 
  FaShieldAlt, 
  FaSchool, 
  FaUser, 
  FaUsers, 
  FaHome,
  FaFileInvoice,
  FaCheck
} from "react-icons/fa";
import { FaBookQuran } from "react-icons/fa6";

interface FormData {
  unit: string;
  programType: string;
  wave: string;
  fullName: string;
  nickname: string;
  gender: string;
  birthPlace: string;
  birthDate: string;
  nik: string;
  nisn: string;
  previousSchool: string;
  quranMemorized: string;
  fatherName: string;
  fatherJob: string;
  motherName: string;
  motherJob: string;
  whatsapp: string;
  email: string;
  address: string;
  medicalNotes: string;
  agreement: boolean;
}

interface RegistrationResult {
  regNumber: string;
  fullName: string;
  unit: string;
  programType: string;
  wave: string;
  whatsapp: string;
  createdAt: string;
}

function calculateAge(birthDateString: string): string {
  if (!birthDateString) return "-";
  const birth = new Date(birthDateString);
  if (isNaN(birth.getTime())) return "-";
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age >= 0 ? `${age}` : "-";
}

function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return "-";
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

function RegistrationFormContent() {
  const searchParams = useSearchParams();

  // Get initial values from query params
  const paramWave = searchParams.get("gelombang");
  const paramUnit = searchParams.get("unit");

  const initialWave = paramWave === "2" ? "Gelombang 2 (Reguler)" : "Gelombang 1 (Early Bird)";
  const initialUnit = paramUnit === "sdit" ? "SDIT" : paramUnit === "smpit" ? "SMPIT" : "TKIT";

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [result, setResult] = useState<RegistrationResult | null>(null);

  const [formData, setFormData] = useState<FormData>({
    unit: initialUnit,
    programType: initialUnit === "SMPIT" ? "Boarding" : "Fullday",
    wave: initialWave,
    fullName: "",
    nickname: "",
    gender: "Laki-laki",
    birthPlace: "",
    birthDate: "",
    nik: "",
    nisn: "",
    previousSchool: "",
    quranMemorized: "Belum Ada",
    fatherName: "",
    fatherJob: "",
    motherName: "",
    motherJob: "",
    whatsapp: "",
    email: "",
    address: "",
    medicalNotes: "",
    agreement: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === "unit") {
        if (value === "SMPIT") {
          setFormData((prev) => ({ ...prev, [name]: value, programType: "Boarding" }));
        } else {
          setFormData((prev) => ({ ...prev, [name]: value, programType: "Fullday" }));
        }
      }
    }
  };

  const handleNextStep = () => {
    setErrorMsg("");
    if (step === 1) {
      if (!formData.unit || !formData.wave) {
        setErrorMsg("Pilih unit dan gelombang pendaftaran terlebih dahulu.");
        return;
      }
    } else if (step === 2) {
      if (!formData.fullName.trim() || !formData.birthPlace.trim() || !formData.birthDate) {
        setErrorMsg("Harap lengkapi Nama Lengkap, Tempat Lahir, dan Tanggal Lahir calon santri.");
        return;
      }
    } else if (step === 3) {
      if (!formData.fatherName.trim() || !formData.motherName.trim() || !formData.whatsapp.trim() || !formData.address.trim()) {
        setErrorMsg("Harap lengkapi Nama Ayah, Nama Ibu, No. WhatsApp, dan Alamat Tempat Tinggal.");
        return;
      }
      if (formData.whatsapp.trim().length < 9) {
        setErrorMsg("Format nomor WhatsApp tidak valid.");
        return;
      }
    }
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handlePrevStep = () => {
    setErrorMsg("");
    setStep((prev) => prev - 1);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.agreement) {
      setErrorMsg("Anda harus menyetujui pernyataan kebenaran data dan tata tertib pesantren.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/ppdb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Gagal memproses pendaftaran");
      }

      setResult({
        regNumber: json.data.regNumber,
        fullName: json.data.fullName,
        unit: json.data.unit,
        programType: json.data.programType,
        wave: json.data.wave,
        whatsapp: json.data.whatsapp,
        createdAt: json.data.createdAt,
      });

      window.scrollTo({ top: 200, behavior: "smooth" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Terjadi gangguan koneksi. Silakan coba kembali.");
      }
    } finally {
      setLoading(false);
    }
  };

  // If already registered, show Success Card
  if (result) {
    const waText = encodeURIComponent(
      `Assalamu'alaikum Panitia PPDB Pondok Pesantren Darut Taufiq,\n\nSaya telah mengisi formulir pendaftaran online dengan data:\n` +
      `• No. Registrasi: *${result.regNumber}*\n` +
      `• Nama Santri: *${result.fullName}*\n` +
      `• Unit: *${result.unit} (${result.programType})*\n` +
      `• Gelombang: *${result.wave}*\n\n` +
      `Mohon informasi langkah selanjutnya untuk verifikasi berkas dan tes observasi. Terima kasih.`
    );

    return (
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-emerald-100 animate-fadeIn">
        <div className="text-center space-y-4 mb-8">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner animate-bounce">
            <FaCheck />
          </div>
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase border border-emerald-200">
            Pendaftaran Berhasil Terkirim
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
            Alhamdulillah, Data Anda Telah Diterima!
          </h2>
          <p className="text-text-muted text-sm max-w-lg mx-auto">
            Simpan Nomor Registrasi berikut sebagai bukti pendaftaran resmi calon santri baru Pondok Pesantren Darut Taufiq.
          </p>
        </div>

        {/* Bukti Registrasi Card */}
        <div className="bg-surface rounded-2xl p-6 md:p-8 border-2 border-dashed border-gray-200 relative mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-200 gap-4">
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider block">Nomor Registrasi PPDB</span>
              <p className="text-2xl md:text-3xl font-mono font-black text-primary tracking-wide">
                {result.regNumber}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-semibold self-start md:self-auto">
              <FaShieldAlt /> Terdaftar Resmi
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-sm">
            <div>
              <span className="text-xs text-gray-500 block">Nama Lengkap Santri:</span>
              <span className="font-bold text-secondary">{result.fullName}</span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Unit & Program:</span>
              <span className="font-bold text-secondary">{result.unit} ({result.programType})</span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Gelombang:</span>
              <span className="font-bold text-secondary">{result.wave}</span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block">No. WhatsApp Wali:</span>
              <span className="font-bold text-secondary">{result.whatsapp}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 mb-8 space-y-3">
          <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
            <FaCheckCircle className="text-emerald-600" /> Langkah Selanjutnya:
          </h4>
          <ol className="list-decimal pl-5 text-xs text-emerald-900/90 space-y-2 leading-relaxed">
            <li>
              <strong>Konfirmasi via WhatsApp:</strong> Klik tombol hijau di bawah untuk mengirim data registrasi Anda ke Admin Panitia PPDB.
            </li>
            <li>
              <strong>Verifikasi & Pembayaran Formulir:</strong> Panitia akan mengirimkan panduan pembayaran formulir dan jadwal tes seleksi.
            </li>
            <li>
              <strong>Simpan Bukti:</strong> Anda dapat mencetak atau mengambil tangkapan layar (screenshot) halaman ini sebagai pegangan.
            </li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`https://wa.me/6282228880972?text=${waText}`}
            target="_blank"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-center text-sm flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="text-lg" />
            Konfirmasi ke WhatsApp Panitia
          </Link>
          <button
            onClick={() => window.print()}
            className="bg-gray-100 hover:bg-gray-200 text-secondary font-semibold py-3.5 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
          >
            <FaPrint /> Cetak Bukti
          </button>
        </div>

        <div className="mt-8 text-center pt-6 border-t border-gray-100">
          <Link href="/ppdb" className="text-xs text-primary font-semibold hover:underline">
            ← Kembali ke Halaman Info PPDB
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Page Title & Step Info */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary tracking-tight">
          Student Profile Setup
        </h1>
        <p className="text-xs sm:text-sm text-primary font-semibold mt-1">
          Step {step} of 4
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Main Form Card with Integrated Stepper */}
        <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100">

          {/* INTEGRATED STEPPER AT TOP OF CONTAINER */}
          <div className="relative mb-8 pb-6 border-b border-gray-100">
            {/* Background connecting line */}
            <div className="absolute top-5 left-[12%] right-[12%] h-[1.5px] bg-gray-200 -z-0" />
            {/* Active connecting line */}
            <div 
              className="absolute top-5 left-[12%] h-[1.5px] bg-primary transition-all duration-500 -z-0"
              style={{ width: `${((step - 1) / 3) * 76}%` }}
            />

            <div className="grid grid-cols-4 relative z-10 text-center">
              {[
                { num: 1, label: "Personal Data" },
                { num: 2, label: "Basic Data" },
                { num: 3, label: "Additional Data" },
                { num: 4, label: "Qualifications & Attachments" },
              ].map((item) => {
                const isActive = step === item.num;
                const isDone = step > item.num;

                return (
                  <div key={item.num} className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                        isDone
                          ? "bg-primary text-white shadow-sm ring-4 ring-primary/10"
                          : isActive
                          ? "border-2 border-primary text-primary bg-white shadow-md ring-4 ring-primary/15"
                          : "border border-gray-300 text-gray-400 bg-white"
                      }`}
                    >
                      {isDone ? <FaCheck className="text-xs" /> : item.num}
                    </div>
                    <div className="mt-2 text-center">
                      <span
                        className={`text-[11px] sm:text-xs block leading-tight transition-colors ${
                          isActive
                            ? "text-primary font-bold"
                            : isDone
                            ? "text-emerald-700 font-medium"
                            : "text-gray-400 font-medium"
                        }`}
                      >
                        {item.label}
                      </span>
                      {isActive && (
                        <span className="w-8 h-0.5 bg-primary rounded-full mx-auto mt-1.5 block animate-fade-in" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Error Alert */}
          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* STEP 1: PILIHAN PENDIDIKAN */}
            {step === 1 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-1.5 h-5 bg-primary rounded-full inline-block shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Personal Data</h3>
                  </div>
                  <p className="text-xs text-text-muted">Tentukan jenjang pendidikan dan periode gelombang pendaftaran calon santri.</p>
                </div>

                {/* Pilihan Gelombang */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                    Gelombang Pendaftaran <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { val: "Gelombang 1 (Early Bird)", desc: "Potongan Uang Gedung 20% • Kuota Terbatas", badge: "Diskon 20%" },
                      { val: "Gelombang 2 (Reguler)", desc: "Potongan Uang Gedung 10%", badge: "Reguler" },
                    ].map((w) => (
                      <label
                        key={w.val}
                        className={`relative flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          formData.wave === w.val
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm text-secondary">{w.val}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            {w.badge}
                          </span>
                        </div>
                        <span className="text-xs text-text-muted">{w.desc}</span>
                        <input
                          type="radio"
                          name="wave"
                          value={w.val}
                          checked={formData.wave === w.val}
                          onChange={handleChange}
                          className="sr-only"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pilihan Unit */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                    Pilihan Unit Pendidikan <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { id: "TKIT", title: "TKIT Darut Taufiq", age: "Usia 4 - 6 Tahun", desc: "Tahfidz Ceria & Karakter" },
                      { id: "SDIT", title: "SDIT Darut Taufiq", age: "Usia 6 - 12 Tahun", desc: "Fullday • Tahfidz & Cambridge" },
                      { id: "SMPIT", title: "SMPIT & Pesantren", age: "Usia 12 - 15 Tahun", desc: "Boarding / Fullday • Tahfidz 30 Juz" },
                    ].map((u) => (
                      <label
                        key={u.id}
                        className={`flex flex-col justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                          formData.unit === u.id
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center mb-3">
                            <FaUserGraduate />
                          </div>
                          <h4 className="font-bold text-sm text-secondary mb-1">{u.title}</h4>
                          <span className="text-[11px] font-semibold text-primary block mb-1">{u.age}</span>
                          <p className="text-xs text-text-muted">{u.desc}</p>
                        </div>
                        <input
                          type="radio"
                          name="unit"
                          value={u.id}
                          checked={formData.unit === u.id}
                          onChange={handleChange}
                          className="sr-only"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pilihan Program (Khusus SMPIT bisa Boarding/Fullday) */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                    Tipe Program <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {formData.unit === "SMPIT" ? (
                      <>
                        <label
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                            formData.programType === "Boarding"
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="programType"
                            value="Boarding"
                            checked={formData.programType === "Boarding"}
                            onChange={handleChange}
                          />
                          <div>
                            <span className="font-bold text-sm text-secondary block">Boarding School (Mondok / Asrama)</span>
                            <span className="text-xs text-text-muted">Tinggal di asrama putra/putri, pembinaan 24 jam.</span>
                          </div>
                        </label>

                        <label
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                            formData.programType === "Fullday"
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="programType"
                            value="Fullday"
                            checked={formData.programType === "Fullday"}
                            onChange={handleChange}
                          />
                          <div>
                            <span className="font-bold text-sm text-secondary block">Fullday School (Non-Asrama)</span>
                            <span className="text-xs text-text-muted">Senin - Jumat pulang sore hari.</span>
                          </div>
                        </label>
                      </>
                    ) : (
                      <div className="sm:col-span-2 p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-700 flex items-center gap-3">
                        <FaHome className="text-primary text-xl shrink-0" />
                        <span>Untuk jenjang <strong>{formData.unit}</strong>, program yang berjalan adalah <strong>Fullday School</strong> (pembelajaran harian).</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: DATA CALON SANTRI */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-1.5 h-5 bg-primary rounded-full inline-block shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Basic Data</h3>
                  </div>
                  <p className="text-xs text-text-muted">Lengkapi data pribadi calon peserta didik sesuai dokumen resmi (Akta / Kartu Keluarga).</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Nama Lengkap Santri <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Sesuai akta kelahiran"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Nama Panggilan</label>
                    <input
                      type="text"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleChange}
                      placeholder="Nama panggilan sehari-hari"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Jenis Kelamin <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    >
                      <option value="Laki-laki">Laki-laki (Ikhwan)</option>
                      <option value="Perempuan">Perempuan (Akhwat)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Tempat Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="birthPlace"
                      value={formData.birthPlace}
                      onChange={handleChange}
                      required
                      placeholder="Kota kelahiran, misal: Jakarta"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Tanggal Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">NIK Santri (Opsional)</label>
                    <input
                      type="text"
                      name="nik"
                      value={formData.nik}
                      onChange={handleChange}
                      placeholder="16 digit nomor NIK di KK"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">NISN (Jika Ada)</label>
                    <input
                      type="text"
                      name="nisn"
                      value={formData.nisn}
                      onChange={handleChange}
                      placeholder="Nomor Induk Siswa Nasional"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Asal Sekolah Sebelumnya</label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      placeholder="TK / SD / MI asal"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Hafalan Al-Qur'an Saat Ini</label>
                    <select
                      name="quranMemorized"
                      value={formData.quranMemorized}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    >
                      <option value="Belum Ada">Belum Ada / Iqro</option>
                      <option value="Juz 30">Sebagian Juz 30 (Surat Pendek)</option>
                      <option value="1-2 Juz">1 - 2 Juz</option>
                      <option value="3-5 Juz">3 - 5 Juz (Potensi Jalur Beasiswa)</option>
                      <option value=">5 Juz">&gt; 5 Juz (Jalur Beasiswa Tahfidz)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: DATA ORANG TUA / WALI */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-1.5 h-5 bg-primary rounded-full inline-block shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Additional Data</h3>
                  </div>
                  <p className="text-xs text-text-muted">Pastikan nomor WhatsApp aktif untuk menerima kode verifikasi dan informasi jadwal tes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Nama Ayah / Wali <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                      placeholder="Nama lengkap ayah/wali"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Pekerjaan Ayah</label>
                    <input
                      type="text"
                      name="fatherJob"
                      value={formData.fatherJob}
                      onChange={handleChange}
                      placeholder="PNS / Swasta / Wiraswasta / dll."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Nama Ibu <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      required
                      placeholder="Nama lengkap ibu kandung"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Pekerjaan Ibu</label>
                    <input
                      type="text"
                      name="motherJob"
                      value={formData.motherJob}
                      onChange={handleChange}
                      placeholder="Ibu Rumah Tangga / PNS / dll."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      placeholder="Contoh: 08123456789"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                    <span className="text-[10px] text-text-muted">Nomor ini akan digunakan panitia untuk konfirmasi pendaftaran.</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Email (Opsional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alamat@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">
                      Alamat Lengkap Tempat Tinggal <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota/Kabupaten, Kode Pos"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all resize-y"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: KONFIRMASI & CATATAN */}
            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-1.5 h-5 bg-primary rounded-full inline-block shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">Qualifications & Attachments</h3>
                  </div>
                  <p className="text-xs text-text-muted">Periksa kembali ringkasan data sebelum melakukan pengiriman formulir pendaftaran.</p>
                </div>

                {/* Ringkasan Data */}
                <div className="bg-surface rounded-2xl p-6 border border-gray-200 space-y-4 text-xs">
                  <h4 className="font-bold text-secondary text-sm pb-2 border-b border-gray-200 flex items-center justify-between">
                    <span>Ringkasan Calon Santri:</span>
                    <span className="text-primary font-semibold">{formData.unit} • {formData.programType}</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-gray-500 block">Nama Lengkap:</span>
                      <span className="font-bold text-secondary text-sm">{formData.fullName || "-"}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Jenis Kelamin:</span>
                      <span className="font-bold text-secondary">{formData.gender}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Tempat, Tanggal Lahir:</span>
                      <span className="font-bold text-secondary">{formData.birthPlace}, {formData.birthDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Gelombang:</span>
                      <span className="font-bold text-secondary">{formData.wave}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Nama Orang Tua (Ayah / Ibu):</span>
                      <span className="font-bold text-secondary">{formData.fatherName} / {formData.motherName}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">WhatsApp:</span>
                      <span className="font-bold text-secondary">{formData.whatsapp}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-gray-500 block">Alamat Domisili:</span>
                    <span className="font-medium text-gray-800">{formData.address}</span>
                  </div>
                </div>

                {/* Catatan Kesehatan */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700">
                    Catatan Riwayat Kesehatan / Alergi Santri (Opsional)
                  </label>
                  <textarea
                    name="medicalNotes"
                    value={formData.medicalNotes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Misal: ada alergi obat tertentu, asma, atau catatan khusus lainnya."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all resize-y"
                  />
                </div>

                {/* Checkbox Persetujuan */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                    <span className="text-xs text-emerald-950 leading-relaxed">
                      Saya menyatakan dengan sungguh-sungguh bahwa seluruh data yang diisi adalah <strong>benar dan dapat dipertanggungjawabkan</strong>. Saya bersedia mengikuti seluruh tahapan seleksi dan mematuhi tata tertib Pondok Pesantren Darut Taufiq.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-secondary font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <FaArrowLeft className="text-xs" /> Sebelumnya
                </button>
              ) : (
                <Link
                  href="/ppdb"
                  className="text-xs font-semibold text-text-muted hover:text-secondary transition-colors"
                >
                  ← Batal & Kembali
                </Link>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-md text-sm flex items-center gap-2"
                >
                  Lanjutkan <FaArrowRight className="text-xs" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading || !formData.agreement}
                  className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      <FaCheckCircle /> Kirim Formulir Pendaftaran
                    </>
                  )}
                </button>
              )}
            </div>

          </form>
        </div>

        {/* Right: Floating Profile Preview Card (matching Image 1) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-100 flex flex-col items-center">
            {/* Profile Avatar with Teal Ring */}
            <div className="relative mb-2">
              <div className="w-20 h-20 rounded-full p-1 border-2 border-primary flex items-center justify-center bg-emerald-50/50 shadow-inner overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {formData.fullName
                    ? formData.fullName
                        .split(" ")
                        .filter(Boolean)
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()
                    : <FaUser className="text-xl text-primary" />}
                </div>
              </div>
            </div>

            {/* Percentage Complete */}
            <span className="text-xs font-bold text-primary tracking-wide">
              {step === 1 ? "25%" : step === 2 ? "50%" : step === 3 ? "75%" : "100%"} Selesai
            </span>

            {/* Name */}
            <h4 className="font-bold text-gray-900 text-sm mt-1 text-center line-clamp-1">
              {formData.fullName || "Calon Santri Baru"}
            </h4>

            {/* Subtitle / Nickname or WA */}
            <p className="text-[11px] text-gray-400 text-center line-clamp-1 mb-3">
              {formData.nickname ? `Panggilan: ${formData.nickname}` : (formData.whatsapp ? `WA: 0${formData.whatsapp.replace(/^0+/, '')}` : "Data Calon Santri")}
            </p>

            {/* Divider */}
            <div className="w-full border-t border-gray-100 my-1" />

            {/* Key-Value Details (Disesuaikan dengan Basic Data Santri) */}
            <div className="w-full space-y-2.5 text-xs pt-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium">Jenis Kelamin</span>
                <span className="font-semibold text-gray-800">{formData.gender}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium">Tempat Lahir</span>
                <span className="font-semibold text-gray-800 truncate max-w-[140px] text-right">
                  {formData.birthPlace || "-"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium">Tanggal Lahir</span>
                <span className="font-semibold text-gray-800">
                  {formatDateDisplay(formData.birthDate)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium">Usia Santri</span>
                <span className="font-semibold text-gray-800">
                  {calculateAge(formData.birthDate) !== "-" ? `${calculateAge(formData.birthDate)} Tahun` : "-"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium">NIK Santri</span>
                <span className="font-semibold text-gray-800 truncate max-w-[140px] text-right">
                  {formData.nik || "-"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium">NISN</span>
                <span className="font-semibold text-gray-800 truncate max-w-[140px] text-right">
                  {formData.nisn || "-"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium">Asal Sekolah</span>
                <span className="font-semibold text-gray-800 truncate max-w-[140px] text-right">
                  {formData.previousSchool || "-"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium">Hafalan Qur'an</span>
                <span className="font-semibold text-emerald-700 truncate max-w-[140px] text-right">
                  {formData.quranMemorized || "Belum Ada"}
                </span>
              </div>

              {/* Step 1 Unit Info */}
              <div className="flex justify-between items-center pt-2.5 border-t border-gray-100">
                <span className="text-gray-400 font-medium">Unit Pendidikan</span>
                <span className="font-bold text-primary">{formData.unit} ({formData.programType})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-medium">Gelombang</span>
                <span className="font-semibold text-gray-700 text-[11px]">
                  {formData.wave.includes("Early") ? "Gel. 1 (Early Bird)" : "Gel. 2 (Reguler)"}
                </span>
              </div>
            </div>
          </div>

          {/* Security Banner */}
          <div className="bg-white/80 border border-emerald-200/70 rounded-2xl p-4 text-xs text-text-muted flex items-start gap-3 shadow-sm backdrop-blur-sm">
            <FaShieldAlt className="text-primary text-base shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-secondary text-[12px] mb-0.5">Data Aman & Terenkripsi</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Data calon santri terlindungi dan diproses langsung oleh Panitia PPDB Pondok Pesantren Darut Taufiq.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function PPDBDaftarPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF5] relative overflow-hidden pt-28 lg:pt-36 pb-24 px-4 sm:px-6 lg:px-12">
      {/* Decorative Background Shapes like in Review Google section */}
      <div className="absolute top-0 -left-20 w-[40%] md:w-[30%] lg:w-[25%] h-full bg-white/60 skew-x-[25deg] origin-bottom-left pointer-events-none" />
      <div className="absolute top-0 -right-20 w-[40%] md:w-[30%] lg:w-[25%] h-full bg-white/60 -skew-x-[25deg] origin-bottom-right pointer-events-none" />

      {/* Subtle Topographic Wireframe Mesh Background in top right */}
      <div className="absolute top-0 right-0 w-[550px] md:w-[680px] h-[350px] md:h-[450px] pointer-events-none opacity-25 overflow-hidden select-none">
        <svg viewBox="0 0 680 450" className="w-full h-full text-primary/15" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* Topographic elevation curves */}
          <path d="M50,40 Q220,10 400,50 T700,30" />
          <path d="M30,85 Q240,40 430,95 T720,65" />
          <path d="M15,130 Q260,70 460,140 T740,105" />
          <path d="M0,175 Q280,110 490,185 T760,145" />
          <path d="M-15,220 Q300,150 520,230 T780,185" />
          <path d="M-30,265 Q320,190 550,275 T800,225" />
          <path d="M-45,310 Q340,230 580,320 T820,265" />
          <path d="M-60,355 Q360,270 610,365 T840,305" />
          {/* 3D mesh wireframe diagonal grid lines */}
          <path d="M120,-30 L300,450" strokeDasharray="3 3" opacity="0.6" />
          <path d="M200,-30 L380,450" strokeDasharray="3 3" opacity="0.6" />
          <path d="M280,-30 L460,450" strokeDasharray="3 3" opacity="0.6" />
          <path d="M360,-30 L540,450" strokeDasharray="3 3" opacity="0.6" />
          <path d="M440,-30 L620,450" strokeDasharray="3 3" opacity="0.6" />
          <path d="M520,-30 L700,450" strokeDasharray="3 3" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Suspense fallback={<div className="text-center py-20 text-text-muted">Memuat formulir...</div>}>
          <RegistrationFormContent />
        </Suspense>
      </div>
    </main>
  );
}
