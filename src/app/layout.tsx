import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sekolah Islam Favorit & Terbaik di Kota Bekasi - Arkan Islamic School",
  description:
    "Kami Membantu orang tua mendidik putra-putrinya dalam menemukan & mengembangkan potensi siswa sesuai bakatnya dengan berbagai program.",
  keywords: [
    "sekolah islam",
    "sekolah islam bekasi",
    "arkan islamic school",
    "sekolah islam terpadu",
    "SDIT",
    "SMPIT",
    "TKIT",
  ],
  openGraph: {
    title: "Sekolah Islam Favorit & Terbaik di Kota Bekasi - Arkan Islamic School",
    description:
      "Kami Membantu orang tua mendidik putra-putrinya dalam menemukan & mengembangkan potensi siswa sesuai bakatnya dengan berbagai program.",
    url: "https://arkan.sch.id/",
    siteName: "Arkan Islamic School",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
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
