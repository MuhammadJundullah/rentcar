import Navbar from "../components/Navbar";
import ArmadaAll from "../components/ArmadaAll";
import Footer from "../components/Footer";

function UnitKendaraan() {
  return (
    <>
      <Navbar></Navbar>
      <div className="py-20">
        <ArmadaAll></ArmadaAll>
      </div>
      <Footer></Footer>
    </>
  );
}

export default UnitKendaraan;
