import MicroDashboard from "./MicroDashboard";
import MicroAnalitica from "./MicroAnalitica";
import MicroUsuarios from "./MicroUsuarios";
import MicroProcesos from "./Microprocesos/MicroProcesos";

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

    default:
      break;
  }
};

export default Microsecciones;
