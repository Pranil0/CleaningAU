import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import { FaWhatsapp } from "react-icons/fa";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Commercial from "./pages/Commercial"; 
import UpholsteryCleaning from "./pages/upholsterycleaning";
import Tilecleaning from "./pages/Tilecleaning";
import Carpetcleaning from "./pages/Carpetcleaning";
import CarSeatSteamCleaning from "./pages/CarSeatSteamCleaning";
import Flooddamage from "./pages/Flooddamage";
import Mattresscleaning from "./pages/Mattresscleaning";
import Strainremoval from "./pages/Strainremoval";
import CarpetPatchRepair from "./pages/CarpetPatchRepair";
import Leathercleaning from "./pages/Leathercleaning";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Services from "./pages/Services";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Main wrapper */}
      <div className="min-h-screen bg-white text-gray-900 relative">
        {/* Navbar */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/services/upholstery-cleaning" element={<UpholsteryCleaning />} />
          <Route path="/services/carpet-cleaning" element={<Carpetcleaning />} />
          <Route path="/services/car-seats-steam-cleaning" element={<CarSeatSteamCleaning />} />
          <Route path="/services/flood-damage-restoration" element={<Flooddamage />} />
          <Route path="/services/mattress-cleaning" element={<Mattresscleaning />} />
          <Route path="/services/stain-removal" element={<Strainremoval />} />
          <Route path="/services/tile-cleaning" element={<Tilecleaning />} />
          <Route path="/services/carpet-patch-repair" element={<CarpetPatchRepair />} />
          <Route path="/services/leather-cleaning" element={<Leathercleaning />} />
        </Routes>

        {/* Footer */}
        <Footer />

        <FloatingButtons/>
      </div>
    </Router>
  );
}

export default App;
