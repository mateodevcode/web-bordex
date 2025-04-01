"use client";
import React, { useState } from "react";
import { BsPersonGear } from "react-icons/bs";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { LuNetwork } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { TbCalculatorFilled } from "react-icons/tb";
import * as motion from "motion/react-client";

import Microsecciones from "./Microsecciones";

function NavSecciones() {
  const [secciones, setSecciones] = useState("Dashboard");

  const buttons = [
    { icon: MdDashboard, label: "Dashboard" },
    { icon: LuNetwork, label: "Análitica" },
    { icon: TbCalculatorFilled, label: "Nomina" },
    { icon: TbDeviceDesktopCode, label: "Procesos" },
    { icon: BsPersonGear, label: "Usuarios" },
  ];

  return (
    <section className="p-6">
      <div className="w-full grid lg:grid-cols-5 sm:grid-cols-1 lg:max-w-7xl gap-2 mx-auto bg-white mb-6">
        {buttons.map((button, index) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.6 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            key={index}
            onClick={() => setSecciones(button.label)}
            className="relative flex flex-row justify-center items-center gap-2 py-3 rounded-lg overflow-hidden"
          >
            {secciones === button.label && (
              <motion.div
                layoutId="activeButton"
                className="absolute inset-0 bg-blue-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                exit={{ width: "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            )}
            <button.icon
              className={`text-xl z-10 ${
                secciones === button.label ? "text-white" : "text-gray-700"
              }`}
            />
            <p
              className={`font-semibold text-lg z-10 ${
                secciones === button.label ? "text-white" : "text-gray-700"
              }`}
            >
              {button.label}
            </p>
          </motion.button>
        ))}
      </div>

      <Microsecciones secciones={secciones} />
    </section>
  );
}

export default NavSecciones;
