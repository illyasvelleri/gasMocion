import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248357.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid')`,
      }}
    >
      {/* Overlay with glass effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-6 items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md">
          Transforming Spaces,<br /> Crafting Experiences.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-[600px] opacity-90 drop-shadow-sm">
          Experience the blend of creativity and elegance that redefines your interiors.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mt-6">
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-white text-gray-900 text-center font-semibold shadow-lg transition transform hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </a>

          <a
            href="https://wa.me/918129067460"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg transition transform hover:scale-105 hover:bg-green-600"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
