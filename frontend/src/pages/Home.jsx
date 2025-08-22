import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaTags,
  FaUserTie,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";


import cleaningteam from "../assets/cleaningteam.png";
import cleaningbrush from "../assets/cleaningbrush.png";
import cleaningman from "../assets/cleaningman.png";
import leathercleaning from "../assets/leathercleaning.png";
import upholsteryImage from "../assets/upholsterycleaning.png";
import mattressImage from "../assets/mattresscleaning.png";
import tileImage from "../assets/tilecleaning.png";
import mancleaning from "../assets/mancleaning.png";
import cleancouch from "../assets/cleancouch.png";
import mask from "../assets/mask.png";
import { useNavigate, Link } from "react-router-dom";

import blog1Thumbnail from "../assets/blog/blog1Thumbnail.png";
import blog2Thumbnail from "../assets/blog/blog2Thumbnail.png";
import blog3Thumbnail from "../assets/blog/blog3Thumbnail.png";
import blog4Thumbnail from "../assets/blog/blog4Thumbnail.png";
import blog5Thumbnail from "../assets/blog/blog5Thumbnail.png";
import blog6Thumbnail from "../assets/blog/blog6Thumbnail.png";

// Full Images
import blog1Full from "../assets/blog/blog1Full.png";
import blog2Full from "../assets/blog/blog2Full.png";
import blog3Full from "../assets/blog/blog3Full.png";
import blog4Full from "../assets/blog/blog4Full.png";
import blog5Full from "../assets/blog/blog5Full.png";
import blog6Full from "../assets/blog/blog6Full.png";

const features = [
  {
    icon: <FaTags className="text-[#4977E5] text-3xl" />,
    title: "Best Price",
    desc: "Cheap & best price",
  },
  {
    icon: <FaUserTie className="text-[#4977E5] text-3xl" />,
    title: "Trained Professionals",
    desc: "Skilled, certified cleaners",
  },
  {
    icon: <FaShieldAlt className="text-[#4977E5] text-3xl" />,
    title: "Customer’s Protection",
    desc: "Safe and secure services",
  },
  {
    icon: <FaHeadset className="text-[#4977E5] text-3xl" />,
    title: "Live Support",
    desc: "Help anytime, anywhere",
  },
];
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

// Latest News style cards data
const blogs = [
  {
    id: 1,
    title: "Pet Owners’ Cleaning Guide",
    desc: "Pets bring joy, but keeping your home clean is essential for safety and hygiene.",
    thumbnail: blog1Thumbnail,
    full: blog1Full,
  },
  {
    id: 2,
    title: "Why Professional Home Cleaning is Booming in Australia (and How You Can Benefit)",
    desc: "Discover why professional cleaning is in demand, and how hiring experts can save you time while maintaining a healthy home.",
    thumbnail: blog2Thumbnail,
    full: blog2Full,
  },
  {
    id: 3,
    title: "How Often Should You Really Clean These 15 Household Items?",
    desc: "Avoid germs by knowing exactly when and how to clean your household items. This guide gives clear cleaning schedules.",
    thumbnail: blog3Thumbnail,
    full: blog3Full,
  },
  {
    id: 4,
    title: "10 Everyday Cleaning Hacks That Actually Work",
    desc: "Practical cleaning hacks that save time, money, and effort while keeping your home sparkling.",
    thumbnail: blog4Thumbnail,
    full: blog4Full,
  },
  {
    id: 5,
    title: "Cleaning Schedules That Actually Work: Daily, Weekly, Monthly",
    desc: "Organize your cleaning tasks efficiently with structured schedules that really work.",
    thumbnail: blog5Thumbnail,
    full: blog5Full,
  },
  {
    id: 6,
    title: "5 Common Cleaning Mistakes That Could Be Harming Your Health",
    desc: "Avoid common cleaning mistakes that could negatively affect your health and wellbeing.",
    thumbnail: blog6Thumbnail,
    full: blog6Full,
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
   const navigate = useNavigate();

  return (
    <section className=" w-full bg-white pt-[150px] pb-16">
      {/* Hero Section */}
      <div
        className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between"
        data-aos="fade-up"
      >
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Deep <span className="text-[#4977E5]">Cleaning</span> For A <br />
            <span className="inline-block mt-1">Healthier, Fresher Home</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
            Bringing shine and freshness to every corner – trusted cleaning
            solutions for homes, offices, and carpets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
            onClick={() => navigate("/contact")}
            className="bg-[#4977E5] hover:bg-[#3b65cc] text-white px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:scale-105">
              Get Free Quote
            </button>
            <button className="border border-[#4977E5] text-[#4977E5] hover:bg-[#4977E5] hover:text-white px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:scale-105">
              View Our Services
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end">
          <img
            src={cleaningteam}
            alt="Cleaning Team"
            className="w-full max-w-md"
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>

      {/* Features */}
      <div
        className="mt-12 px-6 lg:px-20 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 p-6 rounded-lg shadow-sm bg-white cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:drop-shadow-[0_0_6px_rgba(73,119,229,0.3)]"
            >
              <div>{item.icon}</div>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

        {/* Latest Projects */}
<div
  className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto text-center"
  data-aos="fade-up"
>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    Keep your vision to our latest <br />
    <span className="inline-block mt-1">projects.</span>
  </h2>
  <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10">
    Awesome site. on the top advertising a business online includes{" "}
    <br className="hidden sm:block" />
    assembling Having the most keep.
  </p>

  {/* Show only first 6 service cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {serviceCards.slice(0, 6).map((card, idx) => (
      <div
        key={idx}
        className="group bg-white text-gray-900 rounded-xl p-6 shadow-md hover:scale-105 transition duration-300 hover:bg-[#5B74E7] hover:text-white"
        data-aos="zoom-in"
      >
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-white p-3 transition duration-300 group-hover:bg-[#5B74E7]">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
        <p className="text-sm leading-relaxed group-hover:text-white">
          {card.desc}
        </p>
      </div>
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
      {/* We Make Mess Look Great */}
      <div
        className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
        data-aos="fade-up"
      >
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We Make Mess Look Great!
          </h2>
          <p className="text-gray-600 mb-6">
            At Cleaning, we transform cluttered, dusty, and stained spaces into
            spotless, welcoming environments.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">—</span>
              <p className="font-medium text-gray-800">
                Residential Cleaning Services Near You!
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">—</span>
              <p className="font-medium text-gray-800">
                Commercial Cleaning Service In Australia.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">—</span>
              <p className="font-medium text-gray-800">
                Professional Floor & Carpet Cleaning.
              </p>
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        <div className="relative lg:w-1/2">
          <div className="bg-blue-50 rounded-3xl p-6 relative w-full max-w-md mx-auto shadow-lg">
            <img
              src={mancleaning}
              alt="Man Cleaning"
              className="w-full object-contain rounded-2xl"
            />
            <div className="absolute top-4 right-4 bg-white border border-blue-300 rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
              <span className="text-3xl">💼</span>
              <div>
                <p className="text-xl font-semibold text-gray-900">
                  <CountUp end={16} duration={5} suffix="+" />
                </p>
                <p className="text-gray-500 text-sm">Cleaning Office</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white border border-blue-300 rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
              <span className="text-3xl">👥</span>
              <div>
                <p className="text-xl font-semibold text-gray-900">
                  <CountUp end={100} duration={5} suffix="+" />
                </p>
                <p className="text-gray-500 text-sm">Assisted People</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        className="mt-24 py-16 relative px-6 lg:px-20"
        style={{
          backgroundImage: `url(${mask})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-blue-600 opacity-60 rounded-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-white text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={500} duration={2} />+
            </h3>
            <p className="mt-2">Project Done</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={800} duration={2} />
            </h3>
            <p className="mt-2">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={18} duration={2} />+
            </h3>
            <p className="mt-2">Years Combined Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={600} duration={2} />+
            </h3>
            <p className="mt-2">Carpets Restored</p>
          </div>
        </div>
      </div>

      

      {/* Pricing Section */}
      <div
        className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side Text */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Save 30% Monthly
            </h2>
            <ul className="space-y-4 text-gray-500 text-lg">
              <li>• “Save 30% Every Month with Our Cleaning Plans”</li>
              <li>• “Affordable Packages – More Cleaning, Less Cost”</li>
              <li>• “Get More Shine for Less – Flexible Monthly Options”</li>
              <li>• “Regular Cleaning, Big Savings – Choose Your Plan”</li>
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
              <button             onClick={() => navigate("/contact")}  // ✅ works for desktop too

className="mt-8 w-full bg-[#5B74E7] text-white py-3 rounded-full font-medium hover:bg-[#3b65cc] transition">
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
              <button           
               onClick={() => navigate("/contact")}  // ✅ works for desktop too
className="mt-8 w-full bg-[#5B74E7] text-white py-3 rounded-full font-medium hover:bg-[#3b65cc] transition">
                Get Now →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Real feedback from our happy customers who have experienced the shine
          and freshness of our carpet and home cleaning services.
        </p>

        <Slider
          dots={true}
          infinite={true}
          speed={600}
          slidesToShow={2}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          pauseOnHover={true}
          arrows={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {/* Testimonial 1 */}
          <div className="p-6">
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Client"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4 italic">
                “I was amazed by the difference after the carpet cleaning! It
                looks brand new, and the team was so professional and punctual.”
              </p>
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                Sarah Johnson
              </h4>
              <span className="text-sm text-gray-500">
                Homeowner, Melbourne
              </span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6">
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="https://randomuser.me/api/portraits/men/35.jpg"
                alt="Client"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4 italic">
                “Highly recommend their services. We got our office carpets
                cleaned and were impressed with the spotless results and fresh
                smell.”
              </p>
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                David Thompson
              </h4>
              <span className="text-sm text-gray-500">
                Office Manager, Sydney
              </span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6">
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Client"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4 italic">
                “Affordable and reliable carpet cleaning service. My pets had
                made quite a mess, but they handled it with care and detail.”
              </p>
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <FaStar className="text-gray-300" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                Emily White
              </h4>
              <span className="text-sm text-gray-500">
                Pet Owner, Brisbane
              </span>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="p-6">
            <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="https://randomuser.me/api/portraits/men/77.jpg"
                alt="Client"
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4 italic">
                “Their team arrived on time, explained the process, and
                completed the job efficiently. I will be using their services
                again!”
              </p>
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                James Lee
              </h4>
              <span className="text-sm text-gray-500">
                Restaurant Owner, Adelaide
              </span>
            </div>
          </div>
        </Slider>
      </div>

      {/* Contact Section */}
      <div
        className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image and Contact Info */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={cleancouch}
              alt="Clean Couch"
              className="w-full rounded-[40px] object-cover"
            />
            {/* Phone Tag */}
            <div className="absolute -bottom-6 left-0 bg-white px-5 py-3 rounded-2xl shadow-md border border-[#d2d2d2] flex items-center gap-3">
              <FaPhone className="text-purple-600 text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-sm text-gray-600">245-552-58555</p>
              </div>
            </div>

            {/* Location Tag */}
            <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-2xl shadow-md border border-[#d2d2d2] flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-600 text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-sm text-gray-600">Austrilia</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="w-full lg:w-1/2 bg-white p-10 rounded-3xl shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Having Question?
              <br />
              Get in <span className="text-[#6C7BFF]">touch!</span>
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6C7BFF]"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6C7BFF]"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Residence
                </label>
                <select className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#6C7BFF] text-gray-600">
                  <option>Select your residence</option>
                  <option>Melbourne</option>
                  <option>Sydney</option>
                  <option>Brisbane</option>
                  <option>Adelaide</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#6C7BFF] text-white py-3 rounded-full font-medium hover:bg-[#5a69e0] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
       {/* Latest News Style Section */}
<div
  className="mt-24 px-6 lg:px-20 max-w-7xl mx-auto"
  data-aos="fade-up"
>
  <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
    Our Latest News
  </h2>
  <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
    Awesome site. on the top advertising a business online includes
    assembling Having the most keep.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {blogs.map((card, idx) => (
      <div
        key={idx}
        className="flex bg-white rounded-2xl shadow-lg overflow-hidden group"
      >
        <div className="w-1/3">
          <img
            src={card.thumbnail}
            alt={card.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{card.desc}</p>
          </div>
       

<div>
  <Link
    to={`/blog/${card.id}`} // dynamic route for specific blog
    className="text-[#5B74E7] font-medium inline-flex items-center gap-1 hover:underline"
  >
    Learn More <span className="transform translate-y-[1px]">→</span>
  </Link>
</div>

        </div>
      </div>
    ))}
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
        className="text-4xl font-extrabold text-white leading-tight"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "circOut" }}
      >
        Ready to Transform Your Space?
      </motion.h2>
      <motion.p
        className="text-white text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Join hundreds of satisfied clients. Get a free quote today and start
        experiencing a cleaner, healthier home with our professional services.
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
    </section>
  );
};

export default Home;
