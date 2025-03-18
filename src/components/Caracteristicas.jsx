// import { features } from "../data/seccion.caracteristics";
import Link from "next/link";
import { FaChartLine, FaCogs, FaUserPlus } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export default function Caracteristics() {
  const features = [
    {
      icon: <FaUserPlus className="w-6 h-6 text-rose-600" />,
      bgColor: "bg-pink-100",
      title: "Gestion Inteligente",
      description:
        "Crea tu cuenta en Bordex y lleva el control de tu inventario de manera sencilla y eficiente.",
      bgColor: "bg-rose-300",
    },
    {
      icon: <FaCogs className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      title: "Soporte Personalizado",
      description:
        "Te acompañamos en cada paso para que aproveches al máximo todas las funcionalidades.",
      bgColor: "bg-blue-300",
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-sky-500" />,
      bgColor: "bg-sky-100",
      title: "Costos Accesibles",
      description:
        "Planes flexibles diseñados para adaptarse a las necesidades de tu negocio.",
      bgColor: "bg-sky-300",
    },
    {
      icon: <MdPayment className="w-6 h-6 text-gray-500" />,
      bgColor: "bg-gray-100",
      title: "Facilidades de Pago",
      description:
        "Opciones accesibles para que la implementación de Bordex sea simple y efectiva.",
      bgColor: "bg-gray-300",
    },
  ];

  return (
    <section className="w-full bg-zinc-50 py-32">
      <div className="flex xl:flex-row lg:flex-row md:flex-col smd:flex-col sm:flex-col items-center justify-center space-y-8 lg:space-y-0 text-center max-w-full">
        {/* primer */}
        <div className="space-y-7 xl:w-5/12 lg:w-5/12 md:w-5/6 smd:w-full sm:w-full xl:px-20 lg:px-4 md:px-16 sm:px-4 smd:px-4">
          {/* Titulo */}
          <h2 className="flex flex-col text-3xl font-bold sm:text-2xl smd:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-slate-800">
            Cada vez más empresas confían en Bordex
          </h2>
          {/* Descripcion */}
          <div className="max-w-full text-gray-600 sm:text-sm sm:w-screen sm:px-8 smd:px-12 smd:text-base md:text-lg lg:text-xl xl:text-2xl md:px-16 font-medium">
            Sigue estos pasos para implementar Bordex en tu negocio y maximizar
            la eficiencia.
          </div>
          {/* Solicita */}
          <Link href="https://api.whatsapp.com/send/?phone=34675464502&text=Me+gustaria+un+demo+de+BordeX&type=phone_number&app_absent=0">
            <div className="sm:text-sm sm:w-max smd:text-base smd:w-max smd:mx-auto md:text-lg lg:text-xl xl:text-xl md:w-max text-center  mx-auto font-bold text-blue-500 hover:text-blue-600 cursor-pointer bg-white hover:bg-white/50 px-6 py-3 rounded-full shadow-sm shadow-black/10">
              Solicita una asesoría gratuita
            </div>
          </Link>
        </div>

        {/* Recuadros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-3 lg:gap-y-3 mx-auto xl:w-5/12 lg:w-6/12 md:w-5/6 smd:w-full sm:w-full xl:px-0 lg:px-0 md:px-0 sm:px-4 smd:px-4 xl:pt-0 lg:pt-0 md:pt-10 smd:pt-10 sm:pt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="sm:min-w-sm sm:mx-auto smd:mx-w-md px-4 p-8 lg:p-3 xl:p-6 flex flex-col justify-center items-start sm:space-y-4 bg-white rounded-lg"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bgColor} flex flex-col items-center justify-center`}
              >
                {feature.icon}
              </div>
              <div className="flex flex-col text-start space-y-4">
                <div className="space-y-3">
                  <h3 className="xl:text-2xl lg:text-xl md:text-2xl smd:text-xl sm:text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-medium xl:text-base lg:text-sm md:text-base smd:text-sm sm:text-sm">
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
