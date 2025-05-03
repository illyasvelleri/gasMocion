// "use client";

// import { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Flame, Shield, Clock } from "lucide-react";

// export default function HomePage() {
//   const containerRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
  
//   // Check if the device is mobile
//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
    
//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);
    
//     return () => {
//       window.removeEventListener("resize", checkIsMobile);
//     };
//   }, []);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
//   const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
//   // Fade-in animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };
  
//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   return (
//     <div className="overflow-x-hidden w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 relative">
//       {/* Custom shape divider */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 lg:h-32">
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,82.73,289.4,67.28,256.89,68.78,321.39,56.44Z" className="fill-white opacity-50"></path>
//         </svg>
//       </div>
      
//       {/* Floating bubbles background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-gradient-to-br from-blue-200 to-blue-100 opacity-30"
//             style={{
//               width: `${Math.random() * 100 + 50}px`,
//               height: `${Math.random() * 100 + 50}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               x: [0, Math.random() * 10 - 5, 0],
//             }}
//             transition={{
//               duration: 3 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <section
//         ref={containerRef}
//         className="min-h-screen flex flex-col items-center relative z-10 px-6 lg:px-16 xl:px-20 py-12"
//       >
//         {/* Navigation Bar */}
//         <motion.nav 
//           className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-4 px-6 lg:px-16 shadow-sm"
//           initial={{ y: -100 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <div className="flex items-center">
//               <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
//                 <Flame size={24} className="text-white" />
//               </div>
//               <h2 className="text-xl font-bold text-gray-800 ml-2">Gasmocion</h2>
//             </div>
            
//             <div className="hidden md:flex space-x-8">
//               <Link href="/" className="text-gray-700 hover:text-blue-500 font-medium transition">Home</Link>
//               <Link href="/services" className="text-gray-700 hover:text-blue-500 font-medium transition">Services</Link>
//               <Link href="/about" className="text-gray-700 hover:text-blue-500 font-medium transition">About</Link>
//               <Link href="/contact" className="text-gray-700 hover:text-blue-500 font-medium transition">Contact</Link>
//             </div>
            
//             <button className="md:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </motion.nav>

//         {/* Hero Content */}
//         <div className="w-full max-w-7xl mx-auto mt-24 lg:mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
//           {/* Text Content */}
//           <motion.div
//             className="w-full lg:w-1/2 mt-8 lg:mt-16"
//             initial="hidden"
//             animate="visible"
//             variants={staggerChildren}
//           >
//             <motion.div variants={fadeInUp}>
//               <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
//                 Trusted Gas Provider in Kochi
//               </span>
//             </motion.div>
            
//             <motion.h1 
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
//             >
//               Powering Kochi's <br />
//               <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
//                 Energy Future
//               </span>
//             </motion.h1>
            
//             <motion.p 
//               variants={fadeInUp}
//               className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
//             >
//               Delivering clean, reliable, and efficient LPG solutions for homes and businesses across Kochi with industry-leading safety standards.
//             </motion.p>
            
//             <motion.div 
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row gap-4 mb-12"
//             >
//               <Link href="/quote">
//                 <button className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
//                   <span>Get Your Quote</span>
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
//                 </button>
//               </Link>
//               <Link href="/services">
//                 <button className="flex items-center justify-center bg-white border border-gray-200 text-gray-700 font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300">
//                   Explore Services
//                 </button>
//               </Link>
//             </motion.div>
            
//             {/* Features */}
//             <motion.div 
//               variants={staggerChildren}
//               className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
//             >
//               <motion.div variants={fadeInUp} className="flex items-center">
//                 <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
//                   <Flame size={20} className="text-amber-500" />
//                 </div>
//                 <span className="text-gray-700">Clean Energy</span>
//               </motion.div>
              
//               <motion.div variants={fadeInUp} className="flex items-center">
//                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
//                   <Shield size={20} className="text-blue-500" />
//                 </div>
//                 <span className="text-gray-700">Safety First</span>
//               </motion.div>
              
//               <motion.div variants={fadeInUp} className="flex items-center">
//                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
//                   <Clock size={20} className="text-green-500" />
//                 </div>
//                 <span className="text-gray-700">24/7 Service</span>
//               </motion.div>
//             </motion.div>
//           </motion.div>
          
//           {/* Image */}
//           <motion.div
//             className="w-full lg:w-1/2 flex justify-center items-center lg:justify-end"
//             style={{ 
//               y: parallaxY,
//               opacity
//             }}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="relative">
//               {/* Main image */}
//               <motion.div
//                 animate={{ 
//                   y: [0, -15, 0],
//                   rotate: [0, 2, 0]
//                 }}
//                 transition={{ 
//                   duration: 6, 
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="relative z-10"
//               >
//                 <Image
//                   src="/Images/gas-cylinder-illustration.png"
//                   alt="Modern gas cylinder"
//                   width={400}
//                   height={400}
//                   className="w-full max-w-md h-auto drop-shadow-2xl"
//                   priority
//                   sizes="(max-width: 768px) 100vw, 500px"
//                 />
//               </motion.div>
              
//               {/* Decorative elements */}
//               <div className="absolute top-1/4 -left-16 w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-100 rounded-full blur-3xl opacity-40" />
//               <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-300 to-amber-100 rounded-full blur-3xl opacity-50" />
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Trust indicators */}
//         <motion.div
//           className="w-full max-w-6xl mx-auto mt-16 lg:mt-24 bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <div className="text-center mb-6">
//             <h3 className="text-lg font-medium text-gray-500">Trusted by homes and businesses across Kochi</h3>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
//             {/* Replace with actual partner logos */}
//             {[...Array(4)].map((_, i) => (
//               <div key={i} className="h-12 w-32 bg-gray-200 rounded-lg opacity-50" />
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Mobile CTA */}
//       <motion.div 
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="fixed bottom-0 left-0 w-full p-4 lg:hidden z-40 bg-gradient-to-t from-white via-white to-transparent pb-6"
//       >
//         <Link href="/quote">
//           <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl text-lg font-medium shadow-lg flex items-center justify-center">
//             <span>Get Your Quote</span>
//             <ArrowRight className="ml-2" size={18} />
//           </button>
//         </Link>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Shield, Clock } from "lucide-react";
import Header from "./Header";

export default function HomePage() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Fade-in animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-x-hidden w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 relative">
      {/* Custom shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 lg:h-32">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,82.73,289.4,67.28,256.89,68.78,321.39,56.44Z" className="fill-white opacity-50"></path>
        </svg>
      </div>

      {/* Floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-200 to-blue-100 opacity-30"
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

      <section
        ref={containerRef}
        className="min-h-screen flex flex-col items-center relative z-10 px-6 lg:px-16 xl:px-20 py-12"
      >
        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="w-full max-w-7xl mx-auto mt-24 lg:mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-16"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
                Trusted Gas Provider in Kochi
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Powering Kochi's <br />
              <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                Energy Future
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
            >
              Delivering clean, reliable, and efficient LPG solutions for homes and businesses across Kochi with industry-leading safety standards.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/quote">
                <button className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <span>Get Your Quote</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </Link>
              <Link href="/services">
                <button className="flex items-center justify-center bg-white border border-gray-200 text-gray-700 font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  Explore Services
                </button>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            >
              <motion.div variants={fadeInUp} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                  <Flame size={20} className="text-amber-500" />
                </div>
                <span className="text-gray-700">Clean Energy</span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Shield size={20} className="text-blue-500" />
                </div>
                <span className="text-gray-700">Safety First</span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Clock size={20} className="text-green-500" />
                </div>
                <span className="text-gray-700">24/7 Service</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center lg:justify-end"
            style={{
              y: parallaxY,
              opacity
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <Image
                  src="/images/gas-cylinder-illustration.png"
                  alt="Modern gas cylinder"
                  width={400}
                  height={400}
                  className="w-full max-w-md h-auto drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-16 w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-100 rounded-full blur-3xl opacity-40" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-300 to-amber-100 rounded-full blur-3xl opacity-50" />
            </div>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          className="w-full max-w-6xl mx-auto mt-16 lg:mt-24 bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-lg font-medium text-gray-500">Trusted by homes and businesses across Kochi</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {/* Replace with actual partner logos */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded-lg opacity-50" />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mobile CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 w-full p-4 lg:hidden z-40 bg-gradient-to-t from-white via-white to-transparent pb-6"
      >
        <Link href="/quote">
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl text-lg font-medium shadow-lg flex items-center justify-center">
            <span>Get Your Quote</span>
            <ArrowRight className="ml-2" size={18} />
          </button>
        </Link>
      </motion.div>
    </div>
  );
}