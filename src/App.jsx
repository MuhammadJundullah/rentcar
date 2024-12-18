import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Notfound from "./components/Notfound";
import UnitKendaraan from "./pages/UnitKendaraan";
import "preline/preline";
import PaketTour from "./pages/PaketTour";
import ReservasiOnline from "./pages/ReservasiOnline";

function App() {
  return (
    <div className="App">
      <Router>
        <LocationWrapper />
        <header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/unit-kendaraan" element={<UnitKendaraan />} />
            <Route path="/paket-tour" element={<PaketTour />} />
            <Route path="/reservasi-online" element={<ReservasiOnline />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

function LocationWrapper() {
  const location = useLocation();

  useEffect(() => {
    if (window.HSStaticMethods) {
      document.addEventListener("DOMContentLoaded", () => {
        window.HSStaticMethods.autoInit();
      });
    }
  }, [location.pathname]);

  return null;
}

export default App;
