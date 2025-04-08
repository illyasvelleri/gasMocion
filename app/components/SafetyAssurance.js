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
        <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/gas-cylinder.jpg"
                    alt="Gas Cylinder Safety Background"
                    fill
                    className="object-cover opacity-80"
                />
            </div>
            <div className="absolute inset-0 bg-gray-900/40 z-10" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col">
                {/* Headline with top padding */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white pt-16">
                    Safety Is Our Promise
                </h2>

                {/* Gap between headline and arrow */}
                <div className="my-12 flex justify-center">
                    {/* Creative Arrow Button */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Link href="/safety">
                            <div className="relative w-16 h-16 bg-black rounded-full flex items-center justify-center">
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-orange"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.8, 0.4, 0.8],
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <svg
                                    className="w-10 h-10 text-orange relative z-10"
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

                {/* Gap between arrow and cards (flex-grow pushes cards down) */}
                <div className="flex-grow" />

                {/* Cards at Bottom with bottom padding */}
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
                                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg flex items-center h-48">
                                        <div className="w-1/3 h-full p-4">
                                            <Image
                                                src={point.image}
                                                alt={`${point.title} Image`}
                                                width={120}
                                                height={120}
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="w-2/3 p-4 text-white">
                                            <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                                            <p className="text-sm">{point.description}</p>
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