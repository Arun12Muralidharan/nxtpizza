import React from "react";
import Image from "next/image";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center shadow-md hover:bg-white hover:shadow-lg hover:shadow-black/25 transition-all">
      {/* <img src="/pizza.png" alt="pizza" /> */}
      <div>
        <Image
          src={"/pizza.png"}
          alt={"pizza"}
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>
      <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
