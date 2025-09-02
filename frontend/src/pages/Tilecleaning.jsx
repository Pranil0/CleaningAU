import React from "react";
import { FaHome, FaStar, FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Images
import TileImg from "../assets/Tilecleaning.png";
import cleancouch from "../assets/cleancouch.png";
import Tileba from "../assets/Tileba.png";

// Gallery
import gallery1 from "../assets/Tileg1.jpg";
import gallery2 from "../assets/Tileg2.jpg";
import gallery3 from "../assets/Tileg3.jpg";

const Tilecleaning = () => {
  const navigate = useNavigate();

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-white text-gray-800 pt-[100px]">

      {/* Breadcrumb & Header */}
      <motion.div
        className="bg-[#4977E5] text-white py-12 text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="flex justify-center items-center gap-2 text-sm mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaHome className="text-white" /> Home / Service
        </motion.p>

        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Tile Cleaning
        </motion.h1>

        <motion.div
          className="mt-3 flex justify-center items-center gap-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <FaStar className="text-yellow-400" />
          <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold">
            4.0 (2)
          </span>
        </motion.div>
      </motion.div>

      {/* Image Section */}
<div className="max-w-5xl mx-auto px-6 my-10">
  <img
    src={TileImg}
    alt="Tile Cleaning"
    className="rounded-2xl shadow-lg w-full object-cover"
  />
</div>

{/* About Section */}
<div className="max-w-4xl mx-auto px-6 pb-16">
  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
     About Tile & Grout Cleaning
  </h2>

  {[
    "Tiles make any home or workplace look elegant, but over time, dirt, spills, and grime can seep into the grout lines and dull their shine. Regular mopping often cleans only the surface, leaving behind stubborn stains, soap scum, and hidden bacteria in the porous grout. This buildup not only makes tiles look worn-out but can also harbor germs and allergens, creating an unhealthy environment.",
    "Our professional tile and grout cleaning service goes beyond surface cleaning. Using advanced equipment and safe yet powerful solutions, we deep-clean tiles, extract dirt from grout lines, and restore the natural beauty of your flooring. The result is a spotless, fresh, and hygienic surface that brightens your entire space.",
    "Regular tile cleaning not only enhances the appearance of your home but also helps maintain the durability of your flooring, saving you from costly replacements in the long run. It’s especially beneficial for kitchens, bathrooms, and high-traffic areas where grime tends to build up quickly."
  ].map((p, i) => (
    <p key={i} className="text-gray-700 mb-4">
      {p}
    </p>
  ))}

  <h3 className="text-xl font-semibold mb-3">
    Our tile cleaning service is designed to:
  </h3>
  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
    {[
      "Remove tough stains, grease, and grime from tiles and grout.",
      "Eliminate hidden bacteria, mold, and mildew buildup.",
      "Restore natural shine and brightness to your flooring.",
      "Prolong the lifespan of your tiles and grout."
    ].map((li, i) => (
      <li key={i} className="flex items-start gap-2">
        <FaCheckCircle className="mt-1" /> {li}
      </li>
    ))}
  </ul>
</div>


      {/* Why Choose Us Section */}
      <motion.div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2 className="text-2xl font-bold mb-4" variants={fadeUp}>
            Why Choose Us?
          </motion.h2>
          <motion.ul className="space-y-3">
            {[
              "Surface-Safe Solutions",
              "Eco-friendly, non-toxic products",
              "Powerful Stain & Odor Removal",
              "Expert Care for Every Surface"
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <FaCheckCircle className="text-[#4977E5] mt-1" /> {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <img src={cleancouch} alt="Clean Couch" className="rounded-2xl shadow-lg w-full object-cover" />
        </motion.div>
      </motion.div>

      {/* Before VS After Section */}
      <motion.div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <motion.h2 className="text-2xl font-bold mb-6" variants={fadeUp}>
          Before VS After
        </motion.h2>
        <motion.div className="flex justify-center overflow-hidden rounded-2xl shadow-lg w-full md:w-3/4 mx-auto">
          <motion.img
            src={Tileba}
            alt="Before and After"
            className="w-full object-cover"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </motion.div>

      {/* How We Work & What We Clean */}
      <motion.div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <motion.h2 className="text-2xl font-bold mb-6" variants={fadeUp}>How We Work ?</motion.h2>
          <motion.ol className="space-y-6">
            {[
              { step: "Inspection", desc: "We check fabric type & stains." },
              { step: "Vacuuming", desc: "Remove dust, dirt & debris." },
              { step: "Stain & Spot Treatment", desc: "Target stubborn marks." },
              { step: "Deep Cleaning & Sanitization", desc: "Steam or foam cleaning as per material." },
              { step: "Drying & Grooming", desc: "Quick dry & fabric protection." },
            ].map((item, i) => (
              <motion.li key={i} className="flex items-start gap-4" variants={fadeUp}>
                <motion.span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4977E5] text-white font-semibold" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }}>
                  {i + 1}
                </motion.span>
                <div>
                  <p className="font-semibold">{item.step}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
        <div>
          <motion.h2 className="text-2xl font-bold mb-6" variants={fadeUp}>What We Clean ?</motion.h2>
          <motion.ul className="space-y-3">
            {[
              "Kitchen Floor Tiles & Grout",
              "Bathroom Wall & Floor Tiles",
              "Living Room & Hallway Tiles",
              "Outdoor Patio & Balcony Tiles",
              "Commercial & Office Flooring",
              "Shower Area & Wet Room Tiles",
              "High-Traffic & Stubborn Stain Areas",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <FaCheckCircle className="text-[#4977E5] mt-1" /> {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Our Work Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[gallery1, gallery2, gallery3].map((img, i) => (
            <div key={i} className="rounded-2xl shadow-lg overflow-hidden aspect-square transform transition-transform duration-500 hover:scale-105 hover:rotate-1">
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div className="relative mt-24 px-6 lg:px-20 max-w-7xl mx-auto mb-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-white/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="pointer-events-none absolute -bottom-8 right-10 w-56 h-56 bg-[#FFFAF0]/20 rounded-full filter blur-3xl animate-float"></div>

        <motion.div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5B74E7] to-[#6C7BFF] px-8 py-16 flex flex-col md:flex-row items-center gap-8 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-2/3 text-center md:text-left space-y-4 z-10">
            <motion.h2 className="text-3xl font-extrabold text-white leading-tight" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6, ease: "circOut" }}>
              Ready to Refresh Your Tiles?
            </motion.h2>
            <motion.p className="text-white text-lg max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
              Book our Tile cleaning service today and bring back the comfort & beauty of your home.
            </motion.p>
          </div>

          <div className="md:w-1/3 flex flex-col sm:flex-row gap-4 justify-center md:justify-end z-10">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex items-center justify-center gap-2 bg-white text-[#5B74E7] font-semibold px-6 py-3 rounded-full shadow-lg relative overflow-hidden">
              <span onClick={() => navigate("/contact")}>Book Now</span>
              <FiArrowRight className="ml-1" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tilecleaning;
