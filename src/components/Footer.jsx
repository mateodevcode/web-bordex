import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const links = [
  { href: "/gallery", text: "Inicio" },
  { href: "/about", text: "¿Qué es Bordex?" },
  { href: "/precios", text: "Precios" },
  { href: "/contact", text: "Dashboard" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 md:px-32 md:py-12 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 lg:space-x-10 font-[family-name:var(--font-quicksand)]">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-semibold"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex space-x-10 mt-4 md:mt-0">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="text-gray-700 hover:text-blue-600"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center b-12 font-semibold text-gray-400">
        &copy; 2025 Desarrollado por{" "}
        <Link className="font-bold font-sans" href={""}>
          SevenTwo Technology
        </Link>
        . Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
