
"use client"
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const testimonials = [
  {
    title: "Happy Customer from Kochi",
    content:
      "Using Gasmoción has transformed my kitchen experience! It's reliable, safe, and efficient. Highly recommended.",
    image: "/images/kitchen-with-white-surfaces-chic-oven.jpg",
    name: "Anjana B, Kochi",
  },
  {
    title: "Thrissur Factory Owner",
    content:
      "Switching to LPG through Gasmoción helped cut down our fuel expenses and boosted productivity.",
    image: "/images/kitchen-with-white-surfaces-chic-oven.jpg",
    name: "Mr. Ramesh, Thrissur",
  },
  {
    title: "Calicut Hotel Manager",
    content:
      "Our kitchen runs smoother than ever. Great service and timely delivery of gas supplies.",
    image: "/images/kitchen-with-white-surfaces-chic-oven.jpg",
    name: "Chef Niyas, Calicut",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const activeTestimonial = testimonials[activeIndex] || testimonials[0];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-white via-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Powering Gasmoción across Kerala
          </h2>
          <p className="text-gray-600 mb-8">
            Join the growing community of homes and businesses that trust
            Gasmoción for reliable energy solutions.
          </p>

          {/* Accordion Dropdowns */}
          <div className="space-y-4">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="border-b pb-4 cursor-pointer group"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center justify-between text-lg font-semibold text-primary">
                  {item.title}
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-700 text-sm">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={activeTestimonial.image}
            alt={activeTestimonial.name}
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white py-2 px-4 text-sm">
            {activeTestimonial.name}
          </div>
        </div>
      </div>
    </section>
  );
}