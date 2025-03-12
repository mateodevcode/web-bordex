"use client";
import React, { useState } from "react";
import { RiBankLine } from "react-icons/ri";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { LuNetwork } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

import Microsecciones from "./Microsecciones";

function NavSecciones() {
  const [secciones, setSecciones] = useState("Dashboard");

  const buttons = [
    {
      icon: MdDashboard,
      label: "Dashboard",
    },
    { icon: RiBankLine, label: "Payments" },
    {
      icon: TbDeviceDesktopCode,
      label: "Embedding",
    },
    { icon: LuNetwork, label: "Análitica" },
  ];

  return (
    <section className="p-6">
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-1 smd:grid-cols-1 lg:max-w-7xl md:gap-2 lg:gap-8 mx-auto sm:max-w-screen-sm smd:max-w-screen-smd md:max-w-screen-md mb-6 bg-white">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => setSecciones(button.label)}
            className={`flex flex-row justify-center items-center gap-2 py-3 rounded-lg  ${
              secciones === button.label
                ? "bg-blue-600 text-white hover:bg-blue-500"
                : "text-gray-700 hover:bg-blue-500/10 hover:text-blue-400"
            }`}
          >
            <button.icon className="text-xl" />
            <p className="font-semibold text-lg">{button.label}</p>
          </button>
        ))}
      </div>

      <Microsecciones secciones={secciones} />
    </section>
  );
}

export default NavSecciones;
