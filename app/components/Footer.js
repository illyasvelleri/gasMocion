"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
} from "react-icons/fa";
import { Flame } from "lucide-react";

export default function Footer() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <footer className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 overflow-hidden">
            {/* Floating Bubbles Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-br from-blue-300 to-blue-100 opacity-20"
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

           

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerChildren}
                >
                    {/* Left: Logo + About */}
                    <motion.div
                        className="space-y-4 text-center md:text-left"
                        variants={fadeInUp}
                    >
                        <div className="flex items-center justify-center md:justify-start">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center mr-2">
                                <Flame size={24} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Gasmocion</h2>
                        </div>
                        <p className="text-sm text-gray-200 leading-relaxed">
                            Empowering homes and businesses with safe, reliable LPG solutions. Experience seamless delivery and unmatched service with Gasmocion.
                        </p>
                    </motion.div>

                    {/* Center: Quick Links */}
                    <motion.div
                        className="flex flex-col items-center md:items-start space-y-4"
                        variants={fadeInUp}
                    >
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-200">
                            {[
                                { href: "/about", label: "About Us" },
                                { href: "/projects", label: "For Business" },
                                { href: "/services", label: "Services" },
                                { href: "/contact", label: "Contact" },
                            ].map((link, idx) => (
                                <motion.li
                                    key={link.href}
                                    variants={fadeInUp}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a
                                        href={link.href}
                                        className="hover:text-blue-300 transition"
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: Social Icons */}
                    <motion.div
                        className="flex justify-center md:justify-end items-center space-x-6"
                        variants={fadeInUp}
                    >
                        {[
                            { Icon: FaFacebookF, href: "#", label: "Facebook", color: "hover:text-blue-400" },
                            { Icon: FaInstagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
                            { Icon: FaTwitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
                            { Icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "hover:text-blue-300" },
                        ].map(({ Icon, href, label, color }, idx) => (
                            <motion.a
                                key={label}
                                href={href}
                                aria-label={label}
                                className={`text-gray-200 ${color} transition-transform duration-300`}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Bottom */}
                <motion.div
                    className="mt-12 text-center text-gray-400 text-sm"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    © {new Date().getFullYear()} Gasmocion PVT.LTD. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
}