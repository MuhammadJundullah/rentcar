import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Notfound from "./components/Notfound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";
// import { IStaticMethods } from "preline/preline";

// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }

function App() {
  return (
    <div className="App">
      <Router>
        <LocationWrapper />
        <header>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Unit-Kendaraan" element={<h1>About</h1>} />
            <Route path="/Paket-Tour" element={<h1>Services</h1>} />
            <Route path="/Reservasi-Online" element={<h1>Contact</h1>} /> */}
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
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return null;
}

export default App;
