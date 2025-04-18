import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-dark/50 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left: Logo + About */}
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white">Gasmocion</h2>
                    <p className="text-sm text-gray-300">
                        Empowering homes and businesses with safe, reliable LPG solutions. Experience seamless delivery and unmatched service with GasMocion.
                    </p>

                </div>

                {/* Center: Quick Links */}
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>
                            <a href="/about" className="hover:text-white transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="hover:text-white transition">
                                For Business
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-white transition">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Right: Social Icons */}
                <div className="flex justify-center md:justify-end items-center space-x-5">
                    <a href="#" className="hover:text-blue-400 transition"><FaFacebookF size={18} /></a>
                    <a href="#" className="hover:text-pink-400 transition"><FaInstagram size={18} /></a>
                    <a href="#" className="hover:text-sky-400 transition"><FaTwitter size={18} /></a>
                    <a href="#" className="hover:text-blue-300 transition"><FaLinkedinIn size={18} /></a>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Gasmocion PVT.LTD. All rights reserved.
            </div>
        </footer>
    );
}
