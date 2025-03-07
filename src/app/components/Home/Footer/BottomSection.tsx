import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const BottomSection = () => {
  return (
    <div className="flex flex-col mt-8 px-14 pt-8 border-t md:flex-row justify-between items-center text-gray-600 text-sm">
      <p className="text-center md:text-left">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
      <div className="flex items-center gap-4 mt-5 md:mt-0">
        <span>Social : </span>
        <Link
          href="#"
          className="text-gray-500 hover:text-gray-800 transition-all duration-300"
        >
          <FaFacebook className="size-4" />
        </Link>
        <Link
          href="#"
          className="text-gray-500 hover:text-gray-800 transition-all duration-300"
        >
          <FaX className="size-4" />
        </Link>

        <Link
          href="#"
          className="text-gray-500 hover:text-gray-800 transition-all duration-300"
        >
          <FaLinkedin className="size-4" />
        </Link>
      </div>
    </div>
  );
};

export default BottomSection;
