import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import cleaninglogo from "../assets/cleaninglogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
   const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Top Info Bar */}
      <div className="bg-[#4977E5] text-white text-[13px] px-4 py-2 hidden md:flex justify-between items-center backdrop-blur-md bg-opacity-100">
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <FaFacebookF className="cursor-pointer hover:text-[#1877F2]" />
          <FaTwitter className="cursor-pointer hover:text-[#1DA1F2]" />
          <FaInstagram className="cursor-pointer hover:text-[#E1306C]" />
        </div>

        {/* Contact Info */}
        <div className="flex items-center space-x-6 font-medium">
          <span className="flex items-center gap-1">
            <FaPhoneAlt /> (91) 98765 4321 54
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope /> support@mail.com
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> 380 Albart ST, AU
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> Sunday–Friday 9:00am–10pm
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="backdrop-blur-lg bg-white/70 border-b border-white/20 px-6 py-4 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={cleaninglogo} alt="Cleaning Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-semibold text-gray-800">
          <Link to="/" className="hover:text-[#4977E5]">Home</Link>

          {/* Services with Dropdown */}
<div className="relative group">
  {/* Main Services link (navigates to /services) */}
  <Link
    to="/services"
    className="flex items-center hover:text-[#4977E5]"
  >
    Services
  </Link>

  {/* Dropdown */}
  <div className="absolute left-0 top-full mt-2 w-64 backdrop-blur-xl bg-white/80 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-white/20">
    <ul className="py-2 text-sm text-gray-700">
      <li><Link to="/services/Carpetcleaning" className="block px-4 py-2 hover:text-[#4977E5]">Carpet Steam Cleaning</Link></li>
      <li><Link to="/services/upholstery-cleaning" className="block px-4 py-2 hover:text-[#4977E5]">Upholstery Steam Cleaning</Link></li>
      <li><Link to="/services/Mattresscleaning" className="block px-4 py-2 hover:text-[#4977E5]">Mattress Steam Cleaning</Link></li>
      <li><Link to="/services/Flooddamage" className="block px-4 py-2 hover:text-[#4977E5]">Flood Damage Restoration</Link></li>
      <li><Link to="/services/Tilecleaning" className="block px-4 py-2 hover:text-[#4977E5]">Tile Steam Cleaning</Link></li>
      <li><Link to="/services/CarSeatSteamCleaning" className="block px-4 py-2 hover:text-[#4977E5]">Car Seats Steam Cleaning</Link></li>
      <li><Link to="/services/Strainremoval" className="block px-4 py-2 hover:text-[#4977E5]">Stain Removal</Link></li>
      <li><Link to="/services/CarpetPatchRepair" className="block px-4 py-2 hover:text-[#4977E5]">Carpet Patch Repair</Link></li>
      <li><Link to="/services/Leathercleaning" className="block px-4 py-2 hover:text-[#4977E5]">Leather Cleaning</Link></li>
    </ul>
  </div>
</div>


          <Link to="/commercial" className="hover:text-[#4977E5]">Commercial</Link>
          <Link to="/about" className="hover:text-[#4977E5]">About</Link>
          <Link to="/contact" className="hover:text-[#4977E5]">Contact</Link>
          <Link to="/blog" className="hover:text-[#4977E5]">Blog</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <FaSearch className="text-gray-600 text-lg cursor-pointer hover:text-[#4977E5]" />
          <div className="border-l h-6" />
          <button
            onClick={() => navigate("/contact")}  
            className="bg-[#4977E5] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#3b65cc]"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-lg bg-white/90 border-b border-white/20 px-6 py-6 flex flex-col space-y-4 text-gray-800 font-medium text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>

          {/* Services Dropdown */}
<div
  className="relative group"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  {/* Services Main Link */}
  <Link
    to="/services"
    onClick={() => setMenuOpen(false)}
    className="flex justify-between w-full items-center cursor-pointer"
  >
    Services
    <span>{servicesOpen ? "-" : "+"}</span>
  </Link>

  {/* Dropdown Items */}
  {servicesOpen && (
    <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 space-y-2 text-base text-gray-700 w-56 z-50">
      <li>
        <Link to="/services/Carpetcleaning" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
          Carpet Steam Cleaning
        </Link>
      </li>
      <li>
        <Link to="/services/upholstery-cleaning" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
          Upholstery Steam Cleaning
        </Link>
      </li>
      <li>
        <Link to="/services/Mattresscleaning" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
          Mattress Steam Cleaning
        </Link>
      </li>
      <li>
        <Link to="/services/Flooddamage" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
          Flood Damage Restoration
        </Link>
      </li>
      <li>
        <Link to="/services/Tilecleaning" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
          Tile Steam Cleaning
        </Link>
      </li>
      <li>
        <Link to="/services/CarSeatSteamCleaning" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
          Car Seats Steam Cleaning
        </Link>
      </li>
      <li>
        <Link to="/services/Strainremoval" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
          Stain Removal
        </Link>
      </li>
      <li>
        <Link to="/services/CarpetPatchRepair" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
          Carpet Patch Repair
        </Link>
      </li>
      <li>
        <Link to="/services/Leathercleaning" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
          Leather Cleaning
        </Link>
      </li>
    </ul>
  )}
</div>

{/* Other Nav Items */}
<Link to="/commercial" onClick={() => setMenuOpen(false)} className="block">
  Commercial
</Link>
<Link to="/about" onClick={() => setMenuOpen(false)} className="block">
  About
</Link>
<Link to="/contact" onClick={() => setMenuOpen(false)} className="block">
  Contact
</Link>
<Link to="/blog" onClick={() => setMenuOpen(false)} className="block">
  Blog
</Link>


          {/* CTA + Search */}
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200 mt-4">
            <button
              onClick={() => {
                setMenuOpen(false);   // ✅ close menu
                navigate("/contact"); // ✅ redirect
              }}
              className="w-full bg-[#4977E5] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#3b65cc]"
            >
              Book Now
            </button>
            <FaSearch className="text-gray-600 text-lg cursor-pointer hover:text-[#4977E5] self-start" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
