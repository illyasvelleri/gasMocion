"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function ServicesCarousel() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const services = [
    { title: "Interior Design", description: "Enhancing interiors with creativity and elegance.", bg: "url('https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683413.jpg?t=st=1743058764~exp=1743062364~hmac=a5074d7ed3c73a4346d86364a7a96db991bf9b444880963274268af278205c16&w=1380')" },
    { title: "Exterior Design", description: "Modern and stylish exterior solutions.", bg: "url('https://img.freepik.com/free-photo/urban-business-downtown-china-financial_1127-2754.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid')" },
    { title: "Furniture Design", description: "Custom furniture to match your style.", bg: "url('https://img.freepik.com/free-photo/living-room-scandinavian-interior-design_53876-146865.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid')" },
    { title: "Renovation", description: "Upgrading spaces with a fresh, modern touch.", bg: "url('https://img.freepik.com/free-photo/facade-modern-building-with-geometric-windows-curved-walls_181624-16998.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid')" },
    { title: "Landscape Design", description: "Green and aesthetic outdoor planning.", bg: "url('https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid')" },
  ];

  return (
    <>
      <div className="container mx-auto my-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Interior & Exterior Services</h2>
      </div>
      <div className="container mx-auto glide-03 relative w-full">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="flex space-x-4 relative flex-nowrap overflow-hidden p-0">
            {services.map((service, index) => (
              <li
                key={index}
                className="rounded-2xl p-6 text-center shadow-md w-full text-white flex flex-col justify-center items-center"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), ${service.bg}`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "200px",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Controls */}
        <div className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4" data-glide-el="controls">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-white shadow-md text-gray-700 hover:bg-gray-200" data-glide-dir="<">
            <AiOutlineLeft className="text-xl" />
          </button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-white shadow-md text-gray-700 hover:bg-gray-200" data-glide-dir=">">
            <AiOutlineRight className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
}