import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebookF,
  FaSchool,
  FaUserFriends,
  FaUsers,
  FaKey,
  FaProjectDiagram,
  FaBuilding,
  FaMoneyBillWave,
  FaQuestionCircle,
} from "react-icons/fa";

const profilLinks = [
  { label: "Sejarah Sekolah", href: "/sejarah", icon: FaSchool },
  { label: "Manajemen", href: "/manajemen", icon: FaUserFriends },
  { label: "Staff & Pengajar", href: "/pengajar", icon: FaUsers },
  { label: "Nilai & Budaya", href: "/values", icon: FaKey },
];

const infoLinks = [
  { label: "Program Unggulan", href: "/program", icon: FaProjectDiagram },
  { label: "Sarana & Fasilitas", href: "/fasilitas", icon: FaBuilding },
  { label: "Biaya Pendidikan", href: "/biaya", icon: FaMoneyBillWave },
  { label: "Frequently Asked Questions", href: "/faq", icon: FaQuestionCircle },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - School Info */}
          <div className="space-y-6">
            <Image
              src="/images/logo-arkan.png"
              alt="Arkan Islamic School"
              width={250}
              height={72}
              className="h-14 w-auto"
            />
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link
                  href="https://wa.me/6282228880972"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <FaWhatsapp className="text-lg flex-shrink-0" />
                  <span>+6282228880972</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@arkan.sch.id"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <FaEnvelope className="text-lg flex-shrink-0" />
                  <span>info@arkan.sch.id</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:02182631191"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <FaPhoneAlt className="text-lg flex-shrink-0" />
                  <span>(021) 82631191</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://maps.app.goo.gl/L9u9kyvKpw287WDV8"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <FaMapMarkerAlt className="text-lg flex-shrink-0" />
                  <span>Jl. Bawang Raya No. 62 Bekasi</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Profil */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Profil</h4>
            <ul className="space-y-3">
              {profilLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-primary transition-colors"
                  >
                    <link.icon className="flex-shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Informasi */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informasi</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-sm text-white/80 hover:text-primary transition-colors"
                  >
                    <link.icon className="flex-shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Instagram */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Link
                  key={i}
                  href="https://www.instagram.com/arkan_islamicschool"
                  target="_blank"
                  className="aspect-square bg-white/10 rounded overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                    <FaInstagram className="text-white/30 text-xl" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Arkan Islamic School
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/arkan_islamicschool"
              target="_blank"
              aria-label="Instagram"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://www.tiktok.com/@arkan_islamicschool"
              target="_blank"
              aria-label="TikTok"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <FaTiktok size={18} />
            </Link>
            <Link
              href="https://www.youtube.com/@arkanschooltv"
              target="_blank"
              aria-label="YouTube"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <FaYoutube size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/arkanislamicschool"
              target="_blank"
              aria-label="Facebook"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <FaFacebookF size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
