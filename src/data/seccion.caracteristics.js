import { FaChartLine, FaCogs, FaUserPlus } from "react-icons/fa";

export const features = [
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
