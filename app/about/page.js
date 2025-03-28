import Header from "../components/Header";
import CarouselTestimonial from "../components/CarouselTestimonial";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <>
            <Header />
            <div>
                {/* Hero Section */}
                <section className="relative h-[450px] flex items-center justify-center bg-gray-900 text-white bg-cover bg-center" style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/blending-futuristic-building-seamlessly-into-desert-landscape_23-2151248357.jpg?ga=GA1.1.1672550741.1742888243&semt=ais_hybrid')`,
                }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative text-center px-6">
                        <h1 className="text-5xl font-bold mb-4">About Us</h1>
                        <p className="text-lg max-w-2xl mx-auto">
                            We craft beautiful and functional spaces, bringing your vision to life with expert design.
                        </p>
                    </div>
                </section>

                {/* About Content */}
                <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            With over a decade of experience in architecture and interior design, we transform spaces with creativity and precision.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our team specializes in blending aesthetics with functionality, ensuring each project reflects the client’s personality.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://img.freepik.com/free-photo/futuristic-business-building-architecture_23-2151003676.jpg"
                            alt="Our Team"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg"
                        />

                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-gray-100 py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-12">
                        <div>
                            <h3 className="text-5xl font-bold text-yellow-500">500+</h3>
                            <p className="text-gray-700 mt-2">Projects Completed</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-yellow-500">200+</h3>
                            <p className="text-gray-700 mt-2">Happy Clients</p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-yellow-500">10+</h3>
                            <p className="text-gray-700 mt-2">Years of Experience</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <CarouselTestimonial />

                {/* Call-to-Action Section */}
                <section className="bg-yellow-500 py-16 text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
                    <p className="text-lg mb-6">Contact us today to bring your dream project to life!</p>
                    <a href="/contact" className="bg-white text-yellow-500 px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-100">
                        Get in Touch
                    </a>
                </section>
            </div>
            <Footer />
        </>
    );
}
