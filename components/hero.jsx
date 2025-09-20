"use client";
import { Button } from "./ui/button";
import { Zap, Award, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/flowing-gold-background.jpeg')`,
        }}
      />

      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="space-y-8">
          <div className="flex items-center justify-center w-12 h-12 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/30">
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-400/15 backdrop-blur-sm rounded-full border border-yellow-400/20">
            <Award className="w-5 h-5 text-yellow-300" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-yellow-400/10 backdrop-blur-sm rounded-full border border-yellow-400/15">
            <Star className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* <div className="mb-6">
          <span className="text-yellow-400 text-sm font-medium tracking-[0.2em] uppercase font-inter ">
            Since 1980 • Zaronox Electrical Solutions
          </span>
        </div> */}

        <h1 className="text-6xl md:text-8xl font-poppins font-bold mb-8 text-balance leading-tight">
          <span className="text-yellow-400">Illuminate</span>
          <br />
          <span className="text-white">Your World</span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-200 text-pretty font-inter leading-relaxed max-w-3xl mx-auto">
          Where innovation meets elegance. Crafting premium electrical solutions
          that transform spaces into experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 font-inter"
            onClick={() => {
              const el = document.getElementById("products");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discover Collection
          </Button>
          <Button
            variant="outline"
            className="border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black px-10 py-4 text-lg bg-transparent rounded-full transition-all duration-300 hover:scale-105 font-inter"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Consultation
          </Button>
        </div>

        <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-md border border-yellow-400/30 rounded-full px-8 py-4 shadow-2xl">
          <Award className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-300 font-medium font-inter">
            India's Most Trusted Electrical Brand - Zaronox 2024
          </span>
        </div>
      </div>

      {/* Flowing bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </section>
  );
}
