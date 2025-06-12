import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <header className="fixed w-full bg-secondary z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="#"
                className="text-2xl md:text-3xl text-primary font-['Pacifico'] text-white"
              >
                MarviTech Auto
              </a>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a
                href="#"
                className="text-white hover:text-[#ff6b00] transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white hover:text-[#ff6b00] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#ff6b00] transition-colors"
              >
                About Us
              </a>
              <a
                href="#projects"
                className="text-white hover:text-[#ff6b00] transition-colors"
              >
                Featured Repairs
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#ff6b00] transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center">
              <div
                className="md:hidden ml-4 w-10 h-10 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  if (!sidebarOpen) {
                    setSidebarOpen(true);
                  }
                }}
              >
                {!sidebarOpen ? (
                  <AlignJustify color="#ffffff" strokeWidth={1.5} size={28} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex mt-18">
          <div className="bg-[#222] w-64 h-full p-6 flex flex-col">
            <button
              className="self-end mb-8 text-white text-2xl"
              onClick={() => setSidebarOpen(false)}
            >
              <X color="#ffffff" strokeWidth={1.5} size={28} />
            </button>
            <nav className="flex flex-col space-y-6">
              <a
                href="#"
                className="text-white hover:text-[#ff6b00] transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white hover:text-[#ff6b00] transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#ff6b00] transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                About Us
              </a>
              <a
                href="#projects"
                className="text-white hover:text-[#ff6b00] transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Featured Repairs
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#ff6b00] transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
