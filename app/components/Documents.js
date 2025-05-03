"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, FileDown, Download, Search, HelpCircle, BookOpen, FileCode } from "lucide-react";

const documents = [
  {
    title: "User Manual",
    description:
      "A comprehensive guide to using Gasmoción, detailing all features and best practices for getting the most out of the service.",
    link: "/docs/user-manual.pdf",
    image: "/images/document-icon.png",
    icon: <BookOpen size={24} />,
    color: "blue",
    size: "2.4 MB",
    updated: "Apr 2025"
  },
  {
    title: "Installation Guide",
    description:
      "Step-by-step instructions for installing Gasmoción's equipment at your home or business.",
    link: "/docs/installation-guide.pdf",
    image: "/images/document-icon.png",
    icon: <FileCode size={24} />,
    color: "amber",
    size: "1.8 MB",
    updated: "May 2025"
  },
  {
    title: "FAQ",
    description:
      "Frequently asked questions about Gasmoción, including troubleshooting and general inquiries.",
    link: "/docs/faq.pdf",
    image: "/images/document-icon.png",
    icon: <HelpCircle size={24} />,
    color: "green",
    size: "1.2 MB",
    updated: "May 2025"
  },
];

const DocumentSection = () => {
  const [hoveredDoc, setHoveredDoc] = useState(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Helper function for color classes
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        light: "bg-blue-50",
        medium: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-100"
      },
      amber: {
        light: "bg-amber-50",
        medium: "bg-amber-100",
        text: "text-amber-600",
        border: "border-amber-200",
        hover: "hover:bg-amber-100"
      },
      green: {
        light: "bg-green-50",
        medium: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:bg-green-100"
      }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10 transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
            Resources
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Important Documents
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Access our comprehensive guides and resources to help you get the most out of Gasmoción's services.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all text-gray-600"
              placeholder="Search documents..."
            />
          </div>
        </motion.div>

        {/* Document Cards */}
        <motion.div 
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {documents.map((doc, index) => {
            const colorClasses = getColorClasses(doc.color);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredDoc(index)}
                onMouseLeave={() => setHoveredDoc(null)}
                className={`bg-white border ${colorClasses.border} rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}
              >
                {/* Document Header */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${colorClasses.light} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className={`w-12 h-12 ${colorClasses.medium} rounded-xl flex items-center justify-center ${colorClasses.text}`}>
                      {doc.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{doc.title}</h3>
                  <p className="text-gray-600">{doc.description}</p>
                </div>
                
                {/* Document Footer */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <FileText size={16} className="mr-1" />
                      {doc.size}
                    </span>
                    <span>Updated: {doc.updated}</span>
                  </div>
                  
                  <a
                    href={doc.link}
                    className={`flex items-center justify-center w-full py-3 px-4 rounded-xl ${
                      hoveredDoc === index 
                        ? `bg-gradient-to-r from-${doc.color}-600 to-${doc.color}-500 text-white` 
                        : `${colorClasses.light} ${colorClasses.text} ${colorClasses.hover}`
                    } font-medium transition-all duration-300`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={18} className="mr-2" />
                    Download Document
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Additional Resources */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Need more resources? Check out our comprehensive documentation portal.
          </p>
          <a 
            href="/documentation" 
            className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 hover:shadow-md transition-all duration-300 font-medium"
          >
            <BookOpen size={18} className="mr-2" />
            Visit Documentation Portal
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentSection;