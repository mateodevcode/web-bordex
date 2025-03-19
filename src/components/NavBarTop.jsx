"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { enlaces } from "../data/enlaces.navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <header
        className={`bg-white flex items-center justify-between p-1 shadow-md select-none rounded-full  z-50 fixed w-[90%] top-2 xl:h-16 lg:h-16 md:h-12 smd:h-12 sm:h-12 transition-all duration-500 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-md border-b border-white/30"
            : ""
        }`}
      >
        <div className="text-xl font-bold mx-4 cursor-pointer">
          <Link href="/">
            <Image
              src={"https://i.postimg.cc/8kfcxvVR/logo-bordex.png"}
              alt="Logo"
              width={50}
              height={50}
              className="sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
            />
          </Link>
        </div>
        <nav className={`space-x-5 mx-4 xl:flex lg:flex md:hidden hidden`}>
          {enlaces.map((enlace, index) => (
            <Link
              key={index}
              href={enlace.href}
              className="hover:text-blue-600 font-semibold xl:px-4 lg:px-3 md:px-2"
            >
              {enlace.nombre}
            </Link>
          ))}
        </nav>
        <div className="space-x-4 mr-2 font-semibold md:translate-x-48 xl:translate-x-0 lg:translate-x-0 xl:flex lg:flex md:hidden sm:hidden smd:hidden">
          <button className="text-sm rounded-full px-4 py-2 flex items-center justify-center gap-2 flex-rows border-2 border-black  hover:bg-blue-600 hover:text-white hover:border-transparent">
            <Link href={`/contactanos`}>Contáctanos</Link>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none mx-4 xl:hidden lg:hidden md:flex smd:flex sm:flex"
        >
          {isOpen ? (
            <FaTimes className="xl:text-3xl lg:text-3xl md:text-2xl smd:text-2xl sm:text-2xl" />
          ) : (
            <FaBars className="xl:text-3xl lg:text-3xl md:text-2xl smd:text-2xl sm:text-2xl" />
          )}
        </button>

        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full z-20 rounded-lg bg-white shadow-md transition-all duration-300">
            <nav className="flex flex-col items-center space-y-4 py-4 ">
              {enlaces.map((enlace, index) => (
                <Link
                  key={index}
                  href={`${enlace.href}`}
                  className="hover:text-blue-600 font-semibold px-2"
                  onClick={closeMenu}
                >
                  {enlace.nombre}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
