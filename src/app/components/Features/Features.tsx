import React from "react";
import { TbBlocks } from "react-icons/tb";
import { FaLaptop, FaInfinity, FaMobileAlt } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
import {
  MdDashboardCustomize,
  MdEditDocument,
  MdContactSupport,
  MdSecurity,
} from "react-icons/md";
const Features = () => {
  const features = [
    {
      id: 1,
      text: "50+ unique design blocks",
      icon: <TbBlocks className="text-red-500" />,
    },
    {
      id: 2,
      text: "Fully Responsive",
      icon: <FaLaptop className="text-purple-500" />,
    },
    {
      id: 3,
      text: "Lifetime updates",
      icon: <FaInfinity className="text-green-500" />,
    },
    {
      id: 4,
      text: "Multiple Layouts",
      icon: <FaAlignJustify className="text-blue-500" />,
    },
    {
      id: 5,
      text: "Customizable features",
      icon: <MdDashboardCustomize className="text-pink-500" />,
    },
    ,
    {
      id: 6,
      text: "Rich documentation",
      icon: <MdEditDocument className="text-gray-700" />,
    },
    ,
    {
      id: 7,
      text: "Mobile First Design",
      icon: <FaMobileAlt className="text-yellow-500" />,
    },
    ,
    {
      id: 8,
      text: "Humanly Support",
      icon: <MdContactSupport className="text-indigo-500" />,
    },
    ,
    {
      id: 9,
      text: "Enhanced security",
      icon: <MdSecurity className="text-green-600" />,
    },
  ];
  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto py-16">
      <h1 className="text-center text-xl md:text-2xl font-bold mb-10 text-gray-900">
        It&apos;s Everything You&apos;ll Ever Need
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features?.map((feature) => (
          <div
            key={feature?.id}
            className="text-lg flex justify-center items-center bg-white px-7 py-4 gap-3 shadow-md"
          >
            <div>{feature?.icon}</div>
            <p>{feature?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
