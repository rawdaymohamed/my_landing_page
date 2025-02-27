import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const FeatureAnalytics = () => {
  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto pt-24 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Image src="/images/a.png" alt="image" width={500} height={500} />
      </div>
      <div className="flex flex-col my-12 gap-5">
        <h1 className="font-semibold text-orange-500">
          Audience Tracking and Insights
        </h1>
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-900">
          Powerful analytics tools that put you in control and are fully
          customizable.
        </h1>
        <p className="text-gray-600 leading-7 font-light text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem
          deserunt quisquam, dolores veritatis magnam asperiores dolorum illum
          odit magni quidem praesentium repellat nisi est et pariatur. Sapiente,
          sed quis!
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-5">
            <FaCheckCircle className="text-green-600" />
            <p>Chat prompt module supported</p>
          </li>
          <li className="flex items-center gap-5">
            <FaCheckCircle className="text-green-600" />
            <p>Enjoy unlimited features by paid plan</p>
          </li>
          <li className="flex items-center gap-5">
            <FaCheckCircle className="text-green-600" />
            <p>Manage ultimate conversation</p>
          </li>
        </ul>
        <button className="text-gray-800 rounded-sm px-6 py-2 w-fit hover:bg-blue-500 hover:text-white transition-all duration-200">
          Explore More →
        </button>
      </div>
    </div>
  );
};

export default FeatureAnalytics;
