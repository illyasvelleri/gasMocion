'use client';

import React from "react";
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaInstagram } from "react-icons/fa";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'For Business', href: '/interiorProjects' },
    { name: 'Safety First', href: '/exteriorProjects' },
    { name: 'Contact', href: '/contact' },
];


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="p-2.5 text-gray-100"
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="relative text-sm font-semibold text-gray-900 
                                   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                                   after:bg-gray-100 after:transition-all after:duration-300 
                                   hover:after:w-full"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Follow */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="https://www.instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-pink-400 transition"
                    >
                        <FaInstagram className="text-lg" />
                        Follow <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <DialogPanel className="fixed inset-0 z-50 flex items-center justify-end bg-gray-800 bg-opacity-75">
                    <div className="relative w-full max-w-sm h-full max-h-screen overflow-y-auto bg-white p-6">
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-4 right-4 text-gray-700"
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        <div className="mt-8">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};
export default Header;