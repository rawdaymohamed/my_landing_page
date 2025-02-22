"use client";
import { menuItems } from "@/app/lib/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          isSticky ? "shadow-lg z-5000 bg-white" : ""
        } h-[12vh] fixed w-full font-medium text-gray-900 transition-all duration-200 top-0 left-0 text-sm lg:text-base`} // added top and left 0
      >
        <div className="flex items-center h-full">
          <nav className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="mr-0.5 -mt-1 font-extrabold text-pink-700 text-3xl ">
                MY
              </span>
              <div className="text-lg font-bold uppercase tracking-wider">
                Landing
              </div>
            </Link>
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  href={item.url}
                  key={item.id}
                  className="relative after:absolute text-gray-800 w-fit after:content-[''] after:block after:h-[2px] after:bg-pink-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:origin-right after:transition after:duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/"
              className="px-6 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-normal"
            >
              Join Now
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
