import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Notfound from "./components/Notfound";

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/Unit Kendaraan" element={<h1>About</h1>} />
            <Route path="/Paket-Tour" element={<h1>Services</h1>} />
            <Route path="/Reservasi-Online" element={<h1>Contact</h1>} />
            <Route path="/*" element={<Notfound></Notfound>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
