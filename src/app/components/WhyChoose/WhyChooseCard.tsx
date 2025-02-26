import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  image: string;
  title: string;
  linkText: string;
};
const WhyChooseCard = ({ image, title, linkText }: Props) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center my-2 text-gray-700">
      <Image
        src={`/images/${image}`}
        alt={title}
        width={70}
        height={70}
        className="object-contain"
      />
      <h2 className="font-bold capitalize">{title}</h2>
      <p className="text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam.
      </p>
      <Link
        href="/"
        className=" capitalize text-blue-900 font-semibold text-sm"
      >
        {linkText} →
      </Link>
    </div>
  );
};

export default WhyChooseCard;
