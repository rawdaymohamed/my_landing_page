"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Review = () => {
  return (
    <div className="py-16 bg-[#fcf6fa]">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-10 text-gray-900">
        What clients say about us
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <Carousel
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
          responsive={responsive}
          showDots
        >
          <ReviewCard name="Omar Yasser Mohamed" imageURL="/images/c1_v2.png" />
          <ReviewCard name="Diaa Yasser Mohamed" imageURL="/images/c2.png" />
          <ReviewCard name="Omar Yasser Mohamed" imageURL="/images/c1_v2.png" />
          <ReviewCard name="Diaa Yasser Mohamed" imageURL="/images/c2.png" />
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
