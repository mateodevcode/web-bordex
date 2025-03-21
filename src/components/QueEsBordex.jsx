import { FaRocket, FaLightbulb, FaGlobe } from "react-icons/fa";

function QueEsBordex() {
  const versiones = [
    {
      version: "Version 1.0 - 2023",
      icon: <FaRocket className="text-blue-600 inline-block mr-2" />,
      descripcion:
        "Lanzamiento inicial con funciones básicas de control de stock y reportes en tiempo real.",
    },
    {
      version: "Version 2.0 - 2024",
      icon: <FaLightbulb className="text-blue-600 inline-block mr-2" />,
      descripcion:
        "Integración con sistemas como Power BI, mejoras en la experiencia de usuario y primeros pasos en automatización.",
    },
    {
      version: "Version 3.0 - 2025",
      icon: <FaGlobe className="text-blue-600 inline-block mr-2" />,
      descripcion:
        "Introducción de inteligencia artificial para predicciones de stock y automatización avanzada.",
    },
  ];

  return (
    <div>
      <section
        id="historia"
        className="container mx-auto py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center"
      >
        <h2 className="font-extrabold mb-12 xl:text-5xl lg:text-5xl md:text-4xl smd:text-4xl sm:text-4xl">
          La Historia de Bordex
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
          Bordex nació en el año 2023 con el objetivo de revolucionar la gestión
          de inventarios en las empresas. En sus inicios, nuestro grupo de
          desarrolladores y expertos en logística identificó la necesidad de un
          sistema más eficiente, intuitivo y automatizado. Tras meses de
          investigación y desarrollo, se lanzó la primera versión.
        </p>
        <div className="grid md:grid-cols-3 gap-12 mt-10">
          {versiones.map((version, index) => (
            <div key={index} className="p-6 bg-white shadow-xl rounded-lg">
              <h3 className="font-semibold text-xl">
                {version.icon} {version.version}
              </h3>
              <p className="text-gray-600 mt-2">{version.descripcion}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-10">
          Actualmente, Bordex es utilizado por decenas de empresas a nivel
          nacional, brindando soluciones personalizadas para negocios de
          distintos tamaños y sectores. Con la llegada de la versión más
          reciente, el sistema ha mejorado su seguridad, escalabilidad y
          capacidad de integración con múltiples plataformas.
        </p>
      </section>
    </div>
  );
}

export default QueEsBordex;
