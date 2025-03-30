import { FaChartLine, FaCogs, FaUserPlus } from "react-icons/fa";

export const steps = [
  {
    icon: FaUserPlus,
    title: "Regístrate",
    description:
      "Crea tu cuenta en Bordex y accede a todas las funcionalidades.",
      targetY: 0,
      targetY1: 0,
      
  },
  {
    icon: FaCogs,
    title: "Configura tu Inventario",
    description:
      "Agrega productos y genera códigos QR para un control eficiente.",
      targetY: -120,
      targetY1: 0,
      
  },
  {
    icon: FaChartLine,
    title: "Monitorea y Optimiza",
    description:
      "Usa los reportes y análisis para mejorar tus procesos de inventario.",
      targetY: -240,
      targetY1: 0,
      
  },
];
