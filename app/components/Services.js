"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Building, Wrench, ArrowUpRight, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Services data with enhanced details
  const services = [
    {
      title: "LPG for Home",
      description: "Safe and efficient LPG solutions for your kitchen and home needs with regular delivery options.",
      icon: <Home size={24} />,
      image: "/images/kitchen-with-white-surfaces-chic-oven.jpg",
      href: "/home-cooking",
      features: [
        "Scheduled deliveries",
        "Safety inspections included",
        "24/7 emergency support",
        "Smart usage tracking"
      ]
    },
    {
      title: "LPG for Hotel/Industry",
      description: "Reliable bulk LPG supply for businesses, hotels, and industrial applications with priority service.",
      icon: <Building size={24} />,
      image: "/images/gas-cylinder.jpg",
      href: "/hotel-restaurant",
      features: [
        "Bulk storage solutions",
        "Commercial-grade equipment",
        "Priority technical support",
        "Flexible billing options"
      ]
    },
    {
      title: "LPG Installation Service",
      description: "Expert installation and setup services by certified technicians for seamless LPG usage.",
      icon: <Wrench size={24} />,
      image: "/images/kitchen-with-white-surfaces-chic-oven.jpg",
      href: "/installation",
      features: [
        "Certified technicians",
        "Complete safety testing",
        "Regulatory compliance",
        "Post-installation support"
      ]
    },
  ];

  return (
    <section id="services" className="w-full py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4">
            Premium <span className="text-blue-600">LPG Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our range of safe, reliable, and efficient LPG services tailored to meet your specific needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.2 }
                }
              }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {/* Image Container */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} Image`}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  {/* Overlay with icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="text-blue-600">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    {service.title}
                    <ArrowUpRight className="ml-2 w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features list that appears on hover */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      hoveredIndex === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={16} className="mr-2 text-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA button */}
                  <Link href={service.href}>
                    <div className="mt-5 inline-flex w-full">
                      <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group">
                        <span>Learn More</span>
                        <ArrowUpRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <Link href="/all-services">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-medium transition-all duration-300">
              <span>View All Services</span>
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}