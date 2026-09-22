import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Sekolah Islam Favorit & Terbaik di Kota Bekasi - Pondok Pesantren Darut Taufiq",
  description:
    "Kami Membantu orang tua mendidik putra-putrinya dalam menemukan & mengembangkan potensi siswa sesuai bakatnya dengan berbagai program.",
  keywords: [
    "sekolah islam",
    "sekolah islam bekasi",
    "Pondok Pesantren Darut Taufiq",
    "sekolah islam terpadu",
    "SDIT",
    "SMPIT",
    "TKIT",
  ],
  openGraph: {
    title: "Sekolah Islam Favorit & Terbaik di Kota Bekasi - Pondok Pesantren Darut Taufiq",
    description:
      "Kami Membantu orang tua mendidik putra-putrinya dalam menemukan & mengembangkan potensi siswa sesuai bakatnya dengan berbagai program.",
    url: "https://daruttaufiq.com/",
    siteName: "Pondok Pesantren Darut Taufiq",
    locale: "id_ID",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} font-sans`}>
      <body className="font-sans antialiased">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
