import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoSection from "../components/info/InfoSection";
import Caracteristicas from "../components/Caracteristicas";
import ComoUsar from "../components/ComoUsar";
import Precios from "../components/Precios";
import Slider from "../components/Slider";
import BotonFlotante from "../components/BotonFlotante";
import NavSecciones from "../components/Microsecciones/NavSecciones";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <InfoSection />
        <Slider />
        <Caracteristicas />
        <ComoUsar />
        <Precios />
        <NavSecciones />
        <BotonFlotante />
      </main>
      <Footer />
    </div>
  );
}
