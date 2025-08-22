// src/pages/Commercial.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserTie, FaLeaf, FaClock, FaDollarSign, FaStar, FaHeartbeat, FaSmile } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import heroImage from "../assets/herosectioncleaning.jpg";
import officeImg from "../assets/officecleaning.jpg";
import supermarketImg from "../assets/supermarketcleaning.png";
import schoolImg from "../assets/schoolcleaning.jpg";
import hotelImg from "../assets/hotelcleaning.jpg";
import cafeImg from "../assets/cafecleaning.jpg";
import communityImg from "../assets/communitycleaning.jpg";

const Commercial = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);
   const navigate = useNavigate();

  const industries = [
    { img: officeImg, title: "Office Buildings" },
    { img: supermarketImg, title: "Retail & Supermarkets" },
    { img: schoolImg, title: "Schools & Universities" },
    { img: hotelImg, title: "Hotels & Motels" },
    { img: cafeImg, title: "Restaurants & Bars" },
    { img: communityImg, title: "Community Spaces" },
  ];

  const benefits = [
    { icon: <FaStar className="inline text-[#4977E5] mr-2" />, text: "Boost Workplace Productivity" },
    { icon: <FaHeartbeat className="inline text-[#4977E5] mr-2" />, text: "Ensure Health & Safety Standards" },
    { icon: <FaSmile className="inline text-[#4977E5] mr-2" />, text: "Create a Lasting First Impression" },
    { icon: <FaDollarSign className="inline text-[#4977E5] mr-2" />, text: "Long-Term Cost Savings" },
  ];

  return (
    <div className="bg-[#4977E5] text-white pt-[100px]">

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[65vh] flex items-center justify-center text-center overflow-hidden px-4 md:px-0" data-aos="fade-up">
        <img src={heroImage} alt="Commercial Cleaning" className="absolute w-full h-full object-cover brightness-75" loading="lazy" />
        <div className="relative z-10 bg-black bg-opacity-50 p-6 md:p-12 rounded-2xl max-w-3xl mx-auto flex flex-col items-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Commercial Cleaning Services</h1>
          <p className="text-md sm:text-lg md:text-xl text-white">Keeping your business spaces spotless and welcoming.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base justify-items-center">
            <li>• Office Buildings</li>
            <li>• Retail Spaces</li>
            <li>• Hotels & Motels</li>
            <li>• Community Spaces</li>
            <li>• Schools & Universities</li>
            <li>• Restaurants & Bars</li>
          </ul>
          <button 
                      onClick={() => navigate("/contact")}  // ✅ works for desktop too
className="bg-[#4977E5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#335cc0] transition">Get a Free Quote</button>
        </div>
      </section>

      {/* Why Choose Us - Interactive Flip Cards */}
<section className="py-12 md:py-16 bg-white text-gray-900">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
      Why Choose Us?
    </h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {/* Card 1 */}
      <div
        className="group perspective"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
          {/* Front */}
          <div className="absolute w-full h-full bg-[#f1f5f9] rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 backface-hidden">
            <FaUserTie className="text-[#4977E5] text-4xl mb-4" />
            <h3 className="font-semibold text-lg">Professional Staff</h3>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-[#4977E5] text-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
            <p className="text-sm mb-2">
              Our cleaners are fully trained, insured, and reliable.
            </p>
            <span className="text-lg font-bold">100+ Staff</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="group perspective"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
          {/* Front */}
          <div className="absolute w-full h-full bg-[#f1f5f9] rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 backface-hidden">
            <FaLeaf className="text-[#4977E5] text-4xl mb-4" />
            <h3 className="font-semibold text-lg">Eco-Friendly Products</h3>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-[#4977E5] text-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
            <p className="text-sm mb-2">
              Safe cleaning solutions that protect people and environment.
            </p>
            <span className="text-lg font-bold">90% Biodegradable</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="group perspective"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
          {/* Front */}
          <div className="absolute w-full h-full bg-[#f1f5f9] rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 backface-hidden">
            <FaClock className="text-[#4977E5] text-4xl mb-4" />
            <h3 className="font-semibold text-lg">Flexible Scheduling</h3>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-[#4977E5] text-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
            <p className="text-sm mb-2">
              We work around your hours to minimize disruption.
            </p>
            <span className="text-lg font-bold">24/7 Availability</span>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div
        className="group perspective"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
          {/* Front */}
          <div className="absolute w-full h-full bg-[#f1f5f9] rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 backface-hidden">
            <FaDollarSign className="text-[#4977E5] text-4xl mb-4" />
            <h3 className="font-semibold text-lg">Affordable Pricing</h3>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-[#4977E5] text-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
            <p className="text-sm mb-2">
              High-quality cleaning that fits your budget.
            </p>
            <span className="text-lg font-bold">Save Up to 30%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Industries We Serve */}
      <section className="py-12 md:py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 md:mb-10" data-aos="fade-up">Industries We Serve</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {industries.map((ind, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-2xl shadow" data-aos="fade-up" data-aos-delay={index * 80}>
                <img src={ind.img} alt={ind.title} className="rounded-xl mb-3 h-36 md:h-40 w-full object-cover" loading="lazy" />
                <h3 className="font-semibold text-center">{ind.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Infographic Cards */}
<section className="py-12 md:py-16 bg-white text-black">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-10">Benefits of Our Services</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {benefits.map((b, idx) => {
        let icon;
        let description;

        switch (b.text) {
          case "Boost Workplace Productivity":
            icon = <FaUserTie className="text-[#4977E5] text-4xl" />;
            description =
              "A clean and organized environment helps employees stay focused, motivated, and efficient throughout the day.";
            break;
          case "Ensure Health & Safety Standards":
            icon = <FaHeartbeat className="text-[#4977E5] text-4xl" />;
            description =
              "Regular sanitation reduces germs, allergens, and hazards, ensuring a safe and healthy workspace for everyone.";
            break;
          case "Create a Lasting First Impression":
            icon = <FaSmile className="text-[#4977E5] text-4xl" />;
            description =
              "Impress clients, visitors, and employees with spotless facilities that reflect professionalism and care.";
            break;
          case "Long-Term Cost Savings":
            icon = <FaDollarSign className="text-[#4977E5] text-4xl" />;
            description =
              "Preventative maintenance and consistent cleaning reduce long-term repair costs and extend the life of your assets.";
            break;
          default:
            icon = <FaStar className="text-[#4977E5] text-4xl" />;
            description = "Professional cleaning services that improve your workspace, safety, and reputation.";
        }

        return (
          <div
            key={idx}
            className="flex items-start bg-white p-6 rounded-2xl shadow-lg space-x-4"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div>{icon}</div>
            <div className="text-left">
              <h3 className="font-semibold text-lg">{b.text}</h3>
              <p className="text-sm mt-1">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  {/* CTA Section */}
<div
  className="relative mt-24 px-6 lg:px-20 max-w-7xl mx-auto"
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
        Ready to Make Your Commercial Space Shine?
      </motion.h2>
      <motion.p
        className="text-white text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Contact us today for a free consultation and customized cleaning plan.
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
>Request a Quote</span>
        <FiArrowRight className="ml-1" />
      </motion.button>

      
    </div>
  </motion.div>
</div>
</section>

    </div>
    
  );
};

export default Commercial;
