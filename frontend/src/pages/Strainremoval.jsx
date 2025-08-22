import React from "react";
import { FaHome, FaStar, FaCheckCircle } from "react-icons/fa";

// Images
import stainremoval1 from "../assets/stainremoval1.png";
import stainremoval2 from "../assets/stainremoval2.png";
import stainremovalbeforeafter from "../assets/stainremovalbeforeafter.png";
import stainremovalgallery1 from "../assets/stainremovalgallery1.png";
import stainremovalgallery2 from "../assets/stainremovalgallery2.png";
import stainremovalgallery3 from "../assets/stainremovalgallery3.png";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Stainremoval = () => {
     const navigate = useNavigate();
  
  return (
    <div className="bg-white text-gray-800 pt-[100px]">
      {/* Breadcrumb & Header */}
      <div className="bg-[#4977E5] text-white py-12 text-center relative">
        <div className="max-w-4xl mx-auto">
          <p className="flex justify-center items-center gap-2 text-sm mb-4">
            <FaHome className="text-white" /> Home / Service
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Stain Removal</h1>
          <div className="mt-3 flex justify-center items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold">
              4.5 (4)
            </span>
          </div>
        </div>
      </div>

      {/* Top Image */}
      <div className="max-w-5xl mx-auto px-6 my-10">
        <img
          src={stainremoval1}
          alt="Stain Removal Service"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          🧼 About Stain Removal
        </h2>
        <p className="text-gray-700 mb-4">
          Stains can appear suddenly and ruin the appearance of carpets, upholstery, and fabrics. Our professional stain removal service restores your surfaces to their original look safely and effectively.
        </p>
        <p className="text-gray-700 mb-4">
          We use specialized solutions for different types of stains, ensuring that delicate fabrics and materials are never damaged.
        </p>
        <p className="text-gray-700 mb-4">
          Timely stain removal not only improves appearance but also prevents permanent damage and extends the life of your fabrics and carpets.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our stain removal service:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Removes common household stains (food, drink, ink, pet stains).</li>
          <li>Safe for delicate fabrics and carpets.</li>
          <li>Professional techniques for long-lasting results.</li>
          <li>Enhances hygiene and appearance of your surfaces.</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Safe and eco-friendly solutions
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Effective removal of tough stains
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Professional techniques for all fabrics
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#4977E5] mt-1" /> Timely and reliable service
            </li>
          </ul>
        </div>
        <div>
          <img
            src={stainremoval2}
            alt="Professional Stain Removal"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Before VS After */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Before VS After</h2>
        <div className="flex justify-center">
          <img
            src={stainremovalbeforeafter}
            alt="Before and After Stain Removal"
            className="rounded-2xl shadow-lg w-full md:w-3/4 object-cover"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Before</span>
          <span>After</span>
        </div>
      </div>

      {/* How We Work & What We Remove */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* How We Work */}
        <div>
          <h2 className="text-2xl font-bold mb-6">How We Work ?</h2>
          <ol className="space-y-6">
            {[
              { step: "Assessment", desc: "Identify the type of stain and material." },
              { step: "Pre-treatment", desc: "Apply safe solutions to loosen the stain." },
              { step: "Deep Cleaning", desc: "Gently remove stains using specialized techniques." },
              { step: "Neutralization", desc: "Prevent residue or color fading." },
              { step: "Inspection & Grooming", desc: "Ensure flawless result and texture." },
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

        {/* What We Remove */}
        <div>
          <h2 className="text-2xl font-bold mb-6">What We Remove ?</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Food & Beverage Stains",
              "Ink & Pen Marks",
              "Pet Stains & Odors",
              "Grease & Oil Stains",
              "Mold & Mildew Spots",
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
          {[stainremovalgallery1, stainremovalgallery2, stainremovalgallery3].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-lg overflow-hidden aspect-square"
            >
              <img
                src={img}
                alt={`Stain Removal Work ${i + 1}`}
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
        Restore Your Surfaces Today!
      </motion.h2>
      <motion.p
        className="text-white text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
          Book our stain removal service and make your carpets and upholstery look like new again.
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

export default Stainremoval;
