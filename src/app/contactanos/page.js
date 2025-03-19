import Footer from "@/src/components/Footer";
import Header from "@/src/components/NavBarTop";
import Contactanos from "@/src/components/Contactanos";

function page() {
  return (
    <div className="mt-20">
      <Header />
      <Contactanos />
      <Footer />
    </div>
  );
}

export default page;
