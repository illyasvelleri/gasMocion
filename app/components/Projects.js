import React from "react";

export default function ProjectShowcase() {
    return (
        <section className="container-lg bg-slate-50 mx-auto my-16 px-6 py-12 space-y-16 max-w-screen-lg">
            {/* Interior Design Project */}
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Left Image with Gradient */}
                <div className="relative w-full md:w-1/2 h-96 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 "></div>
                    <img src="https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683473.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid" alt="Interior Design" className="w-full h-full object-cover" />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 text-left space-y-5">
                    <h3 className="text-3xl font-bold text-gray-900">Luxury Interior Transformation</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li>✅ Timeless & Elegant Interiors</li>
                        <li>✅ Bespoke Furniture & Decor</li>
                        <li>✅ Maximized Natural Light</li>
                        <li>✅ Sustainable & Eco-Friendly Materials</li>
                    </ul>
                    <a href="/interiorProjects" className="inline-block px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">View More Projects →</a>
                </div>
            </div>

            {/* Exterior Design Project */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                {/* Right Image with Gradient */}
                <div className="relative w-full md:w-1/2 h-96 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
                    <img src="https://img.freepik.com/free-photo/futuristic-business-building-architecture_23-2151003676.jpg?t=st=1743052509~exp=1743056109~hmac=457a23bd2356ec81b4cf40a789cd09ff3a8a7e965f97d7220d88dd577d228921&w=1380" alt="Exterior Design" className="w-full h-full object-cover" />
                </div>

                {/* Left Content */}
                <div className="w-full md:w-1/2 text-left space-y-5">
                    <h3 className="text-3xl font-bold text-gray-900">Striking Exterior Design</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li>✅ Modern Facade with Unique Finishes</li>
                        <li>✅ Weather-Resistant & Durable Materials</li>
                        <li>✅ Harmonized with Natural Surroundings</li>
                        <li>✅ Custom Landscaping Integration</li>
                    </ul>
                    <a href="/exteriorProjects" className="inline-block px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">View More Projects →</a>
                </div>
            </div>
        </section>
    );
}
