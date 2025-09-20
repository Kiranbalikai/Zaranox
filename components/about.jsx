"use client";

import { useState } from "react";
import {
  Award,
  Users,
  Building,
  Target,
  Factory,
  FlaskConical,
  Lightbulb,
} from "lucide-react";

export default function About() {
  const stats = [
    {
      number: "45+",
      label: "Yrs of Excellence",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "1000+",
      label: "Products",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "50,000+",
      label: "Happy Customers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "100+",
      label: "Cities Served",
      icon: <Building className="w-6 h-6" />,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Info for modals
  const aboutSections = [
    {
      key: "manufacturing",
      title: "Manufacturing Excellence",
      image: "/modern-electrical-manufacturing-facility-with-adva.jpg",
      icon: <Factory className="w-8 h-8" />,
      subtitle: "State-of-the-art facility in Delhi",
      details:
        "Our Delhi facility is equipped with advanced machinery and automation, ensuring precision, safety, and efficiency in every product we manufacture. We follow global best practices and maintain strict quality controls throughout the process.",
    },
    {
      key: "innovation",
      title: "Product Innovation",
      image: "/electrical-product-innovation-research-and-develop.jpg",
      icon: <Lightbulb className="w-8 h-8" />,
      subtitle: "Innovation Hub",
      details:
        "Our R&D hub drives continuous innovation, developing new products and technologies to meet evolving market needs. We invest in research, design, and testing to deliver solutions that set industry benchmarks.",
    },
    {
      key: "quality",
      title: "Quality Testing",
      image: "/electrical-quality-testing-laboratory-with-precisi.jpg",
      icon: <FlaskConical className="w-8 h-8" />,
      subtitle: "Quality Assurance",
      details:
        "Every product undergoes rigorous testing in our state-of-the-art labs. We adhere to international standards, ensuring reliability, safety, and performance. Our commitment to quality is unwavering.",
    },
  ];

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
              Our Story • Since 1980
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-8 text-balance leading-tight">
            Legacy of
            <br />
            <span className="text-yellow-400">Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-inter leading-relaxed">
            From humble beginnings in Delhi to becoming India's most trusted
            electrical brand, our journey is defined by unwavering commitment to
            excellence and innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { text: "ISO Certified", icon: <Award className="w-4 h-4" /> },
            { text: "BIS Approved", icon: <Target className="w-4 h-4" /> },
            { text: "Made in India", icon: <Building className="w-4 h-4" /> },
            { text: "Quality Assured", icon: <Users className="w-4 h-4" /> },
          ].map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded-full px-8 py-4 hover:border-yellow-400/50 transition-colors duration-300 flex items-center gap-3"
            >
              <div className="text-yellow-400">{cert.icon}</div>
              <span className="text-yellow-400 font-semibold font-inter">
                {cert.text}
              </span>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Manufacturing Excellence */}
            <div className="text-center space-y-4">
              <div className="relative group mx-auto w-fit">
                <button
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 focus:outline-none"
                  style={{
                    padding: 0,
                    margin: 0,
                    border: "none",
                    background: "none",
                  }}
                  onClick={() => {
                    setModalContent(aboutSections[0]);
                    setModalOpen(true);
                  }}
                  aria-label={aboutSections[0].title}
                >
                  <img
                    src="/modern-electrical-manufacturing-facility-with-adva.jpg"
                    alt="Manufacturing Facility"
                    className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full p-2 text-yellow-400">
                      <Factory className="w-5 h-5" />
                    </div>
                  </div>
                </button>
              </div>
              <h3 className="text-xl font-poppins font-bold text-white">
                Manufacturing Excellence
              </h3>
              <p className="text-gray-300 font-inter text-sm">
                State-of-the-art facility in Delhi
              </p>
            </div>

            {/* Central Years Circle */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-poppins font-bold">45+</div>
                  <div className="text-sm font-semibold font-inter">Years</div>
                </div>
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>

            {/* Product Innovation */}
            <div className="text-center space-y-4">
              <div className="relative group mx-auto w-fit">
                <button
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 focus:outline-none"
                  style={{
                    padding: 0,
                    margin: 0,
                    border: "none",
                    background: "none",
                  }}
                  onClick={() => {
                    setModalContent(aboutSections[1]);
                    setModalOpen(true);
                  }}
                  aria-label={aboutSections[1].title}
                >
                  <img
                    src="/electrical-product-innovation-research-and-develop.jpg"
                    alt="Product Innovation"
                    className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full p-2 text-yellow-400">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                  </div>
                </button>
              </div>
              <h3 className="text-xl font-poppins font-bold text-white">
                Innovation Hub
              </h3>
              <p className="text-gray-300 font-inter text-sm">
                Cutting-edge R&D capabilities
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="relative group mx-auto w-fit max-w-md">
              <button
                className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 focus:outline-none"
                style={{
                  padding: 0,
                  margin: 0,
                  border: "none",
                  background: "none",
                }}
                onClick={() => {
                  setModalContent(aboutSections[2]);
                  setModalOpen(true);
                }}
                aria-label={aboutSections[2].title}
              >
                <img
                  src="/electrical-quality-testing-laboratory-with-precisi.jpg"
                  alt="Quality Testing"
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full p-2 text-yellow-400">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                </div>
              </button>
            </div>
            <h3 className="text-xl font-poppins font-bold text-white mt-4">
              Quality Assurance
            </h3>
            <p className="text-gray-300 font-inter text-sm">
              Rigorous testing standards
            </p>
          </div>

          {/* Modal for about sections */}
          {modalOpen && modalContent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
              <div
                className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-yellow-400/30 rounded-3xl shadow-2xl p-0 max-w-xl w-full relative overflow-hidden"
                style={{ minHeight: "320px", maxHeight: "420px" }}
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
                        src={modalContent.image}
                        alt={modalContent.title}
                        className="w-28 h-28 object-cover rounded-2xl shadow-lg border-2 border-yellow-400"
                      />
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400/30 border border-yellow-400/50 rounded-full p-2 text-yellow-400 shadow-md">
                        {modalContent.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2 text-center md:text-left">
                      {modalContent.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-3 text-center md:text-left">
                      {modalContent.subtitle}
                    </p>
                    <div className="mb-2 w-full">
                      <span className="text-yellow-400 font-semibold">
                        Details:
                      </span>
                      <p className="mt-2 text-gray-400 text-xs md:text-sm">
                        {modalContent.details}
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
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-poppins font-bold text-yellow-400 tracking-[0.3em] uppercase">
            Premium Collection
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-md border border-yellow-400/30 rounded-full w-32 h-32 flex flex-col items-center justify-center group-hover:border-yellow-400/50 transition-colors duration-300">
                  <div className="text-yellow-400 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-poppins font-bold text-yellow-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-300 font-inter text-center px-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-poppins font-bold text-white mb-8">
            Our Journey
          </h3>
          <div className="space-y-6 text-lg text-gray-300 font-inter leading-relaxed">
            <p>
              Founded by visionary leaders and now led by directors{" "}
              <span className="text-yellow-400 font-semibold">
                Gaurav Aggarwal
              </span>{" "}
              and{" "}
              <span className="text-yellow-400 font-semibold">
                Aakash Aggarwal
              </span>
              , Zaronox Electrical Solutions represents four decades of
              electrical innovation and excellence.
            </p>
            <p>
              Our comprehensive product ecosystem spans modular switches,
              premium wires, LED lighting solutions, ceiling fans, and smart
              home appliances - all engineered at our state-of-the-art facility
              in Bawana Industrial Area, Delhi.
            </p>
            <p>
              Beyond business success, we're committed to social impact,
              contributing Re. 1 from every Zaronox SWITCH Box towards primary
              education and rural development initiatives across India, touching
              thousands of lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
