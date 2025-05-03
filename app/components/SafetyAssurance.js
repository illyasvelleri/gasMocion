"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, TrendingUp, ArrowUpRight, CheckCircle } from "lucide-react";

export default function SafetyAssurance() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate through safety points
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safetyPoints.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  // Safety points with enhanced details and icons
  const safetyPoints = [
    {
      title: "Government-Approved Standards",
      description: "We maintain strict compliance with Kerala's safety regulations and international LPG handling standards, ensuring every cylinder meets quality benchmarks.",
      icon: <ShieldCheck size={32} className="text-blue-200" />,
      image: "/images/gas-cylinder.jpg",
      stats: "100% Compliance Rate"
    },
    {
      title: "Real-Time Cylinder Tracking",
      description: "Our advanced tracking system gives you complete visibility into your LPG delivery from warehouse to your doorstep, with status updates at every stage.",
      icon: <TrendingUp size={32} className="text-blue-200" />,
      image: "/images/gas-cylinder.jpg",
      stats: "Live GPS Tracking"
    },
    {
      title: "Trained Delivery Experts",
      description: "Every member of our delivery team undergoes rigorous safety training and certification, ensuring proper handling and installation of your gas cylinders.",
      icon: <BadgeCheck size={32} className="text-blue-200" />,
      image: "/images/gas-cylinder.jpg",
      stats: "200+ Trained Personnel"
    },
  ];
  
  // Safety certification badges
  const certifications = [
    { name: "ISO 9001", description: "Quality Management" },
    { name: "PESO", description: "Petroleum & Explosives Safety" },
    { name: "ISI", description: "Indian Standards Institute" },
    { name: "BIS", description: "Bureau of Indian Standards" },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 z-0">
        {/* Animated particles/bubbles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Main content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-700/50 text-blue-200 font-medium text-sm mb-4 backdrop-blur-sm border border-blue-600/30">
            Your Safety Is Our Priority
          </span>
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Industry-Leading <span className="text-blue-300">Safety Standards</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            At Gasmocion, we go beyond compliance to ensure every aspect of our gas distribution meets the highest safety benchmarks.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Interactive safety showcase */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-700/50 to-indigo-800/50 rounded-3xl overflow-hidden border border-white/20 backdrop-blur-md p-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={safetyPoints[activeIndex].image}
                    alt={safetyPoints[activeIndex].title}
                    fill
                    className="object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/50" />
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                        {safetyPoints[activeIndex].icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-blue-500/30 rounded-full text-blue-200 border border-blue-400/30 backdrop-blur-sm">
                        {safetyPoints[activeIndex].stats}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white">
                      {safetyPoints[activeIndex].title}
                    </h3>
                    
                    <p className="text-blue-100">
                      {safetyPoints[activeIndex].description}
                    </p>
                    
                    <div className="pt-4">
                      <Link href="/safety">
                        <button className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 group shadow-lg shadow-blue-700/50">
                          <span>Explore Our Safety Measures</span>
                          <ArrowUpRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {safetyPoints.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? "bg-blue-300 w-6" : "bg-blue-700/50"
                  }`}
                  aria-label={`View safety point ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Right column - Safety certifications and guidelines */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col space-y-8"
          >
            {/* Safety commitment statement */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Our Safety Commitment</h3>
              <p className="text-blue-100 mb-4">
                Safety is at the core of everything we do at Gasmocion. From source to delivery, 
                we implement rigorous safety protocols that exceed industry standards to ensure 
                your complete peace of mind.
              </p>
              <ul className="space-y-3">
                {[
                  "Regular safety audits and inspections",
                  "Advanced leak detection systems",
                  "24/7 emergency response team",
                  "Continuous staff safety training"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Certifications grid */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Safety Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-700/50 flex items-center justify-center">
                      <ShieldCheck className="text-blue-300 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{cert.name}</h4>
                      <p className="text-blue-200 text-sm">{cert.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Emergency contact */}
            <div className="bg-gradient-to-r from-red-600/30 to-red-800/30 backdrop-blur-md rounded-xl p-6 border border-red-500/30">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-600/50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">24/7 Emergency Support</h4>
                  <p className="text-red-100">Call our safety hotline:</p>
                  <p className="text-white font-bold text-xl">1800-XXX-XXXX</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}