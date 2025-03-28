"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
    { image: "https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid" },
    { image: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid" },
    { image: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2185.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid" },
    { image: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2053.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid" },
    { image: "https://img.freepik.com/free-photo/empty-wooden-countertop-offers-pristine-stage-culinary-creation-bathed-natural-light_91128-4365.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid" },
    { image: "https://img.freepik.com/free-photo/modern-kitchen-interior-design_23-2150772115.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid" },
];

export default function InteriorProjects() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative h-[450px] flex items-center justify-center bg-gray-900 text-white bg-cover bg-center" style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248357.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid')`,
            }}>
                {/* Overlay for Dark Effect */}
                <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
                <div className="relative text-center px-6">
                    <h1 className="text-5xl text-background font-bold mb-4">Our Exterior Projects</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        We craft beautiful and functional spaces, bringing your vision to life with expert design.
                    </p>
                </div>

            </section>

            <div className="container mx-auto my-16 px-4 max-w-screen-lg bg-background">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={project.image}
                                alt={`Interior Project ${index + 1}`}
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
