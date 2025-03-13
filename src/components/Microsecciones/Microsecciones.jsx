import MicroDashboard from "./MicroDashboard";
import MicroAnalitica from "./MicroAnalitica";
import MicroUsuarios from "./MicroUsuarios";

const Microsecciones = ({ secciones }) => {
  switch (secciones) {
    case "Dashboard":
      return <MicroDashboard />;
      break;
    case "Análitica":
      return (
        <MicroAnalitica />
      );
      break;
    case "Usuarios":
      return (
        <MicroUsuarios />
      );
      break;
    case "Procesos":
      return (
        <div>
          <h1>Procesos</h1>
        </div>
      );
      break;

    default:
      break;
  }
};

export default Microsecciones;
