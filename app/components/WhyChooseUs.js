"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-spotlight-green py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

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

        <div className="text-center mt-12">
          <Link href="/about">
            <button className="bg-accent text-white font-bold py-3 px-6 rounded-full hover:bg-orange-dark transition-all duration-300">
              Explore Our Edge
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}