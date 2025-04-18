"use client"
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

export default function AboutPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <Header />
            <div>
                {/* Hero Section */}
                <section className="relative h-[450px] flex items-center justify-center bg-black text-white">
                    <Image
                        src="/images/gas-cylinder.jpg"
                        alt="LPG truck delivering in Kochi"
                        fill
                        className="object-cover z-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                    <div className="relative z-20 text-center px-6">
                        <h1 className="text-5xl font-bold mb-4">About Gasmocion</h1>
                        <p className="text-lg max-w-2xl mx-auto">
                            Providing safe, reliable LPG solutions to Kochi’s businesses with innovation, speed, and trust.
                        </p>
                    </div>
                </section>

                {/* About Content */}
                <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            Gasmocion is a leading supplier of LPG, offering reliable and fast delivery services to businesses across Kochi. With a commitment to quality, safety, and customer satisfaction, we cater to hotels, factories, and all types of businesses in need of energy solutions.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our expert team ensures safe and timely delivery of LPG to your door, making sure your operations never face any interruptions.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/images/gas-cylinder.jpg"
                            alt="LPG truck delivering in Kochi"
                            width={600}
                            height={400}
                            className="object-cover rounded-xl shadow-lg"
                            priority
                        />
                    </div>
                </section>

                {/* Mission */}
                <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
                    <div>
                        <Image
                            src="/images/gas-cylinder.jpg"
                            alt="LPG truck delivering in Kochi"
                            width={600}
                            height={400}
                            className="object-cover rounded-xl shadow-lg"
                            priority
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            Our mission is to provide businesses in Kochi with the most reliable, efficient, and safe LPG delivery services. We aim to become the go-to partner for businesses requiring consistent and high-quality energy solutions.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Through our commitment to quality, safety, and service, we ensure that your LPG needs are always met without any delays, keeping your business running smoothly.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-primary py-16">
                    <div
                        ref={ref}
                        className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
                    >
                        <div className="stat-block p-6 rounded-lg transition-all duration-300 hover:shadow-orange-glow hover:-translate-y-1">
                            <p className="text-white text-5xl font-bold">
                                {isInView ? (
                                    <CountUp end={99.9} decimals={1} duration={2} />
                                ) : (
                                    "0"
                                )}
                                %
                            </p>
                            <p className="text-white text-lg mt-4">
                                On-Time – No delays, no excuses.
                            </p>
                        </div>

                        <div className="stat-block p-6 rounded-lg transition-all duration-300 hover:shadow-orange-glow hover:-translate-y-1">
                            <p className="text-white text-5xl font-bold">
                                {isInView ? <CountUp end={100} duration={2} suffix="+" /> : "0"}
                            </p>
                            <p className="text-white text-lg mt-4">
                                Kochi Clients – From hotels to factories.
                            </p>
                        </div>

                        <div className="stat-block p-6 rounded-lg transition-all duration-300 hover:shadow-orange-glow hover:-translate-y-1">
                            <p className="text-white text-5xl font-bold">Certified</p>
                            <p className="text-white text-lg mt-4">
                                Safe – Govt-backed quality you can trust.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <Testimonial />

                {/* Call-to-Action Section */}
                <section className="bg-spotlight-dark py-16 text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Ready to Work with Us?</h2>
                    <p className="text-lg mb-6">Get in touch for the most reliable LPG delivery service in Kochi.</p>
                    <a href="/contact" className="bg-white text-yellow-500 px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-100">
                        Contact Us
                    </a>
                </section>
            </div>
            <Footer />
        </>
    );
}
