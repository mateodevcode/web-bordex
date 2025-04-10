"use client";
import React from "react";
import Image from "next/image";
import { logos } from "../data/slider.empresas";

const Slider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full xl:my-5 lg:my-5 md:my-3 smd:my-0 sm:my-0">
      {/* Degradados en los extremos */}
      <div className="absolute top-0 left-0 xl:w-96 lg:w-96 md:w-20 smd:w-10 sm:w-10 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 xl:w-96 lg:w-96 md:w-20 smd:w-20 sm:w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      <div className="flex items-center space-x-20 animate-marquee">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            width={200}
            height={60}
            className="xl:w-24 lg:w-24 md:w-24 smd:w-20 sm:w-20 h-auto"
          />
        ))}
        {logos.map((logo, index) => (
          <Image
            key={`duplicate-${index}`}
            src={logo}
            alt={`Logo ${index}`}
            width={400}
            height={200}
            className="xl:w-24 lg:w-24 md:w-24 smd:w-20 sm:w-20 h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
