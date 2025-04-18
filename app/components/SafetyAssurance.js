'use client';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SafetyAssurance() {
    const safetyPoints = [
        {
            title: "Government-Approved Standards",
            description: "Certified compliance with Kerala’s strict safety regulations.",
            image: "/images/gas-cylinder.jpg",
        },
        {
            title: "Real-Time Cylinder Tracking",
            description: "Know exactly where your LPG is, every step of the way.",
            image: "/images/gas-cylinder.jpg",
        },
        {
            title: "Trained Delivery Experts",
            description: "Our team is skilled to handle LPG with care and precision.",
            image: "/images/gas-cylinder.jpg",
        },
    ];

    const cardVariants = {
        rest: { rotateX: 0, rotateY: 0, scale: 1, y: 0 },
        hover: {
            rotateX: 5,
            rotateY: 5,
            scale: 1.05,
            y: -10,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background color */}
            <div className="bg-spotlight-dark absolute inset-0 z-0" />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-spotlight-dark/60 z-10" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-light pt-16">
                    Safety Is Our Promise
                </h2>

                {/* Arrow Button */}
                <div className="my-12 flex justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Link href="/safety">
                            <div className="relative w-16 h-16 bg- rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-light"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.8, 0.3, 0.8],
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <svg
                                    className="w-10 h-10 text-light relative z-10"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Space filler to push cards to bottom */}
                <div className="flex-grow" />

                {/* Bottom Cards */}
                <div className="pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {safetyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="w-full"
                                variants={cardVariants}
                                initial="rest"
                                whileHover="hover"
                            >
                                <Link href="/safety">
                                    <div className="bg-spotlight-dark/70 backdrop-blur-md border border-primary/30 rounded-xl shadow-lg flex items-center h-48 hover:scale-105 transition-transform">
                                        <div className="w-1/3 h-full p-4">
                                            <Image
                                                src={point.image}
                                                alt={`${point.title} Image`}
                                                width={120}
                                                height={120}
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="w-2/3 p-4 text-light">
                                            <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                                            <p className="text-sm opacity-90">{point.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}