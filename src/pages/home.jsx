import "../App.css";
import Armada from "../components/Armada";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Aktivitas from "../components/Aktivitas";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      <Armada></Armada>
      <Aktivitas></Aktivitas>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

export default Home;
