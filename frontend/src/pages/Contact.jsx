import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaHome,
  FaBroom,
  FaCheckCircle,
  FaClock,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";
import mask from "../assets/mask.png"; // background image

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "How often should I get my carpets professionally cleaned?",
      a: "It’s recommended to have carpets professionally cleaned every 6–12 months, depending on foot traffic and pets.",
    },
    {
      q: "Do you use eco-friendly cleaning products?",
      a: "Yes, we use 100% eco-friendly and safe cleaning solutions for your family and pets.",
    },
    {
      q: "Can you remove tough stains like wine or coffee?",
      a: "Our stain removal experts specialize in removing even the toughest stains using advanced cleaning techniques.",
    },
    {
      q: "How long does it take for carpets to dry?",
      a: "Typically 3–6 hours depending on the carpet type, ventilation, and cleaning method.",
    },
  ];

  const whyChoose = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
      title: "Expert Carpet Cleaners",
      desc: "Our team is highly trained and experienced in handling all types of carpets.",
    },
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      title: "Eco-Friendly Solutions",
      desc: "We use non-toxic, eco-safe products that are safe for kids and pets.",
    },
    {
      icon: <FaClock className="text-orange-500 text-3xl" />,
      title: "Quick Dry Time",
      desc: "Advanced steam cleaning technology ensures faster drying and less downtime.",
    },
    {
      icon: <FaBroom className="text-purple-500 text-3xl" />,
      title: "Deep Stain Removal",
      desc: "We specialize in tough stain removal, leaving your carpets spotless.",
    },
  ];

  return (
    <div className="w-full pt-[100px]">
      {/* Hero Section */}
      <div
        className="w-full h-48 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${mask})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-sm mt-2 flex items-center gap-2">
          <FaHome className="inline text-white" />
          <Link to="/" className="hover:underline hover:text-gray-200 transition">
            Home
          </Link>{" "}
          &gt; Contact
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Form */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            Contact Our Cleaning Experts
          </h2>
          <p className="text-gray-500 mb-8">
            Shoot us a message if you have any questions, we’re here to help!
          </p>

          <form className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Service Dropdown */}
            <div>
  <select className="w-full border rounded-lg px-4 py-3 text-gray-600 outline-none focus:ring-2 focus:ring-blue-500">
    <option value="">Select the service you’re interested in</option>
    <option>Carpet Steam Cleaning</option>
    <option>Upholstery Steam Cleaning</option>
    <option>Mattress Steam Cleaning</option>
    <option>Flood Damage Restoration</option>
    <option>Tile Steam Cleaning</option>
    <option>Car Seats Steam Cleaning</option>
    <option>Stain Removal</option>
    <option>Carpet Patch Repair</option>
    <option>Leather Cleaning</option>
  </select>
</div>

            {/* Message */}
            <div>
              <textarea
                rows="5"
                placeholder="Tell us how we can help you..."
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button className="bg-blue-600 w-full md:w-auto text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition">
              Get In Touch
            </button>
          </form>
        </div>

        {/* Right: Contact Details */}
    <div className="bg-gray-50 rounded-2xl shadow-md p-8">
  <h2 className="text-xl font-semibold mb-6 text-gray-800">
    Contact Details
  </h2>

  {/* Location */}
  <p className="text-gray-600 mb-2">Sydney, Australia</p>

  {/* Email */}
  <p className="text-gray-600 mb-2">urbancarpet.au@gmail.com</p>

  {/* Phone Numbers */}
  <p className="text-blue-600 font-bold text-lg mb-8">
    0421 556 777<br />
    0405 303 169
  </p>

  {/* Social Icons */}
  <div className="flex space-x-4 text-gray-600 text-lg">
    <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
    <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
    <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
    <FaGoogle className="cursor-pointer hover:text-red-500 transition" />
  </div>
</div>

      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 focus:outline-none"
              >
                {faq.q}
                <span>{activeFaq === idx ? "−" : "+"}</span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
