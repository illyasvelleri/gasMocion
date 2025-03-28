export default function StatsSection() {
    return (
        <section className="container mx-auto px-4 max-w-screen-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                {/* Single Stat Box */}
                {[
                    { number: "10+", label: "Years of Experience" },
                    { number: "500+", label: "Projects Completed" },
                    { number: "200+", label: "Happy Clients" }
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="relative bg-primary border-2 border-dotted border-gray-300 p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                    >
                        <h2 className="text-5xl font-bold text-gray-100">{stat.number}</h2>
                        <p className="text-gray-300 mt-2">{stat.label}</p>

                        {/* Decorative Dotted Element */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-100 border-2 border-dotted border-gray-300 rounded-full"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
