"use client";
import { menuItems } from "@/app/lib/constants";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div
        className={`${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-700 ease-in-out bg-gray-400 w-screen h-screen fixed top-0 left-0`}
      >
        <nav
          className={`${
            showMenu ? "translate-x-0 delay-200" : "-translate-x-full"
          } transition-all duration-700 ease-in-out flex flex-col justify-center space-y-4 bg-indigo-900 h-full pl-14 w-[70%] sm:w-[70%] absolute top-0 left-0`} // Transition on inner nav with delay
        >
          <IoMdClose
            className="cursor-pointer text-white size-6 absolute top-2 right-2"
            onClick={() => setShowMenu(false)}
          />
          {menuItems.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              className="text-gray-300 font-bold text-base sm:text-lg md:text-xl w-fit pb-1 border-b-2 border-b-indigo-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <RiMenu3Line
        className="absolute top-2 right-2 text-black size-6 cursor-pointer"
        onClick={() => setShowMenu(!showMenu)} // Toggle menu open
      />
    </div>
  );
};

export default MobileNav;
