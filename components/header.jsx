"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12
              rounded-lg flex items-center justify-center shadow-lg p-1"
            >
              <img
                src="/Zaronox-logo.png"
                alt="Zaronox Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* <div>
              <h1 className="text-white font-poppins font-bold text-xl">
                Zaronox
              </h1>
              <p className="text-yellow-400 text-xs font-inter">
                Electrical Solutions
              </p>
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-inter"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-inter"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("careers")}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-inter"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-inter"
            >
              Contact
            </button>
            <a
              href="#contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 font-inter block text-center"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-yellow-400/20 py-4">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left py-2 font-inter"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left py-2 font-inter"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("careers")}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left py-2 font-inter"
              >
                Careers
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-left py-2 font-inter"
              >
                Contact
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 w-fit font-inter">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
