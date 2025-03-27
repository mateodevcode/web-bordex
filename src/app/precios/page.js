import Footer from "@/src/components/Footer";
import Header from "@/src/components/NavBarTop";
import Precios from "@/src/components/Precios";

function page() {
  return (
    <div className="w-full space-y-16">
      <Header />
      <Precios />
      <Footer />
    </div>
  );
}

export default page;
