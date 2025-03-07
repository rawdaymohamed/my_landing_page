import Link from "next/link";
import React from "react";

const Offer = () => {
  return (
    <div className="flex items-center justify-center py-20 px-8 mb-20 bg-black text-white">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Explore ultimate features with premium.
        </h2>
        <p className="font-light text-gray-400 mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing corrupti.
        </p>
        <Link
          href="#"
          className="px-8 py-3 rounded-full inline-block mb-5 bg-blue-500 hover:bg-blue-700 transition-all duration-300 font-medium text-lg"
        >
          Start 14 Day Free Trial
        </Link>
        <p className="font-light text-gray-200 text-sm">
          No credit card required
        </p>
      </div>
    </div>
  );
};

export default Offer;
