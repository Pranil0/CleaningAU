import React from "react";
import { FaHome, FaStar, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import MattressImg from "../assets/mattresscover.jpg";
import cleancouch from "../assets/cleancouch.png";
import Mattressba from "../assets/mattressba.jpg";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// gallery images (replace with your own images if needed)
import gallery1 from "../assets/mattress1.jpg";
import gallery2 from "../assets/mattress4.webp";
import gallery3 from "../assets/mattressgl1.jpg";
import { useNavigate } from "react-router-dom";

const Mattresscleaning = () => {
     const navigate = useNavigate();
  
  return (
    <div className="bg-white text-gray-800 pt-[100px]">
      {/* Breadcrumb & Header Section */}
      <div className="bg-[#4977E5] text-white py-12 text-center relative">
        <div className="max-w-4xl mx-auto">
          <p className="flex justify-center items-center gap-2 text-sm mb-4">
            <FaHome className="text-white" /> Home / Service
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Mattress Cleaning
          </h1>
          <div className="mt-3 flex justify-center items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold">
              4.0 (2)
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-5xl mx-auto px-6 my-10">
        <img
          src={MattressImg}
          alt="Upholstery Cleaning"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span role="img" aria-label="sofa">🧼 </span> About Mattress Cleaning
        </h2>
        <p className="text-gray-700 mb-4">
A mattress is where you spend a third of your life, but over time, it can collect dust, sweat, dead skin cells, and even hidden allergens that aren’t removed by regular vacuuming. Spills and stains can also seep deep into the layers, leaving behind odors and bacteria that affect both hygiene and sleep quality. This buildup not only makes your mattress look and smell unpleasant but can also impact your health by triggering allergies and breathing issues.
        </p>
        <p className="text-gray-700 mb-4">
Our professional mattress cleaning service goes beyond surface vacuuming. Using advanced equipment and safe, powerful cleaning solutions, we deep-clean your mattress, extract dust mites, sweat, and bacteria, and remove stubborn stains and odors. The result is a fresh, hygienic, and comfortable mattress that promotes healthier sleep.        </p>
        <p className="text-gray-700 mb-4">
Regular mattress cleaning doesn’t just improve cleanliness—it also extends the life of your mattress, helping you avoid costly replacements. It’s especially beneficial for allergy sufferers, households with kids or pets, and anyone who values a healthier sleeping environment.        </p>

        <h3 className="text-xl font-semibold mb-3">
Our mattress cleaning service is designed to:        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Remove stains, sweat, and embedded dirt.</li>
          <li>Eliminate dust mites, bacteria, and allergens.</li>
          <li>Neutralize odors for a fresher sleeping surface.</li>
          <li>Prolong the lifespan of your mattress.</li>
        </ul>

        <p className="text-gray-700">
Think of it as a deep refresh for your bed—restoring comfort, ensuring better hygiene, and giving you a cleaner, healthier night’s sleep.        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Surface-Safe Solutions
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Eco-friendly, non-toxic products
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" />  Powerful Stain & Odor Removal
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" />  Expert Care for Every Surface
            </li>
          </ul>
        </div>
        <div>
          <img
            src={cleancouch}
            alt="Clean Couch"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Before VS After Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Before VS After</h2>
        <div className="flex justify-center">
          <img
            src={Mattressba}
            alt="Before and After Upholstery Cleaning"
            className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Before Our Services</span>
          <span>After Our Services</span>
        </div>
      </div>

      {/* How We Work & What We Clean Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* How We Work */}
        <div>
          <h2 className="text-2xl font-bold mb-6">How We Work ?</h2>
          <ol className="space-y-6">
            {[
              { step: "Inspection", desc: "We check fabric type & stains." },
              { step: "Vacuuming", desc: "Remove dust, dirt & debris." },
              { step: "Stain & Spot Treatment", desc: "Target stubborn marks." },
              { step: "Deep Cleaning & Sanitization", desc: "Steam or foam cleaning as per material." },
              { step: "Drying & Grooming", desc: "Quick dry & fabric protection." },
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
              "Single & Double Mattresses",
              "Queen & King Size Mattresses",
              "Baby & Kids’ Mattresses",
              "Guest Room Mattresses",
              "Office & Staff Room Mattresses",
              "Pillows & Cushions",
              "Stain & Odor-Prone Areas",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-[#4977E5] mt-1" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Gallery Section */}
<div className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-2xl font-bold text-center mb-10">Our Work Gallery</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[gallery1, gallery2, gallery3].map((img, i) => (
      <div
        key={i}
        className="rounded-2xl shadow-lg overflow-hidden aspect-square" // keeps images same size
      >
        <img
          src={img}
          alt={`Upholstery Work ${i + 1}`}
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
            Ready to Refresh Your Mattress?
          </motion.h2>
          <motion.p
            className="text-white text-lg max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
              Book our Mattress cleaning service today and bring back the comfort & beauty of your home.
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

export default Mattresscleaning;
