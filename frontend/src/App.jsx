import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

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

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen bg-white text-gray-900">
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
           <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/commercial" element={<Commercial />} /> {/* ✅ Added Commercial page */}
          <Route path="/services/upholstery-cleaning" element={<UpholsteryCleaning />} />
          <Route path="/services/Carpetcleaning" element={<Carpetcleaning />} />
          <Route path="/services/CarSeatSteamCleaning" element={<CarSeatSteamCleaning />} />
          <Route path="/services/Flooddamage" element={<Flooddamage />} />
          <Route path="/services/Mattresscleaning" element={<Mattresscleaning />} />
          <Route path="/services/Strainremoval" element={<Strainremoval />} />
          <Route path="/services/Tilecleaning" element={<Tilecleaning />} />
          <Route path="/services/CarpetPatchRepair" element={<CarpetPatchRepair />} />
          <Route path="/services/Leathercleaning" element={<Leathercleaning />} />


        </Routes>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
