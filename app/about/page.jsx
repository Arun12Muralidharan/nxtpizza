import React from "react";
import SectionHeader from "../components/SectionHeader";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div>
        <SectionHeader subHeader={"Our Story"} mainHeader={"About Us"} />
      </div>
      <div className="flex gap-2 max-w-3xl mx-auto">
        <div className="w-1/3 relative aspect-square self-center">
          <Image src={"/pizza.png"} alt={"Pizza"} layout={"fill"} />
        </div>
        <div className="w-2/3 max-w-md pl-3 text-gray-500 flex flex-col gap-2 indent-7">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            deleniti quae fugit aut enim modi esse qui accusamus maxime a ab
            iste omnis veritatis deserunt perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            deleniti quae fugit aut enim modi esse qui accusamus maxime a ab
            iste omnis veritatis voluptates deserunt perferendis, excepturi
            illum molestiae!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            sunt reiciendis quae voluptatem temporibus quos labore aliquam vero
            consectetur magni consequuntur eveniet aspernatur facilis, iusto
            non, ipsa qui nostrum libero rerum.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
