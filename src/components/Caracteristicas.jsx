import { features } from "../data/seccion.caracteristics";

export default function Caracteristics() {

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
          <div className="text-slate-800 sm:text-sm sm:w-max smd:text-base smd:w-max smd:mx-auto md:text-lg lg:text-xl xl:text-xl md:w-max text-center border-b-2 sm:border-spacing- mx-auto font-bold border-slate-800 hover:text-sky-600 hover:border-sky-600 cursor-pointer">
            Solicita una asesoría gratuita
          </div>
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
                  <h3 className="xl:text-2xl lg:text-xl md:text-2xl smd:text-xl sm:text-xl font-semibold">{feature.title}</h3>
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
