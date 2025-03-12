"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useState } from "react";

function BotonLeerMas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const alertMessage =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente commodi maxime dolore nostrum at possimus molestias voluptate repudiandae.";


  return (
    <div className="sm:hidden smd:hidden md:flex md">
      <button
        className="sm:flex sm:justify-center sm:items-center sm:w-80 smd:w-auto bg-transparent rounded-full border border-gray-400 sm:mb-0 md:mb-8 md:mt-8 lg:mb-12 xl:mb-16 flex items-center justify-center w-auto hover:bg-white/10"
        onClick={openModal}
      >
        <span className="text-slate-400 hover:text-white text-sm flex flex-row items-center justify-center px-3 py-2">
          Descubre nuestras ultimas actulizaciones de funciones.{" "}
          <p className="font-bold text-white ml-1">Leer más</p>{" "}
          <ArrowRight className="w-3 h-3 ml-1 text-white font-extrabold transition-transform duration-300 hover:translate-x-1" />
        </span>
      </button>

      {/* Alert */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">{alertMessage}</h2>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BotonLeerMas;
