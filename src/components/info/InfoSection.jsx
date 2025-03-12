"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BotonLeerMas from "/src/components/info/BotonLeerMas";
import Link from "next/link";

function InfoSection() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full relative sm:pt-20 smd:pt-0 mb-8">
        <Image
          className="w-full h-auto overflow-hidden filter brightness-50"
          src={"https://i.postimg.cc/YqXcyMBJ/ai-generated-8704020.jpg"}
          alt="Gestión de inventarios simplificada"
          layout="responsive"
          width={1680}
          height={1240}
        />

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
          <div className="flex sm:flex-row sm:w-screen sm:justify-center sm:gap-2 smd:flex-row smd:w-screen smd:justify-center smd:gap-4 md:flex-row md:w-screen md:gap-6 mt-6 w-auto items-center">
 </div>         {/* Boton 1 */}
          <Link href={"/explorar-mas"}>
            <button className="sm:text-sm sm:px-3 sm:w-auto sm:text-center smd:text-sm smd:px-3 smd:w-auto smd:text-center md:text-xl lg:text-base md:px-4 bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-lg">
              Explorar Funciones
            </button>
          </Link>

          {/* Boton 2 */}
          <button className="flex flex-row items-center justify-center sm:text-sm sm:px-4 sm:w-auto smd:text-sm smd:px-3 smd:w-auto smd:text-center md:text-xl md:px-4 lg:text-base text-white py-2 px-8 rounded-lg hover:bg-white/10 ">
            <p className="font-bold">Conoce Más </p>{" "}
            <ArrowRight className="w-4 h-4 ml-1 text-white font-extrabold transition-transform duration-300 hover:translate-x-1" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
