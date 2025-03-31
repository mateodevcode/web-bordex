"use client";
import { Check, Plus, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export default function MicroDashboard() {
  const data = [
    "Automatiza tu control de inventario",
    "Reduce costos en la gestión de pedidos",
    "Optimiza la administración de nómina",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto mb-8 xl:h-[400px] lg:h-[400px] md:h-[650px] sm:h-[800px] smd:h-[800px]"
    >
      <div className=" rounded-3xl p-6 flex flex-col md:flex-row gap-6 flex-1">
        {/* Users Card */}
        <div className="bg-[#B3F4F1] rounded-2xl p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Inventario</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">14,872</h3>
                <span className="text-xs font-medium text-green-600">
                  +6.4%
                </span>
              </div>
            </div>
            <div className="bg-white p-2 rounded-full">
              <Plus className="h-4 w-4 text-[#B3F4F1]" />
            </div>
          </div>
          <div className="mt-auto">
            <svg
              className="w-full h-16"
              viewBox="0 0 200 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 40 C20 35, 40 15, 60 25 C80 35, 100 30, 120 20 C140 10, 160 25, 180 20 C200 15, 220 30, 240 25"
                stroke="#0FB5AE"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Subscriptions Card */}
        <div className="bg-[#FFD6D6] rounded-2xl p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Ventas</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">278,298</h3>
                <span className="text-xs font-medium text-green-600">+92%</span>
              </div>
            </div>
            <div className="bg-white p-2 rounded-full">
              <ShoppingBag className="h-4 w-4 text-[#FFD6D6]" />
            </div>
          </div>
          <div className="mt-auto flex items-end justify-between h-16">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-end gap-1 w-full"
              >
                <div
                  className="bg-white/80 w-2 rounded-full"
                  style={{ height: `${Math.random() * 30 + 10}px` }}
                ></div>
                <div
                  className="bg-white/80 w-2 rounded-full"
                  style={{ height: `${Math.random() * 20 + 5}px` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Profit Card */}
        <div className="bg-white rounded-2xl p-5 flex flex-col flex-1">
          <h3 className="text-lg font-medium mb-4">Beneficio Anual</h3>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm text-gray-500">Tasa de conversión</p>
              <p className="text-lg font-bold">18.4%</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-2 h-16 flex items-end">
              <svg
                className="w-full h-12"
                viewBox="0 0 200 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 30 C20 20, 40 40, 60 30 C80 20, 100 40, 120 30 C140 20, 160 40, 180 30"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-4 mt-auto">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">Pedidos totales</p>
                <p className="text-xs text-gray-500">5 clicks</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">$21,120.70</p>
                <p className="text-xs text-green-500">+13.2%</p>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">Stock inventarios</p>
                <p className="text-xs text-gray-500">12 clicks</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">$16,100.00</p>
                <p className="text-xs text-red-500">-7.6%</p>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">Pedidos en carrito</p>
                <p className="text-xs text-gray-500">24 views</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">$6,400.50</p>
                <p className="text-xs text-green-500">+9.3%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Promotional Content */}
      <div className="flex flex-col justify-center lg:w-1/4 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Optimiza tu gestión con Bordex
        </h2>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-base">{item}</p>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50">
                <Check className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-2">
            Saber más
          </button>
        </div>
      </div>
    </motion.div>
  );
}
