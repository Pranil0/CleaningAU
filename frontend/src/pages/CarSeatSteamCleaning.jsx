import React from "react";
import { FaHome, FaStar, FaCheckCircle } from "react-icons/fa";

// Images
import carseats1 from "../assets/carseats1.png";
import carseats2 from "../assets/carseats2.png";
import carseatsbeforeafter from "../assets/carseatsbeforeafter.png";
import carseatsgallery1 from "../assets/carseatsgallery1.png";
import carseatsgallery2 from "../assets/carseatsgallery2.png";
import carseatsgallery3 from "../assets/carseatsgallery3.png";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CarSeatsSteamCleaning = () => {
     const navigate = useNavigate();
  
  return (
    <div className="bg-white text-gray-800 pt-[100px]">
      {/* Breadcrumb & Header */}
      <div className="bg-[#4977E5] text-white py-12 text-center relative">
        <div className="max-w-4xl mx-auto">
          <p className="flex justify-center items-center gap-2 text-sm mb-4">
            <FaHome className="text-white" /> Home / Service
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Car Seats Steam Cleaning</h1>
          <div className="mt-3 flex justify-center items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold">
              4.7 (5)
            </span>
          </div>
        </div>
      </div>

      {/* Top Image */}
      <div className="max-w-5xl mx-auto px-6 my-10">
        <img
          src={carseats1}
          alt="Car Seats Steam Cleaning"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          🧽 About Car Seats Steam Cleaning
        </h2>
        <p className="text-gray-700 mb-4">
          Car seats collect dirt, food crumbs, dust, and odors over time. Steam cleaning restores the cleanliness and freshness of your seats without harsh chemicals.
        </p>
        <p className="text-gray-700 mb-4">
          Using hot steam, we penetrate deep into fabric and leather, lifting dirt and killing bacteria, ensuring a hygienic and refreshed interior.
        </p>
        <p className="text-gray-700 mb-4">
          Regular steam cleaning protects your car’s interior, extends seat life, and improves comfort for all passengers.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our service includes:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Deep cleaning for fabric and leather car seats.</li>
          <li>Removal of stains, odors, and bacteria.</li>
          <li>Quick drying and safe for all seat types.</li>
          <li>Professional care to maintain your car’s value.</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Deep, chemical-free steam cleaning
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Quick, professional, and safe
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Removes stains, odors, and bacteria
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Maintains seat fabric & leather quality
            </li>
          </ul>
        </div>
        <div>
          <img
            src={carseats2}
            alt="Car Seats Steam Cleaning"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Before VS After */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Before VS After</h2>
        <div className="flex justify-center">
          <img
            src={carseatsbeforeafter}
            alt="Before and After Car Seats Cleaning"
            className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Before Cleaning</span>
          <span>After Cleaning</span>
        </div>
      </div>

      {/* How We Work & What We Clean */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* How We Work */}
        <div>
          <h2 className="text-2xl font-bold mb-6">How We Work ?</h2>
          <ol className="space-y-6">
            {[
              { step: "Inspection", desc: "We check seat material & stains." },
              { step: "Vacuuming", desc: "Remove surface dirt & debris." },
              { step: "Stain Treatment", desc: "Target coffee, food & sweat stains." },
              { step: "Steam Cleaning", desc: "Deep cleaning with hot steam to sanitize." },
              { step: "Drying & Finishing", desc: "Quick dry & fabric/leather protection." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4977E5] text-white font-semibold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{item.step}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* What We Clean */}
        <div>
          <h2 className="text-2xl font-bold mb-6">What We Clean ?</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Fabric Car Seats",
              "Leather Car Seats",
              "Car Carpets & Mats",
              "Headrests & Armrests",
              "Child Car Seats",
              "Seat Belts",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-[#4977E5] mt-1" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Our Work Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[carseatsgallery1, carseatsgallery2, carseatsgallery3].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-lg overflow-hidden aspect-square"
            >
              <img
                src={img}
                alt={`Car Seats Work ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

     
 {/* CTA Section */}
<div
  className="relative mt-24 px-6 lg:px-20 max-w-7xl mx-auto mb-20"
  data-aos="fade-up"
>
  {/* Floating blurred circles */}
  <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-white/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
  <div className="pointer-events-none absolute -bottom-8 right-10 w-56 h-56 bg-[#FFFAF0]/20 rounded-full filter blur-3xl animate-float"></div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5B74E7] to-[#6C7BFF] px-8 py-16 flex flex-col md:flex-row items-center gap-8 shadow-2xl"
  >
    {/* Decorative wave at bottom */}
    <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-12"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,0 C600,120 600,0 1200,100 L1200,120 L0,120 Z"
          fill="rgba(255,255,255,0.08)"
        />
      </svg>
    </div>

    <div className="md:w-2/3 text-center md:text-left space-y-4 z-10">
      <motion.h2
        className="text-3xl font-extrabold text-white leading-tight"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "circOut" }}
      >
       Refresh Your Car Seats Today!
      </motion.h2>
      <motion.p
        className="text-white text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
          Book our car seats steam cleaning service and enjoy a cleaner, fresher car interior.
      </motion.p>
    </div>

    <div className="md:w-1/3 flex flex-col sm:flex-row gap-4 justify-center md:justify-end z-10">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center gap-2 bg-white text-[#5B74E7] font-semibold px-6 py-3 rounded-full shadow-lg relative overflow-hidden"
      >
        <span            
         onClick={() => navigate("/contact")}  // ✅ works for desktop too
>Book Now</span>
        <FiArrowRight className="ml-1" />
      </motion.button>

      
    </div>
  </motion.div>
</div>


     
    </div>
  );
};

export default CarSeatsSteamCleaning;
