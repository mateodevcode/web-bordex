"use client";
import { features } from "../data/seccion.caracteristics";
import Link from "next/link";
import { motion } from "motion/react";

export default function Caracteristics() {
  return (
    <section className="w-full bg-zinc-50 pb-32 xl:pt-32 lg:pt-32 md:pt-24 smd:pt-24 sm:pt-20">
      <motion.div className="flex xl:flex-row lg:flex-row md:flex-col smd:flex-col sm:flex-col items-center justify-center space-y-8 lg:space-y-0 text-center max-w-full">
        {/* primer */}
        <motion.div
          transition={{ duration: 1.0, ease: "easeInOut" }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className=" flex flex-col space-y-7 xl:w-5/12 lg:w-5/12 md:w-5/6 smd:w-full sm:w-full xl:px-20 lg:px-4 md:px-16 sm:px-4 smd:px-4"
        >
          {/* Titulo */}{" "}
          <h2 className=" text-3xl font-bold sm:text-2xl smd:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-slate-800">
            Cada vez más empresas confían en Bordex
          </h2>
          {/* Descripcion */}
          <p className="max-w-full text-gray-600 sm:text-sm sm:w-screen sm:px-8 smd:px-12 smd:text-base md:text-lg lg:text-xl xl:text-2xl md:px-16 font-medium ">
            Sigue estos pasos para implementar Bordex en tu negocio y maximizar
            la eficiencia.
          </p>
          {/* Solicita */}
          <Link
            className="sm:text-sm sm:w-max smd:text-base smd:w-max smd:mx-auto md:text-lg lg:text-xl xl:text-xl md:w-max text-center  mx-auto font-bold text-blue-500 hover:text-blue-600 cursor-pointer bg-white hover:bg-white/50 px-6 py-3 rounded-full shadow-sm shadow-black/10"
            href="https://api.whatsapp.com/send/?phone=34675464502&text=Me+gustaria+un+demo+de+BordeX&type=phone_number&app_absent=0"
          >
            Solicita una asesoría gratuita
          </Link>
        </motion.div>

        {/* Recuadros */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, // Tiempo entre cada elemento
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-3 lg:gap-y-3 mx-auto xl:w-5/12 lg:w-6/12 md:w-5/6 smd:w-full sm:w-full xl:px-0 lg:px-0 md:px-0 sm:px-4 smd:px-4 xl:pt-0 lg:pt-0 md:pt-10 smd:pt-10 sm:pt-10"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="sm:min-w-sm sm:mx-auto smd:mx-w-md px-4 p-8 lg:p-3 xl:p-6 flex flex-col justify-center items-start sm:space-y-4 bg-white rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bgColor} flex flex-col items-center justify-center`}
              >
                {feature.icon}
              </div>
              <div className="flex flex-col text-start space-y-4">
                <div className="space-y-3">
                  <h3 className="xl:text-2xl lg:text-xl md:text-2xl smd:text-xl sm:text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-medium xl:text-base lg:text-sm md:text-base smd:text-sm sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
