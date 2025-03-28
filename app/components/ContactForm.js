"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    return (
        <section className="py-16 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary shadow-lg rounded-2xl p-8 md:p-16 max-w-screen-lg">
                
                {/* Contact Form */}
                <div className="space-y-6">
                    <motion.h2
                        className="text-3xl font-bold text-background mb-6 text-center md:text-left"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Get in Touch
                    </motion.h2>
                    <p className="text-background mb-6 text-center md:text-left">
                        We'd love to hear from you! Whether it's a project inquiry or just a hello, feel free to reach out.
                    </p>

                    <form className="space-y-4">
                        <motion.input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        />
                        <motion.input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />
                        <motion.input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        />
                        <motion.textarea
                            placeholder="Your Message"
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none h-32"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        ></motion.textarea>
                        <motion.button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition font-semibold"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>

                {/* Google Map Embed */}
                <div className="rounded-lg overflow-hidden shadow-md border-2 border-dotted border-background">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20245.751293660298!2d75.92013281883455!3d11.41582505275158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba668fa4ed60233%3A0x8868a33db83245f4!2sThamarassery%2C%20Kerala!5e1!3m2!1sen!2sin!4v1742895795617!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
