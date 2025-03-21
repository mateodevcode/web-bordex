import MicroDashboard from "./MicroDashboard";
import MicroAnalitica from "./MicroAnalitica";
import MicroUsuarios from "./MicroUsuarios";
import MicroProcesos from "./Microprocesos/MicroProcesos";
import MicroNomina from "./MicroNomina";

const Microsecciones = ({ secciones }) => {
  switch (secciones) {
    case "Dashboard":
      return <MicroDashboard />;
      break;
    case "Análitica":
      return <MicroAnalitica />;
      break;
    case "Usuarios":
      return <MicroUsuarios />;
      break;
    case "Procesos":
      return <MicroProcesos />;
      break;

    case "Nomina":
      return <MicroNomina />;
      break;

    default:
      break;
  }
};

export default Microsecciones;
