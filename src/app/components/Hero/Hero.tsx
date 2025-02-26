import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[30vh] pb-[5vh]">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto space-y-10 md:space-y-10 flex flex-col justify-center">
        <div className="flex gap-2 w-full">
          <div className="flex flex-col gap-10 lg:w-2/3">
            {/* Top box */}
            <div className="w-fit text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg">
              <div className="w-fit rounded-full text-white bg-blue-700 px-2 py-1 lg:px-3 lg:py-2">
                News
              </div>
              <p>We have updated our terms & conditions policy.</p>
            </div>
            {/* Mid section */}
            <div className="w-fit flex items-center gap-5 ">
              {/* Text */}
              <div className="space-y-7">
                <h1 className="text-black font-bold leading-tight text-2xl md:text-3xl lg:text-4xl">
                  The premier workspace companion for your daily needs.
                </h1>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, ea, nobis eos dicta minima aperiam sequi temporibus id
                  expedita tempore, quis hic nesciunt voluptatem quidem tenetur
                  consequatur delectus distinctio impedit?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            {/* Images */}
            <div className="flex gap-5">
              <Image
                src="/images/gp.png"
                alt="play store"
                width={140}
                height={140}
                className="object-contain cursor-pointer"
              />
              <Image
                src="/images/as.png"
                alt="play store"
                width={140}
                height={140}
                className="object-contain cursor-pointer"
              />
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <Image
              className="object-contain"
              src="/images/hero.png"
              alt="hero"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
