import { Phone, Globe, MapPin, Award, Building } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-yellow-400/20 py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/flowing-gold-background.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-poppins font-bold text-yellow-400 mb-6">
              Zaronox Electrical Solutions
            </h3>
            <p className="text-gray-300 mb-6 text-pretty font-inter leading-relaxed">
              Illuminating Excellence Since 1980. India's premier electrical
              solutions provider committed to quality, innovation, and
              unwavering customer satisfaction.
            </p>
            <div className="inline-flex items-center gap-3 bg-yellow-400/80 border border-yellow-400 rounded-full px-6 py-3">
              <Award className="w-4 h-4 text-black" />
              <span className="text-black font-medium font-inter text-sm">
                Award Winning Excellence 2024
              </span>
            </div>
          </div>

          {/* Product Categories */}
          <div className="text-center lg:text-left">
            <h4 className="text-2xl font-poppins font-bold text-white mb-6">
              Our Products
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Modular Switches",
                "LED Lighting",
                "Ceiling Fans",
                "Premium Wires",
                "Smart Appliances",
                "Accessories",
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  <span className="font-inter text-sm">{product}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Impact */}
          <div className="text-center lg:text-left">
            <h4 className="text-2xl font-poppins font-bold text-white mb-6">
              Social Impact
            </h4>
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/5 rounded-2xl blur-xl" />
              <div className="relative bg-black/40 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-6">
                <p className="text-gray-300 text-sm text-pretty font-inter leading-relaxed mb-4">
                  For every Zaronox SWITCH Box purchased, we contribute Re. 1
                  towards primary education and development initiatives for
                  rural communities across India.
                </p>
                <div className="text-center">
                  <div className="text-yellow-400 font-poppins font-bold text-lg">
                    45+ Years
                  </div>
                  <div className="text-gray-400 font-inter text-xs">
                    of Community Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-left">
                <div className="text-yellow-400 font-semibold font-inter text-sm">
                  Call Us
                </div>
                <div className="text-white font-inter">9838896679</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-left">
                <div className="text-yellow-400 font-semibold font-inter text-sm">
                  Visit Online
                </div>
                <div className="text-white font-inter">
                  Zaronox_electrical.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-left">
                <div className="text-yellow-400 font-semibold font-inter text-sm">
                  Manufacturing
                </div>
                <div className="text-white font-inter">Delhi, India</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-inter text-sm mb-2">
                © 2025 Zaronox Electrical Solutions. All rights reserved.
              </p>
              <p className="text-gray-500 font-inter text-xs">
                Manufactured by Sonu Enterprises • Bawana Industrial Area, Delhi
                - 110039
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-yellow-400" />
                </div>
                <span className="text-gray-400 font-inter text-xs">
                  ISO Certified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <Building className="w-3 h-3 text-yellow-400" />
                </div>
                <span className="text-gray-400 font-inter text-xs">
                  Made in India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
