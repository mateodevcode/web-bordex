"use client";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { plans } from "../data/plans";
import { useState } from "react";

function Precios() {
  const [plann, setPlann] = useState(1);

  return (
    <section
      id="precios"
      className="w-full flex flex-col items-center py-12 md:py-20 lg:py-10 pb-10 mt-14 justify-center bg-gray-50 h-screen"
    >
      <div className="container px-4 mb-1 md:px-1">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="">
            <h2 className="mb-6 text-slate-900 font-medium xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl smd:text-2xl">
              Elige el plan ideal para tu negocio
            </h2>
            <p className="inline-block rounded-lg px-3 mb-8 text-gray-600 xl:text-lg lg:text-lg md:text-base sm:text-sm smd:text-base">
              Simplifica la gestión de inventarios con nuestros planes
              flexibles. Encuentra la solución perfecta para tu empresa.
            </p>
          </div>
        </div>

        {/* Recuadros */}
        <div className="lg:mx-auto grid lg:max-w-7xl md:max-w-3xl sm:grid-cols-1 smd:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-6 xl:gap-8 sm:space-y-4 lg:space-y-0 md:space-y-0 mt-10">
          {plans.map((plan, index) => (
            <div
              onClick={() => setPlann(index)}
              key={index}
              className={`flex flex-col justify-between rounded-2xl h-12/12 border p-6 shadow-md hover:bg-blue-600/5 select-none hover:scale-105 transition-transform duration-300 ${
                index === plann ? "bg-blue-600/5 scale-105" : "bg-white"
              }`}
            >
              <div className="flex flex-col text-slate-900">
                <div className="space-y-2">
                  <h3 className="text-xl text-center font-bold">
                    {plan.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-row items-end justify-center">
                  <span className="text-4xl font-bold text-blue-600/50">
                    {plan.price}
                  </span>
                  <span className="font-bold text-gray-700 ml-1">COP/</span>
                  <span className="ml-1 text-sm text-gray-600">mes</span>
                </div>
                <ul className="mt-10 space-y-2 font-semibold mb-8">
                  <>
                    {/* Beneficios */}
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex gap-2 items-start justify-start text-sm"
                      >
                        <IoCheckmarkCircleOutline className="h-5 w-5 mt-0.5 text-green-600" />
                        <span className="">{feature}</span>
                      </li>
                    ))}
                    {/* No hay beneficios */}
                    {plan?.noFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex gap-2 items-start justify-start text-sm"
                      >
                        <IoCloseCircleOutline className="h-5 w-5 mt-0.5 text-red-700" />
                        <span className="">{feature}</span>
                      </li>
                    ))}
                  </>
                </ul>
              </div>
              <button className="mt-8 bg-blue-600 text-white rounded-full w-auto py-2 hover:bg-blue-500">
                Suscribirse
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Precios;
