import React from "react";
import Hero from "@/app/components/Hero/Hero";
import WhyChoose from "../WhyChoose/WhyChoose";
import FeatureAnalytics from "../FeatureAnalytics/FeatureAnalytics";
import Features from "../Features/Features";
import Review from "./Review/Review";
import Pricing from "./Pricing/Pricing";

const Home = () => {
  return (
    <div className="text-gray-700">
      <Hero />
      <WhyChoose />
      <FeatureAnalytics />
      <Features />
      <Review />
      <Pricing />
    </div>
  );
};

export default Home;
