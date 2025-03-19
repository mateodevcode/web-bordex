import { Input } from "@/src/components/ui/input";
import Link from "next/link";
import React from "react";

function Contactanos() {
  return (
    <section className="flex items-center justify-center min-h-scree py-20">
      <div className="bg-gray-100 px-72 py-20 rounded-lg shadow-xl border border-zinc-300 hover:border-gray-500 w-full max-w-6xl bg-gradient-to-tl from-gray-200 via-gray-100 to-gray-50">
        <h2 className="text-5xl font-bold text-gray-900 text-center tracking-tight mb-6">
          Contáctanos
        </h2>
        <p className="text-zinc-700 tracking-tight text-center mb-6">
          ¿Tienes preguntas? ¡Déjanos tu mensaje y te responderemos pronto!
        </p>

        <form action="#" method="POST" className="space-y-6">
          <div>
            <label className="block text-base text-gray-950 tracking-tight font-semibold mb-2">
              Nombre
            </label>
            <Input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-zinc-700 text-gray-800"
              placeholder="Tu nombre"
              required
            ></Input>
          </div>

          <div>
            <label className="block text-base text-gray-950 tracking-tight font-semibold mb-2">
              Correo Electrónico
            </label>
            <Input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-zinc-700 text-gray-800"
              placeholder="tucorreo@example.com"
              required
            ></Input>
          </div>

          <div>
            <label className="block text-base text-gray-950 tracking-tight font-semibold mb-2">
              Numero de telefono
            </label>
            <Input
              type="number"
              className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-zinc-700 text-gray-800"
              placeholder="+57 3023517337"
              required
            ></Input>
          </div>

          <div>
            <label className="block text-base text-gray-950 tracking-tight font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-zinc-700 text-gray-800"
              placeholder="Escribe tu mensaje"
              required
            ></textarea>
          </div>

          <Link href={""}>
            {" "}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Contactanos;
