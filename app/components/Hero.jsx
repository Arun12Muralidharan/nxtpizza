import React from "react";
import Image from "next/image";
import RightArrow from "./icons/RightArrow";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Delicious <span className="text-primary">Pizza</span> waiting for you
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex gap-2 items-center text-white px-4 py-2 rounded-full">
            ORDER NOW
            <RightArrow />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"Pizza"}
        />
      </div>
    </section>
  );
};

export default Hero;
