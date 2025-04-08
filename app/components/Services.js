import Link from "next/link";
import Image from "next/image";

export default function Services() {
  // Sample services data (you can expand or modify this)
  const services = [
    {
      title: "LPG for Cooking in Home",
      description: "Safe and efficient LPG for your kitchen.",
      image: "/images/kitchen-with-white-surfaces-chic-oven.jpg",
      href: "/home-cooking",
    },
    {
      title: "Convert to LPG from Other Fuels",
      description: "Switch to cleaner, cost-effective LPG.",
      image: "/images/gas-cylinder.jpg",
      href: "/convert-to-lpg",
    },
    {
      title: "LPG for New Industries",
      description: "Power your factory with reliable LPG.",
      image: "/images/gas-cylinder.jpg",
      href: "/industries",
    },
    {
      title: "LPG Installation Services",
      description: "Expert setup for seamless LPG use.",
      image: "/images/kitchen-with-white-surfaces-chic-oven.jpg",
      href: "/installation",
    },
    {
      title: "Energy Saving Solutions",
      description: "Optimize energy with smart LPG systems.",
      image: "/images/gas-cylinder.jpg",
      href: "/energy-saving",
    },
    {
      title: "LPG Supply for Hotel/Restaurant",
      description: "Bulk LPG for your business needs.",
      image: "/images/gas-cylinder.jpg",
      href: "/hotel-restaurant",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-blue mb-12">
          Our LPG Solutions
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group relative">
              <div className="relative w-full h-72 bg-white rounded-lg overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                {/* Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={`${service.title} Image`}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white w-full">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm mb-4">{service.description}</p>
                  {/* Modern Arrow Icon */}
                  <svg
                    className="w-6 h-6 text-orange group-hover:text-orange-dark transition-colors duration-300 absolute bottom-4 right-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}