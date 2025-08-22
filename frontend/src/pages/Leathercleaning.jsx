import React from "react";
import { FaHome, FaStar, FaCheckCircle } from "react-icons/fa";
import leatherImg1 from "../assets/leather1.png";
import leatherImg2 from "../assets/leather2.png";
import leatherBeforeAfter from "../assets/leatherbefore-after.png";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// gallery images (reuse same as upholstery)
import leathergallery1 from "../assets/leathergallery1.png";
import leathergallery2 from "../assets/leathergallery2.png";
import leathergallery3 from "../assets/leathergallery3.png";

const Leathercleaning = () => {
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
            Leather Cleaning
          </h1>
          <div className="mt-3 flex justify-center items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold">
              4.5 (5)
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-5xl mx-auto px-6 my-10">
        <img
          src={leatherImg1}
          alt="Leather Cleaning"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span role="img" aria-label="leather">🛋️</span> About Leather Cleaning
        </h2>
        <p className="text-gray-700 mb-4">
          Leather furniture is a statement of luxury and comfort in any home or office. 
          However, unlike fabric, leather requires delicate care and proper treatment 
          to maintain its natural beauty and durability. Over time, body oils, dirt, 
          spills, and everyday wear can leave your leather looking dull, dry, and discolored.
        </p>
        <p className="text-gray-700 mb-4">
          Regular wiping or home remedies may not be enough to protect your leather surfaces. 
          Professional leather cleaning restores softness, revives color, and protects against 
          premature cracking and fading. Our expert team uses pH-balanced solutions and conditioning 
          treatments designed specifically for leather, ensuring it stays nourished, supple, and elegant.
        </p>
        <p className="text-gray-700 mb-4">
          With the right care, leather can last a lifetime. Our service not only improves its 
          appearance but also extends its lifespan while maintaining comfort and hygiene.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Our leather cleaning service is designed to:
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Deep clean leather without stripping natural oils.</li>
          <li>Remove stains, dirt buildup, and body oils.</li>
          <li>Rehydrate and condition for lasting softness.</li>
          <li>Protect against cracking, fading, and discoloration.</li>
        </ul>

        <p className="text-gray-700">
          Think of it as professional skincare for your furniture – restoring elegance, 
          comfort, and long-lasting protection.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Specialized leather-safe cleaning solutions
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Eco-friendly, non-toxic conditioners
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Restoration of color, softness & shine
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Protection against cracks & aging
            </li>
          </ul>
        </div>
        <div>
          <img
            src={leatherImg2}
            alt="Leather Sofa Cleaning"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Before VS After Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Before VS After</h2>
        <div className="flex justify-center">
          <img
            src={leatherBeforeAfter}
            alt="Before and After Leather Cleaning"
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
              { step: "Assessment", desc: "We inspect leather type & condition." },
              { step: "Surface Cleaning", desc: "Remove dirt, oils & debris safely." },
              { step: "Stain Treatment", desc: "Carefully treat spots & discoloration." },
              { step: "Deep Conditioning", desc: "Restore moisture & softness." },
              { step: "Protection", desc: "Apply protective finish for lasting results." },
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
              "Leather Sofas & Recliners",
              "Leather Chairs & Armchairs",
              "Office Leather Furniture",
              "Leather Car Interiors",
              "Leather Headboards & Beds",
              "Luxury Leather Goods (upon request)",
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
    {[leathergallery1, leathergallery2, leathergallery3].map((img, i) => (
      <div
        key={i}
        className="rounded-2xl shadow-lg overflow-hidden aspect-square"
      >
        <img
          src={img}
          alt={`Leather Work ${i + 1}`}
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
        Bring Your Leather Back to Life?
      </motion.h2>
      <motion.p
        className="text-white text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
          Book our professional leather cleaning service today and protect the elegance of your investment.
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

export default Leathercleaning;
