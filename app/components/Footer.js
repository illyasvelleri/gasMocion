import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-primary text-primary py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 px-6">

                {/* Left Section - Logo & Info */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <h2 className="text-2xl font-bold text-background">Interior Studio</h2>
                    <p className="text-background text-center md:text-left max-w-sm">
                        Creating spaces that reflect your personality and style. Let's make your dream space a reality!
                    </p>
                </div>

                {/* Center Section - Quick Links */}
                {/* Center Section - Quick Links */}
                <div className="flex flex-col items-center space-y-3 text-center">
                    <h3 className="text-lg font-semibold text-background">Quick Links</h3>
                    <ul className="space-y-2 flex flex-col items-center justify-center">
                        <li><a href="/about" className="text-background hover:text-secondary transition duration-300">About Us</a></li>
                        <li><a href="/projects" className="text-background hover:text-secondary transition duration-300">Projects</a></li>
                        <li><a href="/services" className="text-background hover:text-secondary transition duration-300">Services</a></li>
                        <li><a href="/contact" className="text-background hover:text-secondary transition duration-300">Contact</a></li>
                    </ul>
                </div>


                {/* Right Section - Social Media */}
                <div className="flex space-x-5">
                    <a href="#" className="text-background hover:text-secondary transition duration-300"><FaFacebookF size={20} /></a>
                    <a href="#" className="text-background hover:text-secondary transition duration-300"><FaInstagram size={20} /></a>
                    <a href="#" className="text-background hover:text-secondary transition duration-300"><FaTwitter size={20} /></a>
                    <a href="#" className="text-background hover:text-secondary transition duration-300"><FaLinkedinIn size={20} /></a>
                </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="mt-8 text-center text-background text-sm">
                © {new Date().getFullYear()} Illyas Velleri. All rights reserved.
            </div>
        </footer>
    );
}
