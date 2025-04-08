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
import Link from "next/link";
import { FaBuilding, FaHome } from "react-icons/fa";

export default function SolutionsSpotlight() {
  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Tailored for You
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Business LPG */}
          <Link href="/business" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 flex items-center space-x-6">
              <div className="flex-shrink-0">
                <FaBuilding className="w-14 h-14 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Business LPG
                </h3>
                <p className="text-gray-600 mb-2">
                  Bulk supply for restaurants, hotels, and industries.
                </p>
                <p className="text-gray-600 mb-4">Fast quotes. Faster deliveries.</p>
                <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-5 rounded-full transition-colors duration-300">
                  Talk to Us Now
                </button>
              </div>
            </div>
          </Link>

          {/* Home LPG */}
          <Link href="/home-waitlist" className="group">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 flex items-center space-x-6">
              <div className="flex-shrink-0">
                <FaHome className="w-14 h-14 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Home LPG{" "}
                  <span className="text-sm text-gray-500">(Coming Soon)</span>
                </h3>
                <p className="text-gray-600 mb-2">
                  Safe, simple delivery to your doorstep.
                </p>
                <p className="text-gray-600 mb-4">Be the first to know.</p>
                <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm font-semibold py-2 px-5 rounded-full transition-colors duration-300">
                  Join the Waitlist
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
