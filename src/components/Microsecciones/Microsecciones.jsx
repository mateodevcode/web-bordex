import MicroDashboard from "./MicroDashboard";
import MicroAnalitica from "./MicroAnalitica";

const Microsecciones = ({ secciones }) => {
  switch (secciones) {
    case "Dashboard":
      return <MicroDashboard />;
      break;
    case "Payments":
      return (
        <div>
          <h1>Payments</h1>
        </div>
      );
      break;
    case "Embedding":
      return (
        <div>
          <h1>Embedding</h1>
        </div>
      );
      break;
    case "Análitica":
      return (
        <MicroAnalitica />
      );
      break;
    default:
      break;
  }
};

export default Microsecciones;
