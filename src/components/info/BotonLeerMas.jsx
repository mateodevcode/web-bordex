"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

function BotonLeerMas() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }} // Cada elemento comienza invisible y desplazado hacia abajo.
      whileInView={{ opacity: 1, scale: 1 }} //Se anima cuando entra en la vista.
      transition={{ duration: 0.5, ease: "easeOut" }} //Cada elemento se retrasa según su índice.
      viewport={{ once: true, amount: 0.1 }}
      className="sm:hidden smd:hidden md:flex md"
    >
      <button className="sm:flex sm:justify-center sm:items-center sm:w-80 smd:w-auto rounded-full border border-gray-500 sm:mb-0 md:mb-8 md:mt-8 lg:mb-12 xl:mb-16 flex items-center justify-center w-auto bg-white/5 hover:bg-white/10">
        <span className="text-sm flex flex-row items-center justify-center px-3 py-2 text-white font-semibold">
          Descubre nuestras ultimas actulizaciones de funciones.{" "}
          <p className="font-bold text-white ml-3">Leer más</p>{" "}
          <ArrowRight className="w-3 h-3 ml-1 text-white font-extrabold transition-transform duration-300 hover:translate-x-1" />
        </span>
      </button>
    </motion.div>
  );
}

export default BotonLeerMas;
