"use client";
import { FaWhatsapp } from "react-icons/fa";

const BotonFlotante = () => {
  return (
    <div
      className="fixed z-50 right-10 bottom-10 rounded-full cursor-pointer hover:text-white/80 text-white dark:text-white shadow-lg dark:shadow-white/10 shadow-black/10 hover:opacity-70 transition-all duration-300 hover:scale-105"
      onClick={() => {
        window.open("https://wa.me/34675464502", "_blank");
      }}
    >
      <div className="w-20 h-20 bg-green-600/10 rounded-full mx-auto flex items-center justify-center">
        <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center animate-pulse">
            <FaWhatsapp className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotonFlotante;
