import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="py-16 bg-[#edfbff]">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-10 text-gray-900">
        Pricing
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <PricingCard price={15} plan="Starter" />
        </div>
        <div>
          <PricingCard price={45} plan="Business" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
