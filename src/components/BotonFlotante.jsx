"use client"
import { PiCheckCircleFill } from "react-icons/pi";
import { IoSendSharp } from "react-icons/io5";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import { useState } from "react";

export function BotonFlotante() {
  const [mensaje, setMensaje] = useState("")
  const [show, setShow] = useState(false)


  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          className="fixed z-50 right-10 bottom-5 rounded-full cursor-pointer hover:text-white/80 text-white dark:text-white shadow-lg dark:shadow-white/10 shadow-black/10 hover:opacity-70 transition-all duration-300 hover:scale-105"
          onClick={() => window.open("https://wa.me/34675464502")}
        >
          <div className="w-20 h-20 bg-green-600/10 rounded-full mx-auto flex items-center justify-center">
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center animate-pulse">
                <FaWhatsapp className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 mr-10 h-80 bg-zinc-700/10 border-0 rounded-2xl shadow-lg dark:shadow-white/10">
        <div className="flex justify-between items-center flex-col h-full w-full rounded-xl overflow-hidden"
          style={{ backgroundImage: "url(fondo.jpg)" }}
        >
          <div className="w-full">
            <div className="h-10 bg-[#F0F2F5] w-full flex flex-row items-center justify-start px-4">
              <div className="bg-zinc-300 w-7 h-7 rounded-full flex items-center justify-center">
                <Image
                  src="/logo-bordex.png"
                  alt="Logo de Seventwo Technology"
                  width={50}
                  height={50}
                  className="w-6 h-6 p-1"
                />
              </div>
              <p className="ml-2 mr-1 font-semibold text-sm">
                Bordex
              </p>
              <PiCheckCircleFill className="text-green-600" />
            </div>
            <div className="w-full text-center">
              <span className="text-[10px] bg-sky-500 pb-0.5 text-zinc-100 px-3 rounded-full">
                Today
              </span>
            </div>
            <div className="w-full flex flex-col items-end justify-center h-20 mt-5">
              <div>
                <p className="text-black text-xs p-1.5 bg-green-300 rounded-sm w-52 mr-2">
                  ¡Hola! 👋 <span className="font-semibold">Bienvenido a BordeX.</span> 🚀 Ofrecemos un software de gestión y control de inventarios, como podemos ayudarte? 💬✨
                </p>
              </div>
            </div>

            {show && (
              <div className="w-full flex flex-col items-start justify-center h-20 mt-5">
              <div>
                <p className="text-black text-xs p-1.5 bg-white rounded-sm w-52 ml-2">
                  {mensaje}
                </p>
              </div>
            </div>
            )}
          </div>

          <div className="w-full flex flex-row items-center justify-between h-12 mt-5 bg-[#F0F2F5]">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              onChange={(e) => setMensaje(e.target.value)}
              className="w-60 h-10 rounded-md px-2 py-1.5 bg-white text-sm mx-2"
            />
            <button className="bg-green-500 hover:bg-green-600 rounded-full p-2 mx-2 cursor-pointer"
              onClick={() => {
                setShow(true)
                open("https://wa.me/34675464502?text=" + mensaje)
              }}
            ><IoSendSharp className="text-sm" /></button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
