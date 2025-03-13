"use client";
import BotonLeerMas from "/src/components/info/BotonLeerMas";
import { MdArrowForward } from "react-icons/md";

function InfoSection() {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="w-full relative h-[600px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/YqXcyMBJ/ai-generated-8704020.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-700/30"></div>
        <div className="flex flex-col items-center justify-center absolute inset-0 mx-auto">
          <BotonLeerMas />
          {/* Titulo */}
          <h1 className="sm:mt-16 sm:w-80 sm:text-3xl smd:min-w-96 smd:max-w-[769px] smd:mt-12 smd:text-4xl smd:mb-3 text-7xl md:w-dvw md:text-6xl md:text-center md:mt-0 md:mb-6 lg:mb-10 text-center font-semibold text-white sm:mx-auto">
            Gestión de Inventarios Simplificada
          </h1>
          {/* Descripcion */}
          <h2 className="sm:text-sm sm:w-72 sm:hidden smd:w-96 md:w-auto text-lg md:text-xl text-center text-gray-300 mt-4 mb-6">
            Optimiza tus procesos con Bordex, la herramienta ideal para el
            control eficiente de inventarios.
          </h2>
          {/* Botones */}
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col smd:flex-col justify-center items-center mt-5">
            {" "}
            {/* Botones */}
            {/* Boton 1 */}
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg font-semibold m-1">
              Explorar Funciones
            </button>
            {/* Boton 2 */}
            <button className="px-3 py-2 rounded-lg text-white hover:bg-white/10 flex flex-row justify-center items-center m-1">
              <p className="font-semibold">Conoce Más </p>{" "}
              <MdArrowForward className="text-white text-base ml-4" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
