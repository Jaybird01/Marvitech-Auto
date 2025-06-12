import {
  ClockFading,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1A1A1A] pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <a
                href="#"
                className="text-3xl font-['Pacifico'] text-white mb-4 inline-block"
              >
                MarviTech Auto
              </a>
              <p className="text-gray-400 mb-6">
                Your trusted partner for professional home repair and renovation
                services. Quality workmanship guaranteed.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-[#2A2A2A] rounded-full hover:bg-primary transition-colors"
                >
                  <Facebook fill="#fff" strokeWidth={0} size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-[#2A2A2A] rounded-full hover:bg-primary transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-[#2A2A2A] rounded-full hover:bg-primary transition-colors"
                >
                  <Linkedin size={18} fill="#fff" strokeWidth={0} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-[#2A2A2A] rounded-full hover:bg-primary transition-colors"
                >
                  <Twitch size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Replacement and Repairs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Electrical Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Engine Diagnostic & Repair
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Painting Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Transmission Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Complete Fluid Change Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Our Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Pricing Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#2A2A2A] rounded-full mr-3">
                    <MapPin size={18} color="#ff6b00" />
                  </div>
                  <span className="text-gray-400">
                    1234 Repair Avenue, Lagos, Nigeria
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#2A2A2A] rounded-full mr-3">
                    <Phone color="#ff6b00" size={18} />
                  </div>
                  <span className="text-gray-400">(+234) 80-1234-5678</span>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#2A2A2A] rounded-full mr-3">
                    <Mail size={18} color="#ff6b00" />
                  </div>
                  <span className="text-gray-400">info@MarvitechAuto.com</span>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#2A2A2A] rounded-full mr-3">
                    <ClockFading size={18} color="#ff6b00" />
                  </div>
                  <span className="text-gray-400">
                    Mon-Fri: 8am-6pm
                    <br />
                    Sat: 9am-4pm
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 mb-4 md:mb-0">
                © 2025{" "}
                <span className="font-[pacifico] text-primary">
                  MarviTech Auto
                </span>
                . All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff6b00] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff6b00] transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#ff6b00] transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
