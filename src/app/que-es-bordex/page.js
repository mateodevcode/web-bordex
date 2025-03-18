import Footer from "@/src/components/Footer";
import Header from "@/src/components/NavBarTop";
import QueEsBordex from "@/src/components/QueEsBordex";

function page() {
  return (
    <div>
      <Header />
      <div className="mt-16">
        <QueEsBordex />
      </div>
      <Footer />
    </div>
  );
}

export default page;
