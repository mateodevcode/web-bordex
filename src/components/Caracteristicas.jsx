import { FaUserPlus, FaCogs, FaChartLine } from "react-icons/fa";

export default function Caracteristics() {
  const features = [
    {
      icon: <FaUserPlus className="w-6 h-6 text-rose-600" />,
      bgColor: "bg-pink-100",
      title: "Gestion Inteligente",
      description:
        "Crea tu cuenta en Bordex y lleva el control de tu inventario de manera sencilla y eficiente.",
    },
    {
      icon: <FaCogs className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      title: "Soporte Personalizado",
      description:
        "Te acompañamos en cada paso para que aproveches al máximo todas las funcionalidades.",
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-sky-400" />,
      bgColor: "bg-sky-100",
      title: "Costos Accesibles",
      description:
        "Planes flexibles diseñados para adaptarse a las necesidades de tu negocio.",
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-blue-950" />,
      bgColor: "bg-gray-100",
      title: "Facilidades de Pago",
      description:
        "Opciones accesibles para que la implementación de Bordex sea simple y efectiva.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 xl:py-48 bg-zinc-50">
      <div className="flex flex-col sm:items-center lg:flex-row lg:justify-center space-y-8 lg:space-y-0 text-center max-w-full px-4 overflow-hidden">
        {/* primer */}
        <div className="space-y-7 md:space-y-10 sm:px-4 sm:max-w-screen-sm smd:max-w-screen-smd smd:px-6 md:max-w-screen-md md:px-10 lg:max-w-lg xl:max-w-xl sm:mb-12 smd:mb-12 md:mb-16 lg:mb-0 xl:mb-0 lg:p-0">
          {/* Titulo */}
          <h2 className="flex flex-col text-3xl font-bold sm:text-2xl smd:text-3xl md:text-4xl lg:text-4xl xl:text-6xl text-slate-800">
            Cada vez más empresas confían en Bordex
          </h2>
          {/* Descripcion */}
          <div className="max-w-full text-gray-600 sm:text-sm sm:w-screen sm:px-8 smd:px-12 smd:text-base md:text-lg lg:text-xl xl:text-2xl md:px-16 font-medium">
            Sigue estos pasos para implementar Bordex en tu negocio y maximizar
            la eficiencia.
          </div>
          {/* Solicita */}
          <div className="text-slate-800 sm:text-sm sm:w-max smd:text-base smd:w-max smd:mx-auto md:text-lg lg:text-xl xl:text-2xl md:w-max text-center border-b-2 sm:border-spacing- mx-auto font-bold border-slate-800 hover:text-sky-600 hover:border-sky-600 cursor-pointer">
            Solicita una asesoría gratuita
          </div>
        </div>

        {/* Recuadros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-3 lg:gap-y-3 lg:mb-2 xl:space-y-0 sm:max-w-screen-sm smd:max-w-screen-smd md:max-w-7xl lg:max-w-7xl xl:max-w-8xl xl:max-h-96 mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="sm:min-w-sm sm:mx-auto smd:mx-w-md px-4 p-8 lg:p-3 xl:p-6 flex flex-col justify-center items-start sm:space-y-4 bg-white rounded-lg"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bgColor} flex flex-col items-center justify-center z-10`}
              >
                {feature.icon}
              </div>
              <div className="flex flex-col text-start space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
