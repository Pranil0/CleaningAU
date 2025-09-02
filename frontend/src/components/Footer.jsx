import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import cleaningLogo from "../assets/cleaninglogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f1b2a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-16 pb-8">
        <div className="flex flex-wrap items-start gap-10">
          {/* Logo + description + socials */}
          <div className="flex-shrink-0 w-full md:w-[35%] flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src={cleaningLogo} alt="Cleaning Logo" className="w-32" />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Google"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaGoogle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="flex-shrink-0 w-full sm:w-auto flex flex-col">
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex-shrink-0 w-full sm:w-auto flex flex-col">
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tweet @ Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Webians
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex-shrink-0 w-full sm:w-auto flex flex-col">
            <h4 className="font-semibold text-lg mb-4">Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Become Teacher
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  All in One
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-shrink-0 w-full sm:w-auto flex flex-col">
  <h4 className="font-semibold text-lg mb-4">Contact Us</h4>

  {/* Phone Numbers */}
  <div className="flex flex-col gap-2 mb-2 text-gray-300">
    <div className="flex items-center gap-3">
      <FaPhoneAlt className="w-5 h-5 flex-shrink-0" />
      <span>+61 421 556 777</span>
    </div>
    <div className="flex items-center gap-3">
      <FaPhoneAlt className="w-5 h-5 flex-shrink-0" />
      <span>+61 405 303 169</span>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-center gap-3 text-gray-300">
    <FaEnvelope className="w-5 h-5 flex-shrink-0" />
    <span>urbancarpet.au@gmail.com</span>
  </div>
</div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
        <div className="mb-3 md:mb-0">
          © Copyright by Cleaning. All rights reserved.
        </div>
        <div className="flex gap-8 flex-wrap">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white transition">
            Legal
          </a>
          <a href="#" className="hover:text-white transition">
            Site Map
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
