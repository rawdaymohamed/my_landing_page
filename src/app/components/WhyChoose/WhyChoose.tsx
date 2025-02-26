import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="py-16">
      <h1 className="mt-6 text-black text-2xl md:text-3xl capitalize font-bold text-center">
        Why you choose this application
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] lg:w-[70%] grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
        <WhyChooseCard
          image="i1.png"
          title="create free account"
          linkText="start earning"
        />
        <WhyChooseCard
          image="i2.png"
          title="monitor user analytics"
          linkText="sign up your store"
        />
        <WhyChooseCard
          image="i3.png"
          title="safe & trusted"
          linkText="get the app"
        />
        <WhyChooseCard
          image="i4.png"
          title="fast customer support"
          linkText="learn more"
        />
      </div>
    </div>
  );
};

export default WhyChoose;
