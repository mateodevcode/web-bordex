import Footer from "@/src/components/Footer";
import Header from "@/src/components/NavBarTop";
import NavSecciones from "@/src/components/Microsecciones/NavSecciones";

function page() {
  return (
    <div className="mt-24">
      <Header />
      <NavSecciones />
      <Footer />
    </div>
  );
}

export default page;
