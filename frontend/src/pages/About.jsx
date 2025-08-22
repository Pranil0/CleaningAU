import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaBriefcase } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import maskgroup from "../assets/maskgroup.png";
import cleaning from "../assets/cleaning.png";

// New service images
import cleaningbrush from "../assets/cleaningbrush.png";
import cleaningman from "../assets/cleaningman.png";
import leathercleaning from "../assets/leathercleaning.png";
import upholsterycleaning from "../assets/upholsterycleaning.png";
import mattresscleaning from "../assets/mattresscleaning.png";
import tilecleaning from "../assets/tilecleaning.png";
import { useNavigate } from "react-router-dom";

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

            className="bg-[#4977E5] hover:bg-[#3b65cc] text-white px-6 py-3 rounded-lg shadow-md font-medium transition-all duration-200">
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

      {/* ✅ Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keep your vision to our latest projects.
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Awesome site. On the top advertising a business online includes
            assembling Having the most keep.
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                img: cleaningbrush,
                title: "Carpet Cleaning",
                desc: "Deep steam cleaning to remove dirt, stains, and allergens.",
              },
              {
                img: cleaningman,
                title: "Rug Cleaning",
                desc: "Gentle treatment to keep your rugs looking new.",
              },
              {
                img: leathercleaning,
                title: "Leather Cleaning",
                desc: "Special care for leather furniture to restore its shine.",
              },
              {
                img: upholsterycleaning,
                title: "Upholstery Cleaning",
                desc: "Remove dirt and stains from sofas, chairs, and more.",
              },
              {
                img: mattresscleaning,
                title: "Mattress Cleaning",
                desc: "Sanitize and refresh your mattress for healthier sleep.",
              },
              {
                img: tilecleaning,
                title: "Tile Cleaning",
                desc: "Deep clean tiles and grout to restore shine.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#6366F1] hover:text-white cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-semibold group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 group-hover:text-white">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            What Our Clients Say
          </h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              {
                img: "https://i.pravatar.cc/150?img=1",
                name: "Emily Johnson",
                review:
                  "The cleaning team was amazing! My house looks brand new. Highly recommend their services.",
              },
              {
                img: "https://i.pravatar.cc/150?img=2",
                name: "Michael Smith",
                review:
                  "Very professional and punctual. They cleaned my office thoroughly and efficiently.",
              },
              {
                img: "https://i.pravatar.cc/150?img=3",
                name: "Sophia Williams",
                review:
                  "Excellent work on my carpets and sofa. Everything looks spotless now.",
              },
              {
                img: "https://i.pravatar.cc/150?img=4",
                name: "David Brown",
                review:
                  "Friendly staff and top-notch cleaning services. Will definitely book again.",
              },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between text-center h-full min-h-[280px] transition-all hover:shadow-lg">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4 border-4 border-[#4977E5] object-cover"
                  />
                  <p className="text-gray-600 italic mb-4 flex-1">
                    "{testimonial.review}"
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-auto">
                    {testimonial.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

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
      <a
        href="/contact"
        className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
                  onClick={() => navigate("/contact")}  
>
        Get a Free Quote
      </a>
      <a
        href="/services"
        className="px-8 py-3 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition"
      >
        View Services
      </a>
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
