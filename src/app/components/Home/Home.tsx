import React from "react";
import Hero from "@/app/components/Hero/Hero";
import WhyChoose from "../WhyChoose/WhyChoose";
import FeatureAnalytics from "../FeatureAnalytics/FeatureAnalytics";

const Home = () => {
  return (
    <div className="text-gray-700">
      <Hero />
      <WhyChoose />
      <FeatureAnalytics />
    </div>
  );
};

export default Home;
