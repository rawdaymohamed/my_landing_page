import React from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const ResponsiveNav = () => {
  return (
    <div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:block">
        <Nav />
      </div>
    </div>
  );
};

export default ResponsiveNav;
