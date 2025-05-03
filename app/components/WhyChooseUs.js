"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";
import { CheckCircle, Clock, Award, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-100 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-100 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-bold mb-6">
            Why Choose <span className="text-blue-600">Gasmocion</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We deliver excellence through reliability, safety, and customer satisfaction. Our metrics speak for themselves.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Stat 1 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {isInView ? <CountUp end={99.9} decimals={1} duration={2.5} /> : "0"}%
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Punctuality Rate</h3>
            <p className="text-gray-600">
              On-time delivery — no delays, no excuses. We respect your time as much as our service.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              {isInView ? <CountUp end={100} duration={2.5} suffix="+" /> : "0"}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Satisfied Clients</h3>
            <p className="text-gray-600">
              Homes, hotels, and industries across Kochi trust us for their energy needs.
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Certified
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Safety Standards</h3>
            <p className="text-gray-600">
              Government-backed safety certifications and rigorous quality control measures.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {[
            {
              title: "24/7 Emergency Support",
              description: "Our dedicated team is available round the clock to address any concerns or emergencies."
            },
            {
              title: "Transparent Pricing",
              description: "No hidden fees or surprise charges. What we quote is what you pay."
            },
            {
              title: "Expert Installation",
              description: "Our technicians are certified professionals with years of experience in gas systems."
            },
            {
              title: "Eco-Friendly Solutions",
              description: "Committed to providing clean energy alternatives that reduce environmental impact."
            }
          ].map((feature, index) => (
            <div key={index} className="flex items-start p-4">
              <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 mb-1">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16 relative"
        >
          <div className="absolute -top-4 left-8">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 8H8C5.79086 8 4 9.79086 4 12V19C4 21.2091 5.79086 23 8 23H15C17.2091 23 19 21.2091 19 19V12C19 9.79086 17.2091 8 15 8Z" fill="#2563EB" fillOpacity="0.2"/>
              <path d="M32 8H25C22.7909 8 21 9.79086 21 12V19C21 21.2091 22.7909 23 25 23H32C34.2091 23 36 21.2091 36 19V12C36 9.79086 34.2091 8 32 8Z" fill="#2563EB" fillOpacity="0.2"/>
            </svg>
          </div>
          <div className="pt-4">
            <p className="text-gray-700 text-lg italic mb-6">
              "Gasmocion has been our trusted supplier for over 3 years now. Their service is impeccable, delivery always on time, and their staff is courteous and professional. Highly recommended!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 font-medium">AK</span>
              </div>
              <div className="ml-4">
                <h5 className="text-gray-900 font-medium">Anjali Kumar</h5>
                <p className="text-gray-500 text-sm">Spice Garden Restaurant, Kochi</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/about">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto group">
              <span>Learn More About Us</span>
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}