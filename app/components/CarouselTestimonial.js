"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

export default function CarouselTestimonial() {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: "center",
      animationDuration: 600,
      autoplay: 3000,
      rewind: true,
      perView: 2,
      gap: 32,
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1 },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const testimonials = [
    {
      client: "Hotel Marina",
      quote: "Cut fuel costs by 20% with reliable supply.",
      image: "/images/hotel-marina-logo.jpg",
    },
    {
      client: "Factory Owner",
      quote: "No delays in 2 years.",
      image: "/images/factory-owner-headshot.jpg",
    },
    {
      client: "Local Shopkeeper",
      quote: "Safe deliveries every time.",
      image: "/images/shopkeeper-headshot.jpg",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gray-100 overflow-hidden">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        Kochi Runs on Us
      </h2>

      {/* Carousel */}
      <div className="glide-08 container mx-auto">
        <div data-glide-el="track">
          <ul className="flex flex-nowrap overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <li key={index} className="flex justify-center w-full px-4">
                <div className="w-full max-w-sm">
                  <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-6 h-72 flex flex-col justify-between text-center transition-all hover:scale-[1.01] duration-300">
                    {/* Image */}
                    <div className="w-20 h-20 mx-auto mb-4">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.client} logo`}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg font-medium text-gray-800 leading-relaxed italic mb-2">
                      “{testimonial.quote}”
                    </blockquote>

                    {/* Client Name */}
                    <p className="text-sm font-semibold text-gray-900">{testimonial.client}</p>

                    {/* Verified Tag - Green */}
                    <span className="text-xs text-green-600 mt-1 flex items-center justify-center font-medium">
                      <svg
                        className="w-4 h-4 text-green-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified Client
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Indicators */}
        <div
          className="mt-6 flex justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              className="group"
              data-glide-dir={`=${index}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="block h-2 w-2 rounded-full bg-gray-400 opacity-60 group-hover:bg-orange-500 transition duration-300"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
