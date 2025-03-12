import { FaUserPlus, FaCogs, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: FaUserPlus,
    title: "Regístrate",
    description:
      "Crea tu cuenta en Bordex y accede a todas las funcionalidades.",
  },
  {
    icon: FaCogs,
    title: "Configura tu Inventario",
    description:
      "Agrega productos y genera códigos QR para un control eficiente.",
  },
  {
    icon: FaChartLine,
    title: "Monitorea y Optimiza",
    description:
      "Usa los reportes y análisis para mejorar tus procesos de inventario.",
  },
];

export default function HowToUse() {
  return (
    <section className="w-full py-12 lg:py-14 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3 max-w-[800px]">
            <h2 className="text-2xl font-medium tracking-tighter sm:text-4xl smd:text-4xl md:text-x4l lg:text-4xl xl:text-4xl mb-10">
              Cómo Usar Bordex
            </h2>
            <p className="mx-auto lg:max-w-[640px] xl:max-w-[750px] text-muted-foreground sm:text-base smd:px-3 smd:text-base md:text-lg xl:text-lg md:px-6 md:mb-20 lg:px-0">
              Sigue estos pasos para implementar Bordex en tu negocio y
              maximizar la eficiencia.
            </p>
          </div>
        </div>

        <div className="space-y-14 flex flex-col items-center sm:items-start md:items-start max-w-[400px] mx-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] md:ml-12 md:px-16 lg:ml-44 xl:ml-72 z-0">
          <div className="border-2 border-dashed md:mt-16 sm:mt-20 md:ml-8 border-zinc-300 w-px sm:h-80 smd:h-80 sm:ml-7 md:h-72 z-10 md:-mb-64 md:block md:absolute sm:block sm:absolute"></div>
          {/* map */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row md:flex-row lg:flex-row sm:justify-center md:justify-start md:items-start sm:items-start lg:items-start lg:justify-start gap-6 z-20"
            >
              <div className="w-16 flex flex-col md:flex-col md:justify-start md:items-start sm:items-start justify-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex flex-col items-center justify-center">
                  <step.icon className="w-8 h-8 text-blue-950" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center sm:items-start space-y-3">
                <div className="space-y-2">
                  <h3 className="sm:text-lg md:text-xl smd:text-xl lg: text-xl xl:text-2xl font-bold ">{step.title}</h3>
                  <p className="text-muted-foreground smd:text-base md:text-base lg:pr-24 xl:text-base xl:pr-28">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
