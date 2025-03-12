"use client"
import React from 'react'
import Image from 'next/image'
import { logos } from "../data/slider.empresas";

const Slider = () => {

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full my-5">
      <div className="flex items-center space-x-10 animate-marquee ">
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt={`Logo ${index}`} width={200} height={60} className='xl:w-24 lg:w-24 md:w-24 smd:w-20 sm:w-20 h-auto' />
        ))}
        {logos.map((logo, index) => (
          <Image key={`duplicate-${index}`} src={logo} alt={`Logo ${index}`} width={400} height={200} className='xl:w-24 lg:w-24 md:w-24 smd:w-20 sm:w-20 h-auto' />
        ))}
      </div>
    </div>
  )
}

export default Slider