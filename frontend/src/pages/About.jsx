import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaBriefcase } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import maskgroup from "../assets/maskgroup.png";
import cleaning from "../assets/cleaning.png";

import { useNavigate } from "react-router-dom";
import TestimonialsSection from "../components/TestimonialsSection";
// Reusable ServiceCard and data
import ServiceCard from "../components/ServiceCard";
import { serviceCards } from "../data/servicesData";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white pt-[100px]">
      {/* Hero Section */}
      <div
        className="relative w-full h-[250px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${maskgroup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#4977E5]/80"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm mt-2">
            <FaHome className="text-white" />
            <Link
              to="/"
              className="hover:underline hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <span>›</span>
            <span className="font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Your Trusted Deep Cleaning <br /> Experts
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <strong>[Your Company Name]</strong>, we believe a cleaner space
            means a healthier, happier life. Based in Australia, we specialize
            in professional deep cleaning services for homes and businesses —
            transforming every corner into a spotless, refreshed space.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            From carpet and rug cleaning to leather and upholstery care, we
            handle even the toughest stains with precision and care. Our expert
            team also restores the shine of tiles and grout, leaving your floors
            and surfaces looking brand new.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-gray-800 font-medium">
              <span className="text-[#4977E5]">⟳</span> Residential Cleaning
              Services Near You!
            </li>
            <li className="flex items-center gap-2 text-gray-800 font-medium">
              <span className="text-[#4977E5]">⟳</span> Commercial Cleaning
              Service In Australia.
            </li>
          </ul>

          <button
            onClick={() => navigate("/contact")}
            className="bg-[#4977E5] hover:bg-[#3b65cc] text-white px-6 py-3 rounded-lg shadow-md font-medium transition-all duration-200"
          >
            Book A Cleaner
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={cleaning}
            alt="Cleaning Service"
            className="w-full rounded-2xl shadow-lg"
          />

          {/* Floating Stat 1 */}
          <div className="absolute top-6 right-6 bg-white shadow-md rounded-xl px-5 py-3 flex items-center gap-3 border border-gray-200">
            <FaBriefcase className="text-[#4977E5] text-xl" />
            <div>
              <h3 className="font-semibold text-gray-900">16+</h3>
              <p className="text-sm text-gray-600">Cleaning Office</p>
            </div>
          </div>

          {/* Floating Stat 2 */}
          <div className="absolute bottom-6 left-6 bg-white shadow-md rounded-xl px-5 py-3 flex items-center gap-3 border border-gray-200">
            <FaUsers className="text-[#4977E5] text-xl" />
            <div>
              <h3 className="font-semibold text-gray-900">100+</h3>
              <p className="text-sm text-gray-600">Assisted People</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Our Cleaning Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {serviceCards.slice(0, 6).map((card, idx) => (
            <ServiceCard key={idx} {...card} />
          ))}
        </div>

        {/* View More Button */}
        {serviceCards.length > 6 && (
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="px-6 py-3 bg-[#5B74E7] text-white rounded-full font-medium hover:bg-[#3b65cc] transition"
            >
              View More
            </Link>
          </div>
        )}
      </div>

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-center text-white mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience a Cleaner, Brighter Space?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of happy clients who trust us to keep their homes and businesses spotless.  
            Book your professional cleaning service today.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Get a Free Quote
            </button>
            <Link
              to="/services"
              className="px-8 py-3 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              View Services
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-200">
            ✅ Trusted by 500+ customers • 100% Satisfaction Guaranteed
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
