import React from "react";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  size?: number | string;
  className?: string;
}

function createIcon(iconClass: string, displayName: string) {
  const Component = React.forwardRef<HTMLElement, IconProps>(
    ({ size, className = "", style, ...props }, ref) => {
      const sizeStyle = size ? { fontSize: typeof size === "number" ? `${size}px` : size } : {};
      return (
        <i
          ref={ref}
          className={`${iconClass} inline-flex items-center justify-center align-middle ${className}`.trim()}
          style={{ ...sizeStyle, ...style }}
          {...props}
        />
      );
    }
  );
  Component.displayName = displayName;
  return Component;
}

// Flaticon UIcons (Rounded & Brands) mapping for all site icons
export const FaRegCalendarAlt = createIcon("fi-rr-calendar", "FaRegCalendarAlt");
export const FaCalendarAlt = createIcon("fi-rr-calendar", "FaCalendarAlt");
export const FaArrowRight = createIcon("fi-rr-arrow-right", "FaArrowRight");
export const FaArrowLeft = createIcon("fi-rr-arrow-left", "FaArrowLeft");
export const FaPrint = createIcon("fi-rr-print", "FaPrint");
export const FaTwitter = createIcon("fi-brands-twitter", "FaTwitter");
export const FaFacebook = createIcon("fi-brands-facebook", "FaFacebook");
export const FaFacebookF = createIcon("fi-brands-facebook", "FaFacebookF");
export const FaMoneyCheckDollar = createIcon("fi-rr-money-check-edit", "FaMoneyCheckDollar");
export const FaWallet = createIcon("fi-rr-wallet", "FaWallet");
export const FaBuildingColumns = createIcon("fi-rr-bank", "FaBuildingColumns");
export const FaMoneyBillTransfer = createIcon("fi-rr-money-bill-transfer", "FaMoneyBillTransfer");
export const FaCheckCircle = createIcon("fi-rr-check-circle", "FaCheckCircle");
export const FaHandsPraying = createIcon("fi-rr-praying-hands", "FaHandsPraying");
export const FaMosque = createIcon("fi-rr-mosque", "FaMosque");
export const FaBookQuran = createIcon("fi-rr-book-quran", "FaBookQuran");
export const FaClock = createIcon("fi-rr-clock", "FaClock");
export const FaLanguage = createIcon("fi-rr-language", "FaLanguage");
export const FaChevronDown = createIcon("fi-rr-angle-small-down", "FaChevronDown");
export const FaChevronUp = createIcon("fi-rr-angle-small-up", "FaChevronUp");
export const FaChevronRight = createIcon("fi-rr-angle-small-right", "FaChevronRight");
export const FiChevronRight = createIcon("fi-rr-angle-small-right", "FiChevronRight");
export const FiChevronLeft = createIcon("fi-rr-angle-small-left", "FiChevronLeft");
export const FaMapMarkerAlt = createIcon("fi-rr-marker", "FaMapMarkerAlt");
export const FaLocationDot = createIcon("fi-rr-marker", "FaLocationDot");
export const FaMapLocationDot = createIcon("fi-rr-map-marker", "FaMapLocationDot");
export const FaPhoneAlt = createIcon("fi-rr-phone-call", "FaPhoneAlt");
export const FaPhone = createIcon("fi-rr-phone-call", "FaPhone");
export const FaEnvelope = createIcon("fi-rr-envelope", "FaEnvelope");
export const FaWhatsapp = createIcon("fi-brands-whatsapp", "FaWhatsapp");
export const FaUserGraduate = createIcon("fi-rr-user-graduate", "FaUserGraduate");
export const FaBrain = createIcon("fi-rr-brain", "FaBrain");
export const FaLaptopCode = createIcon("fi-rr-laptop-code", "FaLaptopCode");
export const FaHandHoldingHeart = createIcon("fi-rr-heart-partner-handshake", "FaHandHoldingHeart");
export const FaUsers = createIcon("fi-rr-users", "FaUsers");
export const FaUserFriends = createIcon("fi-rr-users-alt", "FaUserFriends");
export const FaUser = createIcon("fi-rr-user", "FaUser");
export const FaUserCheck = createIcon("fi-rr-user-check", "FaUserCheck");
export const FaUserCircle = createIcon("fi-rr-circle-user", "FaUserCircle");
export const FaUserTie = createIcon("fi-rr-tie", "FaUserTie");
export const FaChalkboardTeacher = createIcon("fi-rr-chalkboard-user", "FaChalkboardTeacher");
export const FaBuildingUser = createIcon("fi-rr-users-alt", "FaBuildingUser");
export const FaShieldAlt = createIcon("fi-rr-shield-check", "FaShieldAlt");
export const FaSchool = createIcon("fi-rr-school", "FaSchool");
export const FaHome = createIcon("fi-rr-home", "FaHome");
export const FaFileInvoice = createIcon("fi-rr-file-invoice-dollar", "FaFileInvoice");
export const FaCheck = createIcon("fi-rr-check", "FaCheck");
export const FaFileAlt = createIcon("fi-rr-document", "FaFileAlt");
export const FaFileLines = createIcon("fi-rr-document", "FaFileLines");
export const FaClipboardList = createIcon("fi-rr-clipboard-list-check", "FaClipboardList");
export const FaListCheck = createIcon("fi-rr-list-check", "FaListCheck");
export const FaMoneyBillWave = createIcon("fi-rr-money-bill-wave", "FaMoneyBillWave");
export const FaExternalLinkAlt = createIcon("fi-rr-arrow-up-right-from-square", "FaExternalLinkAlt");
export const FaAward = createIcon("fi-rr-award", "FaAward");
export const FaMedal = createIcon("fi-rr-medal", "FaMedal");
export const FaIdCard = createIcon("fi-rr-id-badge", "FaIdCard");
export const FaNotesMedical = createIcon("fi-rr-notes-medical", "FaNotesMedical");
export const FaBook = createIcon("fi-rr-book-alt", "FaBook");
export const FaKey = createIcon("fi-rr-key", "FaKey");
export const FaInstagram = createIcon("fi-brands-instagram", "FaInstagram");
export const FaYoutube = createIcon("fi-brands-youtube", "FaYoutube");
export const FaTiktok = createIcon("fi-brands-tik-tok", "FaTiktok");
export const FaTimes = createIcon("fi-rr-cross-small", "FaTimes");
export const FaGlobe = createIcon("fi-rr-globe", "FaGlobe");
export const FaStar = createIcon("fi-sr-star", "FaStar");
export const FaProjectDiagram = createIcon("fi-rr-diagram-project", "FaProjectDiagram");
export const FaBuilding = createIcon("fi-rr-building", "FaBuilding");
export const FaQuestionCircle = createIcon("fi-rr-question", "FaQuestionCircle");
export const FaBars = createIcon("fi-rr-menu-burger", "FaBars");
export const FaSearch = createIcon("fi-rr-search", "FaSearch");
export const FaNewspaper = createIcon("fi-rr-newspaper", "FaNewspaper");

// Generic Flaticon Icon component if needed directly: <UIcon name="search" />
export function UIcon({
  name,
  type = "rr",
  className = "",
  size,
  style,
  ...props
}: IconProps & { name: string; type?: "rr" | "sr" | "br" | "brands" }) {
  const iconClass = type === "brands" ? `fi-brands-${name}` : `fi-${type}-${name}`;
  const sizeStyle = size ? { fontSize: typeof size === "number" ? `${size}px` : size } : {};
  return (
    <i
      className={`${iconClass} inline-flex items-center justify-center align-middle ${className}`.trim()}
      style={{ ...sizeStyle, ...style }}
      {...props}
    />
  );
}
