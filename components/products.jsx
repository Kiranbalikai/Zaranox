"use client";

import { useState } from "react";
import {
  Lightbulb,
  Zap,
  Fan,
  Cable,
  Home,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productSeries = [
    {
      name: "Magic Series",
      description:
        "Premium modular switches with contemporary aesthetics and superior functionality",
      features: [
        "Modular Switches",
        "Designer Sockets",
        "Smart Dimmers",
        "Premium Finishes",
      ],
      image: "/premium-modular-electrical-switches-gold-finish-mo.jpg",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      name: "Tanish Collection",
      description:
        "Elegant switch designs that blend seamlessly with modern interiors",
      features: [
        "Gem Switches",
        "Carbon Series",
        "Designer Plates",
        "Premium Materials",
      ],
      image: "/elegant-designer-electrical-switches-luxury-interi.jpg",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      name: "LED Illumination",
      description:
        "Energy-efficient lighting solutions for every space and application",
      features: [
        "Panel Lights",
        "Flood Lights",
        "Street Lighting",
        "Decorative LEDs",
      ],
      image: "/modern-led-panel-lights-energy-efficient-lighting-.jpg",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      name: "Ceiling Fans",
      description:
        "Modern ceiling fans with integrated LED technology and smart controls",
      features: [
        "LED Integration",
        "Remote Control",
        "Energy Efficient",
        "Designer Blades",
      ],
      image: "/modern-ceiling-fan-led-lights-remote-control-premi.jpg",
      icon: <Fan className="w-6 h-6" />,
    },
    {
      name: "Premium Wiring",
      description:
        "High-grade copper wires and cables ensuring safety and reliability",
      features: [
        "Pure Copper",
        "Multi-Strand",
        "Flexible Design",
        "ISI Certified",
      ],
      image: "/premium-copper-electrical-wires-cables-high-qualit.jpg",
      icon: <Cable className="w-6 h-6" />,
    },
    {
      name: "Smart Appliances",
      description:
        "Complete range of intelligent home appliances for modern living",
      features: [
        "Smart Geysers",
        "Exhaust Systems",
        "Home Automation",
        "IoT Enabled",
      ],
      image: "/smart-home-appliances-automation-modern-electrical.jpg",
      icon: <Home className="w-6 h-6" />,
    },
    {
      name: "Industrial Solutions",
      description:
        "Heavy-duty electrical components designed for industrial applications",
      features: [
        "High Voltage",
        "Weather Resistant",
        "Industrial Grade",
        "Safety Certified",
      ],
      image: "/industrial-electrical-control-panels-and-switchgea.jpg",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      name: "Smart Home Systems",
      description:
        "Complete home automation solutions with intelligent control systems",
      features: [
        "Voice Control",
        "App Integration",
        "Energy Monitoring",
        "Security Features",
      ],
      image: "/modern-smart-home-automation-control-panel-with-to.jpg",
      icon: <Home className="w-6 h-6" />,
    },
    {
      name: "Solar Solutions",
      description:
        "Renewable energy systems with advanced solar technology integration",
      features: [
        "Solar Panels",
        "Inverters",
        "Battery Storage",
        "Grid Integration",
      ],
      image: "/premium-solar-panels-and-electrical-inverter-syste.jpg",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      name: "Copper Coil Pro",
      description:
        "High-performance copper coils for industrial and residential use.",
      features: [
        "Pure Copper",
        "Long Lasting",
        "Flexible",
        "High Conductivity",
      ],
      image: "/premium-electrical-copper-wire-coil.jpg",
      icon: <Cable className="w-6 h-6" />,
    },
    {
      name: "Gold Switch Elite",
      description: "Luxury gold-finish switches for premium interiors.",
      features: [
        "Gold Finish",
        "Elegant Design",
        "Durable",
        "Easy Installation",
      ],
      image: "/premium-electrical-switch-gold-finish.jpg",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      name: "LED Fan Modern",
      description:
        "Modern LED ceiling fan with remote and energy-saving features.",
      features: [
        "Remote Control",
        "LED Lighting",
        "Silent Operation",
        "Energy Efficient",
      ],
      image: "/modern-led-ceiling-fan-with-remote.jpg",
      icon: <Fan className="w-6 h-6" />,
    },
    {
      name: "Panel Light Pro",
      description: "Advanced LED panel lights for offices and homes.",
      features: ["Slim Design", "Bright Output", "Low Power", "Long Life"],
      image: "/modern-led-panel-lights-energy-efficient-lighting-.jpg",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      name: "Designer Modular Switch",
      description: "Stylish modular switches for contemporary spaces.",
      features: [
        "Modular",
        "Designer Plates",
        "Premium Build",
        "Easy Maintenance",
      ],
      image: "/premium-modular-electrical-switches-gold-finish-mo.jpg",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      name: "Smart Inverter System",
      description: "Reliable inverter systems for uninterrupted power supply.",
      features: ["High Efficiency", "Smart Monitoring", "Safe", "Easy Setup"],
      image: "/premium-solar-panels-and-electrical-inverter-syste.jpg",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const totalPages = Math.ceil(productSeries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = productSeries.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/flowing-gold-background.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="text-yellow-400 text-sm font-medium tracking-[0.2em] uppercase font-inter">
              Premium Collection
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-8 text-balance leading-tight">
            Crafted for
            <br />
            <span className="text-yellow-400">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-inter leading-relaxed">
            Every product in our collection represents decades of innovation,
            quality craftsmanship, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="space-y-16">
          {currentProducts.map((product, index) => (
            <div
              key={startIndex + index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 relative group">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6">
                    <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full p-3 text-yellow-400">
                      {product.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold font-inter">
                      Premium Quality
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-yellow-400 mb-4">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-300 mb-8 text-pretty font-inter leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span className="text-gray-400 font-inter">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  className="bg-transparent border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 font-inter font-medium"
                  onClick={() => {
                    setSelectedProduct(product);
                    setModalOpen(true);
                  }}
                >
                  Explore Range
                </button>
                {/* Modal for product details */}
                {modalOpen && selectedProduct && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
                    <div
                      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-yellow-400/30 rounded-3xl shadow-2xl p-0 max-w-xl w-full relative overflow-hidden"
                      style={{ minHeight: "350px", maxHeight: "450px" }}
                    >
                      <button
                        className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-500 text-2xl font-bold z-10"
                        onClick={() => setModalOpen(false)}
                        aria-label="Close"
                      >
                        &times;
                      </button>
                      <div className="flex flex-col md:flex-row items-center gap-6 p-8">
                        <div className="flex flex-col items-center md:items-start md:w-1/3">
                          <div className="relative">
                            <img
                              src={selectedProduct.image || "/placeholder.svg"}
                              alt={selectedProduct.name}
                              className="w-32 h-32 object-cover rounded-2xl shadow-lg border-2 border-yellow-400"
                            />
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400/30 border border-yellow-400/50 rounded-full p-2 text-yellow-400 shadow-md">
                              {selectedProduct.icon}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2 text-center md:text-left">
                            {selectedProduct.name}
                          </h3>
                          <p className="text-gray-300 text-sm md:text-base mb-3 text-center md:text-left">
                            {selectedProduct.description}
                          </p>
                          <div className="mb-2 w-full">
                            <span className="text-yellow-400 font-semibold">
                              Features:
                            </span>
                            <ul className="mt-2 grid grid-cols-2 gap-2 text-gray-400 text-xs md:text-sm">
                              {selectedProduct.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-2 w-full">
                            <span className="text-yellow-400 font-semibold">
                              Why choose this?
                            </span>
                            <p className="text-gray-400 text-xs md:text-sm mt-1">
                              Experience premium quality, innovative design, and
                              reliable performance. Perfect for modern homes and
                              demanding environments.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-4 py-4 bg-black/30 border-t border-yellow-400/10">
                        <button
                          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 font-inter shadow-md"
                          onClick={() => setModalOpen(false)}
                        >
                          Close
                        </button>
                        {/* Download Catalog button removed */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center gap-4">
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="p-3 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  currentPage === page
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="p-3 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-24 text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 rounded-[3rem] blur-xl" />
            <div className="relative bg-black/40 backdrop-blur-md border border-yellow-400/20 rounded-[3rem] p-12 lg:p-16">
              <div className="mb-6">
                <span className="text-yellow-400 text-sm font-medium tracking-[0.2em] uppercase font-inter">
                  Ready to Transform?
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6 text-balance">
                Experience the
                <br />
                <span className="text-yellow-400">Zaronox Difference</span>
              </h3>

              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-inter leading-relaxed">
                Join thousands of satisfied customers who have chosen Zaronox
                for their premium electrical solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#contact"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 font-inter block text-center"
                >
                  Get Quote Now
                </a>
                {/* Download Catalog button removed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
