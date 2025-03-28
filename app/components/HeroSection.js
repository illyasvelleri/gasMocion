import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import the phone icon

export default function HeroSection() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248357.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid')`,
      }}
    >
      {/* Overlay for Dark Effect */}
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>

      <div className="relative top-[20px] container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-background">
            Transforming Spaces, Crafting Experiences.
          </h1>
          <p className="text-lg text-gary-300 opacity-90">
            Experience the blend of creativity and elegance that redefines your interiors.
          </p>
          <div className="flex flex-row items-center justify-center md:justify-start gap-4 mt-4">
            {/* Standard Button */}
            <a
              href="#"
              className="px-6 py-3 rounded-lg bg-background text-primary font-semibold shadow-md transition hover:bg-opacity-80"
            >
              Get Started
            </a>

            {/* Circular Button with Arrow */}
            <a
              href="https://wa.me/918129067460"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-green-500 bg-green-500 text-white font-semibold transition hover:bg-green-600"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
