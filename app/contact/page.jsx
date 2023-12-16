import React from "react";
import SectionHeader from "../components/SectionHeader";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div>
        <SectionHeader subHeader={"Need help"} mainHeader={"Contact Us"} />
      </div>
      <div className="flex gap-4 max-w-xl mx-auto">
        <div className="w-1/2 max-w-md pl-3 text-gray-500 self-center">
          <p>
            Call us on below
            <br />
            <span className="text-primary text-xl font-bold">
              +1 333 333 3333
            </span>
          </p>
          <br />
          <p>
            Write to us on <br />
            <span className="text-primary text-xl font-bold">
              support@nxtpizza.com
            </span>
          </p>
        </div>
        <div className="w-1/2 relative aspect-square self-center">
          <Image src={"/pizza.png"} alt={"Pizza"} layout={"fill"} />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
