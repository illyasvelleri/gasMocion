"use client"

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function RecentProjectsCarousel() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1 },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-backgound">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Recent Projects
      </h2>

      <div className="glide-04 relative w-full">
        {/* Slides */}
        <div className="overflow-hidden rounded-xl shadow-lg" data-glide-el="track">
          <ul className="flex whitespace-no-wrap">
            {[
              "https://img.freepik.com/free-photo/futuristic-business-building-architecture_23-2151003676.jpg?t=st=1743052509~exp=1743056109~hmac=457a23bd2356ec81b4cf40a789cd09ff3a8a7e965f97d7220d88dd577d228921&w=1380",
              "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799729.jpg?t=st=1743058039~exp=1743061639~hmac=8a76d2b72fcc5cbde5389db1afe1ab01237944f8b3a06acb7ae3a22884fdafe8&w=900",
              "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004024.jpg?t=st=1743058364~exp=1743061964~hmac=529dfd48606b9ac3611ca02f7818b8c97faa4430679868add5eba33a80371432&w=1800",
              "https://img.freepik.com/free-photo/futuristic-business-building-architecture_23-2151003676.jpg?t=st=1743052509~exp=1743056109~hmac=457a23bd2356ec81b4cf40a789cd09ff3a8a7e965f97d7220d88dd577d228921&w=1380",
              "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976525.jpg?t=st=1743058415~exp=1743062015~hmac=42efa83293fffde9b41fe269eaf1b4532dba8ca74bd7b3b51918b3a911d66dee&w=1380",
            ].map((image, index) => (
              <li key={index} className="relative group">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Controls */}
        <div className="flex w-full items-center justify-center gap-4 mt-6" data-glide-el="controls">
          <button
            className="h-10 w-10 rounded-full border border-gray-700 bg-white/20 text-gray-700 hover:border-gray-900 hover:text-gray-900"
            data-glide-dir="<"
          >
            ❮
          </button>
          <button
            className="h-10 w-10 rounded-full border border-gray-700 bg-white/20 text-gray-700 hover:border-gray-900 hover:text-gray-900"
            data-glide-dir=">"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
