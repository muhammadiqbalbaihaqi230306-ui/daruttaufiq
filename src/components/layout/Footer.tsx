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

const instagramPosts = [
  { id: 1, image: "/images/ig/ig-1.jpg", link: "https://www.instagram.com/p/DaCvH6BPiYn/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: 2, image: "/images/ig/ig-2.jpg", link: "https://www.instagram.com/p/DTjYkVzkqA6/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: 3, image: "/images/ig/ig-3.jpg", link: "https://www.instagram.com/reel/DdV50xjvrqJ/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: 4, image: "/images/ig/ig-4.jpg", link: "https://www.instagram.com/reel/DdQLx_UBp13/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: 5, image: "/images/ig/ig-5.jpg", link: "https://www.instagram.com/reel/DdD2uzQgVva/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
  { id: 6, image: "/images/ig/ig-6.jpg", link: "https://www.instagram.com/reel/DcyY9fITXwD/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - School Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-pondokk.png"
                alt="Pondok Modern"
                width={72}
                height={72}
                className="h-14 w-auto"
              />
              <div className="flex flex-col justify-center font-serif text-white mt-1">
                <span className="text-lg lg:text-xl uppercase tracking-wider leading-none whitespace-nowrap">DARUT TAUFIQ</span>
                <span className="text-[9px] lg:text-[11px] uppercase tracking-[0.2em] leading-tight mt-1 whitespace-nowrap">PONDOK PESANTREN</span>
              </div>
            </div>
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
                  href="mailto:info@daruttaufiq.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <FaEnvelope className="text-lg flex-shrink-0" />
                  <span>info@daruttaufiq.com</span>
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
              {instagramPosts.map((post) => (
                <Link
                  key={post.id}
                  href={post.link}
                  target="_blank"
                  className="group relative aspect-square bg-white/10 rounded overflow-hidden block"
                >
                  <Image
                    src={post.image}
                    alt="Instagram post"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaInstagram className="text-white text-xl" />
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
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Pondok Pesantren Darut Taufiq
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/ponpesdaruttaufiq?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              aria-label="Instagram"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://www.tiktok.com/@ponpes.darut.taufiq?_r=1&_t=ZS-99xQlp7LLpn"
              target="_blank"
              aria-label="TikTok"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <FaTiktok size={18} />
            </Link>
            <Link
              href="https://www.youtube.com/@daruttaufiqtv"
              target="_blank"
              aria-label="YouTube"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <FaYoutube size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/share/1CAZB2ZE1M/"
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
