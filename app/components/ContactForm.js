"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
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
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4">
            Contact <span className="text-blue-600">Gasmoción</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Reach out to us for inquiries, support, or to learn more about our services.
          </p>
        </motion.div>

        {/* Contact Form and Map */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* Contact Form */}
          <motion.div className="p-8 md:p-12" variants={fadeInUp}>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
              variants={fadeInUp}
            >
              Send Us a Message
            </motion.h3>
            <motion.p className="text-gray-600 mb-8" variants={fadeInUp}>
              Fill out the form below, and our team will respond promptly.
            </motion.p>

            <form className="space-y-6">
              {[
                { placeholder: "Your Name", type: "text", id: "name" },
                { placeholder: "Your Email", type: "email", id: "email" },
                { placeholder: "Subject", type: "text", id: "subject" },
              ].map((field, idx) => (
                <motion.input
                  key={field.id}
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  aria-required="true"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                />
              ))}
              <motion.textarea
                placeholder="Your Message"
                id="message"
                className="w-full px-4 py-3 h-32 border border-gray-200 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-300"
                aria-required="true"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.3 }}
              ></motion.textarea>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>

            {/* Contact Info */}
            <motion.div
              className="mt-8 flex flex-col gap-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:support@gasmocion.com" className="text-gray-600 hover:text-blue-600 transition">
                  support@gasmocion.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+919876543210" className="text-gray-600 hover:text-blue-600 transition">
                  +91 98765 43210
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            className="h-[400px] md:h-full w-full relative"
            variants={fadeInUp}
          >
            <iframe
              title="Gasmoción Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20245.751293660298!2d75.92013281883455!3d11.41582505275158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba668fa4ed60233%3A0x8868a33db83245f4!2sThamarassery%2C%20Kerala!5e1!3m2!1sen!2sin!4v1742895795617!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full py-2 px-4 shadow-md">
              <span className="flex items-center text-blue-600 font-medium text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                Our Location
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}