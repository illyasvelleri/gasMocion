"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative h-[450px] flex items-center justify-center bg-gray-900 text-white bg-cover bg-center" style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248357.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid')`,
            }}>
                {/* Overlay for Dark Effect */}
                <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        We craft beautiful and functional spaces, bringing your vision to life with expert design.
                    </p>
                </div>
            </section>
            <section className="bg-background py-16 px-6">
                {/* Social Media */}
                <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
                    <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
                    <p className="text-gray-600">Stay connected with us on social media</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-600 hover:text-blue-500 text-2xl transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-300 text-2xl transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-pink-600 hover:text-pink-500 text-2xl transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-blue-700 hover:text-blue-600 text-2xl transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-primary shadow-xl rounded-2xl p-10 md:p-16 max-w-screen-lg">
                    {/* Contact Form */}
                    <div className="space-y-6">
                        <motion.h2
                            className="text-3xl font-bold text-background text-center md:text-left"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Contact Us
                        </motion.h2>
                        <p className="text-gray-400 text-center md:text-left">
                            Have questions? Reach out and we’ll be happy to help!
                        </p>

                        <form className="space-y-4">
                            <motion.input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            />
                            <motion.input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            />
                            <motion.textarea
                                placeholder="Your Message"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none h-32"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            ></motion.textarea>
                            <motion.button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition font-semibold"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
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
            <Footer />
        </>
    );
}
