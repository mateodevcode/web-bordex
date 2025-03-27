import Link from "next/link";
import { links, socialLinks } from "../data/enlaces.footer";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 md:py-12 text-sm w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex flex-row items-center justify-center my-5 font-[family-name:var(--font-quicksand)]  w-full">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-semibold xl:text-base lg:text-base md:text-sm smd:text-xs sm:text-xs xl:mx-5 lg:mx-5 md:mx-3 smd:mx-2 sm:mx-2"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-row justify-center items-center my-5">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="text-gray-700 hover:text-blue-600  xl:text-base lg:text-base md:text-base smd:text-sm sm:text-sm xl:mx-8 lg:mx-8 md:mx-6 smd:mx-6 sm:mx-6"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center my-12 text-gray-400 xl:text-base lg:text-base md:text-sm smd:text-sm sm:text-xs">
        &copy; 2025 Desarrollado por{" "}
        <Link
          className="font-semibold font-sans hover:text-gray-500"
          href={"https://seventwo.tech"}
          target="_blank"
        >
          Seventwo Technologies
        </Link>
        . Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
