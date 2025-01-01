import Armada from "../components/Armada";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Aktivitas from "../components/Aktivitas";
import Testimonial from "../components/Testimonial";
import InputTesti from "../components/InputTesti";
import Loading from "../components/Loading";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      <Armada></Armada>
      <Aktivitas></Aktivitas>
      <Testimonial></Testimonial>
      <InputTesti></InputTesti>
      <Footer></Footer>
    </>
  );
}

export default Home;
