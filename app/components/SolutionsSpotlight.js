// import Link from "next/link";
// import { FaBuilding, FaHome } from "react-icons/fa"; // Importing icons from react-icons

// export default function SolutionsSpotlight() {
//   return (
//     <section className="w-full py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-blue mb-12">
//           Tailored for You
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Card 1: Business LPG */}
//           <Link href="/business" className="group">
//             <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex items-center">
//               {/* Icon */}
//               <div className="flex-shrink-0 mr-6">
//                 <FaBuilding className="w-12 h-12 text-orange" />
//               </div>
//               {/* Content */}
//               <div>
//                 <h3 className="text-xl font-semibold text-dark-blue mb-2">
//                   Business LPG
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   Bulk supply for restaurants, hotels, and industries.
//                 </p>
//                 <p className="text-gray-600 mb-4">Fast quotes. Faster deliveries.</p>
//                 <button className="bg-orange text-white font-bold py-2 px-4 rounded-full group-hover:bg-orange-dark transition-colors duration-300">
//                   Talk to Us Now
//                 </button>
//               </div>
//             </div>
//           </Link>

//           {/* Card 2: Home LPG (Coming Soon) */}
//           <Link href="/home-waitlist" className="group">
//             <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex items-center">
//               {/* Icon */}
//               <div className="flex-shrink-0 mr-6">
//                 <FaHome className="w-12 h-12 text-gray-400" />
//               </div>
//               {/* Content */}
//               <div>
//                 <h3 className="text-xl font-semibold text-dark-blue mb-2">
//                   Home LPG <span className="text-sm text-gray-500">(Coming Soon)</span>
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   Safe, simple delivery to your doorstep.
//                 </p>
//                 <p className="text-gray-600 mb-4">Be the first to know.</p>
//                 <button className="bg-gray-400 text-white font-bold py-2 px-4 rounded-full group-hover:bg-gray-500 transition-colors duration-300">
//                   Join the Waitlist
//                 </button>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";

export default function SolutionsSpotlight() {
  return (
    <section className="w-full py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Tailored LPG Solutions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Image */}
          <div className="w-full h-72 sm:h-96 md:h-[480px] relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/gas-cylinder.jpg"
              alt="LPG Solutions"
              fill
              className="object-cover rounded-3xl"
            />
          </div>

          {/* Right Side: Cards and Button */}
          <div className="flex flex-col gap-6">
            {/* Subheading */}
            <h3 className="text-2xl font-semibold text-gray-800">
              Choose Your Solution
            </h3>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Business LPG Card */}
              <Link href="/business">
                <div className="bg-white p-5 sm:p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 text-center">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                    Business LPG
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    For restaurants, hotels, industries.
                  </p>
                </div>
              </Link>

              {/* Home LPG Card */}
              <Link href="/home-waitlist">
                <div className="bg-white p-5 sm:p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 text-center">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                    Home LPG
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Safe, simple delivery (Coming Soon).
                  </p>
                </div>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Link href="/contact">
                <button className="bg-primary hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 w-full sm:w-auto">
                  Talk to Us Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
