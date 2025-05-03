"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";

const testimonials = [
  {
    title: "Happy Customer from Kochi",
    content:
      "Using Gasmoción has transformed my kitchen experience! It's reliable, safe, and efficient. Highly recommended.",
    name: "Anjana B, Kochi",
  },
  {
    title: "Thrissur Factory Owner",
    content:
      "Switching to LPG through Gasmoción helped cut down our fuel expenses and boosted productivity.",
    name: "Mr. Ramesh, Thrissur",
  },
  {
    title: "Calicut Hotel Manager",
    content:
      "Our kitchen runs smoother than ever. Great service and timely delivery of gas supplies.",
    name: "Chef Niyas, Calicut",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-200 to-blue-100 opacity-30"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -15, 0], x: [0, Math.random() * 8 - 4, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4">
            Trusted Across <span className="text-blue-600">Kerala</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from our customers who rely on Gasmoción for their gas needs.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed italic text-center">
                “{testimonials[activeIndex].content}”
              </p>
              <div className="mt-6 text-blue-700 font-semibold text-center">
                — {testimonials[activeIndex].name}
              </div>
              <div className="absolute top-4 right-4 bg-blue-100/80 backdrop-blur-sm rounded-full py-1 px-3">
                <span className="text-blue-600 text-xs font-medium">{testimonials[activeIndex].title}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;