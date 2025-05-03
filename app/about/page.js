"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

// Suggested SEO meta tags (add to <Head> in layout or page):
// <title>About Gasmocion | Reliable LPG Delivery in Kochi</title>
// <meta name="description" content="Learn about Gasmocion, Kochi's leading LPG supplier, offering safe, reliable, and efficient delivery services for businesses." />
// <meta name="keywords" content="LPG delivery Kochi, gas supplier Kochi, Gasmocion about, reliable LPG services, safe gas delivery" />
// <meta name="robots" content="index, follow" />

// Suggested structured data (JSON-LD):
// <script type="application/ld+json">
// {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "Gasmocion",
//   "description": "Gasmocion is a leading LPG supplier in Kochi, providing safe and reliable delivery services to businesses.",
//   "url": "https://www.gasmocion.com",
//   "logo": "https://www.gasmocion.com/images/logo.png",
//   "address": {
//     "@type": "PostalAddress",
//     "addressLocality": "Kochi",
//     "addressRegion": "Kerala",
//     "addressCountry": "India"
//   }
// }
// </script>

export default function AboutPage() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-x-hidden">
      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-200 to-green-100 opacity-30"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 backdrop-blur-sm" />
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-16 md:h-24"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,82.73,289.4,67.28,256.89,68.78,321.39,56.44Z"
                className="fill-white opacity-50"
              />
            </svg>
          </div>
          <motion.div
            className="relative z-20 text-center px-6 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              To Know More About Gasmocion
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl leading-relaxed"
              variants={fadeInUp}
            >
              Kochi’s trusted LPG supplier, delivering safe, reliable, and efficient energy solutions for businesses.
            </motion.p>
          </motion.div>
        </section>

        {/* About Content */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800"
              variants={fadeInUp}
            >
              Who We Are
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              Gasmocion is Kochi’s premier LPG supplier, dedicated to providing safe, reliable, and efficient energy solutions to businesses across the city. Established in 2015, we have grown to become a trusted partner for hotels, restaurants, factories, and other commercial enterprises in need of high-quality LPG delivery services.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              Our team of certified professionals is committed to ensuring seamless operations for our clients. With a fleet of modern delivery vehicles and state-of-the-art safety protocols, we guarantee timely LPG deliveries that meet the highest industry standards. At Gasmocion, customer satisfaction is at the core of everything we do, making us the go-to choice for LPG in Kochi.
            </motion.p>
            <motion.div
              className="relative max-w-xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/about-team.jpg"
                alt="Gasmocion team delivering LPG in Kochi"
                width={600}
                height={400}
                className="object-cover rounded-xl shadow-lg"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-100 rounded-full blur-2xl opacity-50" />
            </motion.div>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800"
              variants={fadeInUp}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              At Gasmocion, our mission is to empower Kochi’s businesses with reliable, safe, and efficient LPG delivery services. We strive to set the industry standard for energy solutions by prioritizing safety, timeliness, and customer satisfaction.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              We aim to build long-lasting partnerships with our clients by delivering consistent, high-quality LPG supplies that keep their operations running smoothly. Through innovation, rigorous safety measures, and a customer-centric approach, we are committed to being Kochi’s most trusted LPG supplier.
            </motion.p>
            <motion.div
              className="relative max-w-xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/mission-delivery.jpg"
                alt="Gasmocion LPG delivery truck in Kochi"
                width={600}
                height={400}
                className="object-cover rounded-xl shadow-lg"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-300 to-green-100 rounded-full blur-2xl opacity-50" />
            </motion.div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 text-center"
              variants={fadeInUp}
            >
              Our Core Values
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              <motion.div
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety First</h3>
                <p className="text-gray-600">
                  We adhere to strict safety protocols, ensuring every LPG delivery meets government regulations and industry standards for your peace of mind.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
                <p className="text-gray-600">
                  Our 99.9% on-time delivery rate ensures your business never faces disruptions, with LPG supplies arriving exactly when you need them.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  We prioritize your needs, offering tailored LPG solutions and 24/7 support to keep your operations running smoothly.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
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
          <motion.div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="space-y-6 text-center mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold"
                variants={fadeInUp}
              >
                Our Impact in Kochi
              </motion.h2>
              <motion.p
                className="text-lg max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Delivering excellence in LPG services since 2015.
              </motion.p>
            </motion.div>
            <motion.div
              ref={statsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.div
                className="p-6 rounded-lg bg-white/10 backdrop-blur-md"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <p className="text-5xl font-bold">
                  {isStatsInView ? (
                    <CountUp end={10} duration={2} suffix="+" />
                  ) : (
                    "0"
                  )}
                </p>
                <p className="text-lg mt-4">Years in Business</p>
              </motion.div>
              <motion.div
                className="p-6 rounded-lg bg-white/10 backdrop-blur-md"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <p className="text-5xl font-bold">
                  {isStatsInView ? (
                    <CountUp end={150} duration={2} suffix="+" />
                  ) : (
                    "0"
                  )}
                </p>
                <p className="text-lg mt-4">Clients Served</p>
              </motion.div>
              <motion.div
                className="p-6 rounded-lg bg-white/10 backdrop-blur-md"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <p className="text-5xl font-bold">
                  {isStatsInView ? (
                    <CountUp end={99.9} decimals={1} duration={2} />
                  ) : (
                    "0"
                  )}
                  %
                </p>
                <p className="text-lg mt-4">On-Time Deliveries</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            className="space-y-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800"
              variants={fadeInUp}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Hear from businesses across Kochi who trust Gasmocion for their LPG needs.
            </motion.p>
          </motion.div>
          <Testimonial />
        </section>

        {/* Call-to-Action Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-green-300 to-green-100 opacity-20"
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
          <motion.div
            className="max-w-7xl mx-auto px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              Ready to Partner with Gasmocion?
            </motion.h2>
            <motion.p
              className="text-lg mb-6 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Contact us today to learn how our reliable LPG delivery services can power your business in Kochi.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}