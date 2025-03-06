import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
type Props = {
  imageURL: string;
  name: string;
};
const ReviewCard = ({ imageURL, name }: Props) => {
  return (
    <div
      className="z-1 w-full lg:w-[90%] mx-auto p-6 bg-white rounded-lg shadow-lg relative grid grid-cols-1 lg:grid-cols-3 items-center place-items-center gap-10 text-gray-700"
      style={{ paddingTop: "12vh" }}
    >
      <FaQuoteLeft className="size-6 absolute top-1 left-6" />
      <div className=" col-span-1 order-2 lg:order-2 mx-auto">
        <Image
          src={imageURL}
          alt={name}
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
      <div className="order-2 lg:order-1 col-span-2">
        <p className="text-sm lg:text-lg leading-relaxed mb-5 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quae.
          Repudiandae quo error optio reiciendis ipsum hic dolorem debitis
          tenetur quibusdam, deserunt nobis aliquam obcaecati quasi adipisci
          autem exercitationem sapiente!
        </p>
        <h2 className="my-1 text-xl font-semibold">{name}</h2>
        <h2 className="mb-6 text-gray-500">Full Stack Developer</h2>
        <div className="flex gap-1 items-center">
          <FaStar className="size-4 text-yellow-500" />
          <FaStar className="size-4 text-yellow-500" />
          <FaStar className="size-4 text-yellow-500" />
          <FaStar className="size-4 text-yellow-500" />
          <FaStar className="size-4 text-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
