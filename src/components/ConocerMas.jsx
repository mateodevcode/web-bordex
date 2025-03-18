import Link from "next/link";
import { FaBox, FaChartBar, FaSyncAlt, FaRocket } from "react-icons/fa";

function ConocerMas() {
  return (
    <div>
      <section
        className="relative text-center py-32 bg-cover bg-center text-white flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/mrnjR70j/DALL-E-2025-03-14-21-28-56-A-modern-and-intuitive-inventory-management-system-interface-on-a-lapto.webp')",
        }}
      >
        <div className="bg-black bg-opacity-70 py-20 px-6 rounded-xl shadow-lg w-11/12">
          <h1 className="font-extrabold tracking-tight xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
            Optimiza tu Inventario con Tecnología de Punta
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 xl:text-lg lg:text-lg md:text-base text-sm sm:px-auto smd:px-8 md:px-">
            Automatiza procesos, reduce costos y mejora la eficiencia de tu
            almacén con nuestra solución inteligente.
          </p>
          <Link
            href="#beneficios"
            className="mt-8 inline-block bg-blue-600 text-white py-3 px-8 text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Explorar Beneficios
          </Link>
        </div>
      </section>

      <section id="beneficios" className="container mx-auto py-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Beneficios de Nuestro Sistema
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 px-4">
          {[
            {
              icon: <FaBox />,
              title: "Monitoreo en tiempo real",
              description:
                "Accede a datos actualizados de tu stock en cualquier momento y desde cualquier lugar.",
            },
            {
              icon: <FaChartBar />,
              title: "Reportes y análisis inteligentes",
              description:
                "Obtén información valiosa sobre tendencias y desempeño de inventarios para mejorar la toma de decisiones.",
            },
            {
              icon: <FaSyncAlt />,
              title: "Integración con otros sistemas",
              description:
                "Conéctalo fácilmente con Power BI y otros sistemas de gestión para mayor eficiencia.",
            },
            {
              icon: <FaRocket />,
              title: "Automatización de procesos",
              description:
                "Reduce tareas manuales y minimiza errores operativos con flujos de trabajo automatizados.",
            },
          ].map((beneficio, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl flex flex-col items-center text-center hover:shadow-2xl  transition duration-300 xl:p-9 lg:p-8 md:p-6 smd:p-7 sm:p-6 "
            >
              <div className="text-4xl text-blue-600">{beneficio.icon}</div>
              <h3 className="mt-6 font-semibold text-gray-800 xl:text-xl lg:text-xl md:text-xl smd:text-lg sm:text-lg">
                {beneficio.title}
              </h3>
              <p className="text-gray-600 mt-4 xl:w-4/6 lg:w-5/6 md:w-5/6 smd:w-5/6">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="casos-de-uso" className="bg-gray-50 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-2 text-gray-800">
          Casos de Éxito
        </h2>
        <div className="container mx-auto max-w-3xl bg-white p-10 rounded-2xl shadow-xl text-center">
          <p className="text-xl italic text-gray-700">
            Desde que implementamos Bordex, nuestro inventario se gestiona con
            total precisión y hemos logrado reducir pérdidas en un 80%.
          </p>
          <p className="mt-4 font-semibold text-gray-800">– Empresa XYZ</p>
        </div>
      </section>

      <section
        id="contacto"
        className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className=" flex flex-col items-center justify-center space-y-9 ">
          <h2 className="font-extrabold  xl:text-4xl lg:text-4xl md:text-3xl text-2xl">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="max-w-2xl mx-auto xl:text-lg lg:text-lg md:text-base smd:text-base sm:text-sm sm:px-5 smd:px-8 md:px-auto ">
            Descubre cómo Bordex puede revolucionar la gestión de tu inventario
            y llevar tu empresa al siguiente nivel.
          </p>

          <Link
            href="https://api.whatsapp.com/send/?phone=34675464502&text=Me+gustaria+un+demo+de+BordeX&type=phone_number&app_absent=0"
            className="bg-white text-blue-600 py-3 font-semibold rounded-full shadow-lg hover:text-blue-400 transition duration-300 xl:text-lg lg:text-lg md:text-base smd:text-base sm:text-sm xl:px-8 lg:px-8 md:px-7 smd:px-6 sm:px-5"
          >
            Solicita una Demostración
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ConocerMas;
