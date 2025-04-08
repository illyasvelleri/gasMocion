// import Link from "next/link";
// import Image from "next/image";

// export default function HomeHero() {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       {/* Full-Screen Image Background */}
//       <Image
//         src="/images/gas-cylinder.jpg" // Local image from public/images/
//         alt="LPG truck delivering in Kochi"
//         fill // Scales image to fill the container
//         className="object-cover"
//         priority // Preload for above-the-fold content
//       />

//       {/* Overlay for Contrast */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* Content */}
//       <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
//         {/* Headline */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
//           Fueling Kochi’s Future
//         </h1>

//         {/* Subtext */}
//         <p className="text-lg sm:text-xl md:text-2xl mb-8">
//           Safe LPG. Reliable Delivery. Built for Business.
//         </p>

//         {/* CTA Button */}
//         <Link href="/quote">
//           <button className="bg-gradient-to-r from-orange to-orange-dark text-white font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transition-transform duration-300">
//             Unlock Your Quote
//           </button>
//         </Link>
//       </div>

//       {/* Scroll Teaser */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center z-20">
//         <p className="text-sm mb-2 opacity-75 hover:opacity-100 transition-opacity duration-300">
//           See Why Kochi Trusts Us
//         </p>
//         <svg
//           className="w-6 h-6 mx-auto animate-bounce"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 14l-7 7m0 0l-7-7m7 7V3"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="w-full mt-4 py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Container with image background */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-7xl mx-auto h-[500px]">
        {/* Background Image */}
        <Image
          src="/images/gas-cylinder.jpg"
          alt="LPG truck delivering in Kochi"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text Content over image */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Fueling Kochi’s Future
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Safe LPG. Reliable Delivery. Built for Business.
          </p>
          <Link href="/quote">
            <button className="bg-orange text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-dark transition-all duration-300">
              Unlock Your Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll Teaser Outside Image */}
      <div className="mt-6 flex justify-center">
        <div className="text-gray-500 text-center">
          <p className="text-sm text-black mb-1">See Why Kochi Trusts Us</p>
          <svg
            className="w-6 h-6 mx-auto animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
