import Link from "next/link";
import React from "react";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaMapLocation, FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-10 bg-white">
      <div className="mt-20 w-[90%] px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="mr-0.5 -mt-1 font-extrabold text-pink-700 text-3xl ">
              MY
            </span>
            <div className="text-lg font-bold uppercase tracking-wider">
              Landing
            </div>
          </Link>
          {/* Description */}
          <p className="mt-4 text-sm font-medium leading-7 w-[80%] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quas
            ullam
          </p>
        </div>
        {/* About us Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
          <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>About Us</li>
            <li>Copyright</li>
            <li>Popular Campaign</li>
          </ul>
        </div>
        {/* Our information Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Our Information
          </h3>
          <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Sitemap</li>
            <li>Store Hours</li>
          </ul>
        </div>
        {/* Contact info Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact Info</h3>
          <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
            <li className="flex gap-2 items-center">
              <FaMapLocation />
              <span>Cairo, Egypt</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt />
              123-456(8901)
            </li>
            <li className="flex gap-2 items-center">
              <FaClock />
              <span>7 days - 8am - 10am</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaMessage />
              <span>info@demo.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
