import Link from "next/link";
import React from "react";

import { ImCheckmark } from "react-icons/im";
type Props = { price: number; plan: string };
const PricingCard = ({ price, plan }: Props) => {
  return (
    <div className="bg-white p-12 rounded-xl shadow-lg">
      <h2 className="text-xl text-center font-semibold text-blue-600">
        {plan}
      </h2>
      <p className="text-center mt-8 mb-2 text-black">
        <span className="text-3xl font-normal">$</span>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-3xl font-normal">/mo</span>
      </p>
      <p className="text-gray-500 text-center font-light">Per user</p>
      <div className="mt-8 flex flex-col gap-5 justify-start">
        <div className="flex gap-4 items-center">
          <div className="p-1.5 rounded-full bg-gray-300">
            <ImCheckmark className="size-4 text-green-500" />
          </div>
          <p className="text-gray-600 text-sm font-semibold">
            Unlimited Connections
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="p-1.5 rounded-full bg-gray-300">
            <ImCheckmark className="size-4 text-green-500" />
          </div>
          <p className="text-gray-600 text-sm font-semibold">
            Basic Actions & Triggers
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="p-1.5 rounded-full bg-gray-300">
            <ImCheckmark className="size-4 text-green-500" />
          </div>
          <p className="text-gray-600 text-sm font-semibold">Draft Payments</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="p-1.5 rounded-full bg-gray-300">
            <ImCheckmark className="size-4 text-green-500" />
          </div>
          <p className="text-gray-600 text-sm font-semibold">
            Unlimited Flows and Support
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="p-1.5 rounded-full bg-gray-300">
            <ImCheckmark className="size-4 text-green-500" />
          </div>
          <p className="text-gray-600 text-sm font-semibold">
            Lifetime Updates
          </p>
        </div>
      </div>
      <Link
        href="#"
        className="mt-10 inline-block py-4 w-full text-center font-bold bg-blue-600 hover:bg-blue-700 text-gray-200 transition-all duration-300"
      >
        Start 14 Day Free Trial
      </Link>
    </div>
  );
};

export default PricingCard;
