import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useState } from "react";
import {  AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
import { FaStar, FaPhone, FaMapMarkerAlt, FaTags, FaUserTie, FaShieldAlt, FaHeadset,FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import cleaningbrush from "../assets/cleaningbrush.png";
import cleaningman from "../assets/cleaningman.png";
import leathercleaning from "../assets/leathercleaning.png";
import upholsteryImage from "../assets/upholsterycleaning.png";
import mattressImage from "../assets/mattresscleaning.png";
import tileImage from "../assets/tilecleaning.png";
import maskgroup from "../assets/maskgroup.png"; // Hero background

// Pricing Images (if needed)
import cleancouch from "../assets/cleancouch.png";



const serviceCards = [
  { title: "Carpet Steam Cleaning", desc: "Deep steam cleaning to remove dirt, stains, and allergens.", img: cleaningbrush },
  { title: "Upholstery Steam Cleaning", desc: "Remove dirt and stains from sofas, chairs, and more.", img: upholsteryImage },
  { title: "Mattress Steam Cleaning", desc: "Sanitize and refresh your mattress for healthier sleep.", img: mattressImage },
  { title: "Flood Damage Restoration", desc: "Professional restoration to minimize water damage.", img: cleaningman },
  { title: "Leather Cleaning", desc: "Special care for leather furniture to restore its shine.", img: leathercleaning },
  { title: "Carpet Patch Repair", desc: "Fix damaged or worn sections of your carpets.", img: cleaningbrush },
  { title: "Stain Removal", desc: "Remove tough stains effectively from various surfaces.", img: cleaningman },
  { title: "Tile Steam Cleaning", desc: "Deep clean tiles and grout to restore shine.", img: tileImage },
  { title: "Car Seats Steam Cleaning", desc: "Professional cleaning for car interiors and seats.", img: upholsteryImage },
];




const faqs = [
  {
    question: "Do you use eco-friendly cleaning products?",
    answer: "Yes! We use environmentally safe and non-toxic cleaning products that are safe for your family and pets.",
  },
  {
    question: "How often should I schedule deep cleaning for my home or office?",
    answer: "We recommend monthly or quarterly deep cleaning depending on the size and usage of your space.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "Not necessarily. You can provide access, and our trusted team will take care of everything while you are away.",
  },
  {
    question: "How long does a typical cleaning session take?",
    answer: "A session usually takes 2-5 hours depending on the service type and property size.",
  },
  {
    question: "How can I book your services?",
    answer: "You can book online through our website, call our support line, or email us directly. We’ll confirm your appointment promptly.",
  },
];


const Services = () => {
      const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full bg-white text-gray-800 pt-[100px]">
    {/* Hero Section */}
<div
  className="relative w-full h-[250px] flex items-center justify-center"
  style={{
    backgroundImage: `url(${maskgroup})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Colored overlay */}
  <div className="absolute inset-0 bg-[#4977E5]/80"></div>

  <div className="relative z-10 text-center text-white">
    <h1 className="text-3xl md:text-4xl font-bold">
      Our <span className="text-white">Services</span>
    </h1>

    {/* Breadcrumbs */}
    <div className="flex items-center justify-center gap-2 text-sm mt-2">
      <FaHome className="text-white" />
      <Link
        to="/"
        className="hover:underline hover:text-gray-200 transition-colors"
      >
        Home
      </Link>
      <span>›</span>
      <span className="font-medium">Services</span>
    </div>
  </div>
</div>

      {/* Features */}
     

      {/* Service Cards */}
      <div className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Our Cleaning Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {serviceCards.map((card, idx) => (
            <div key={idx} className="group bg-white text-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300 hover:bg-[#5B74E7] hover:text-white">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-white p-3 transition duration-300 group-hover:bg-[#5B74E7]">
                  <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed group-hover:text-white">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

{/* Pricing Section */}
      <div
        className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side Text */}
          <div className="bg-[#F3F6FF] rounded-2xl p-8 flex flex-col justify-center space-y-6 shadow-lg">
      <h3 className="text-2xl md:text-3xl font-bold text-[#5B74E7]">
        Save 30% Monthly
      </h3>
      <p className="text-gray-700 font-medium">
        Save 30% Every Month with Our Cleaning Plans
      </p>
      <ul className="space-y-3 text-gray-600 list-disc list-inside">
        <li>Affordable Packages – More Cleaning, Less Cost</li>
        <li>Get More Shine for Less – Flexible Monthly Options</li>
        <li>Regular Cleaning, Big Savings – Choose Your Plan</li>
      </ul>
    </div>


          {/* Right Side Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-1/2">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center border">
              <h3 className="text-xl font-bold text-[#5B74E7] mb-2">
                Basic Plan
              </h3>
              <p className="text-4xl font-bold text-gray-900">
                $20{" "}
                <span className="text-base font-medium text-gray-500">
                  / Month
                </span>
              </p>
              <hr className="my-6" />
              <ul className="space-y-4 text-gray-700 text-base text-left">
                <li>• Weekly Home Cleaning</li>
                <li>• Dusting & Vacuuming</li>
                <li>• Bathroom & Kitchen Touch-ups</li>
                <li>• 24/7 Dedicated Support</li>
              </ul>
              <button className="mt-8 w-full bg-[#5B74E7] text-white py-3 rounded-full font-medium hover:bg-[#3b65cc] transition">
                Get Now →
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl shadow-md p-8 text-center border">
              <h3 className="text-xl font-bold text-[#5B74E7] mb-2">
                Premium Plan
              </h3>
              <p className="text-4xl font-bold text-gray-900">
                $60{" "}
                <span className="text-base font-medium text-gray-500">
                  / Month
                </span>
              </p>
              <hr className="my-6" />
              <ul className="space-y-4 text-gray-700 text-base text-left">
                <li>• Everything in Basic</li>
                <li>• Deep Carpet Cleaning</li>
                <li>• Full Service + Priority Booking</li>
                <li>• 24/7 Dedicated Support</li>
              </ul>
              <button className="mt-8 w-full bg-[#5B74E7] text-white py-3 rounded-full font-medium hover:bg-[#3b65cc] transition">
                Get Now →
              </button>
            </div>
          </div>
        </div>
      </div>


       <div className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto" data-aos="fade-up">
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Frequently Asked Questions
      </h2>

      {/* Subheading + Description */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-[#4977E5] mb-4">
          What types of cleaning services do you offer?
        </h3>
        <p className="text-gray-600 text-lg">
          We provide a wide range of deep cleaning services, including carpet and rug cleaning, leather and upholstery care, tile and grout restoration, and residential and commercial cleaning solutions across Australia.
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="space-y-6 mb-20">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {faq.question}
            </h3>

            <AnimatePresence>
              {openIndex === idx && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>

    </section>
  );
};

export default Services;