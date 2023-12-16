import React from "react";

const SectionHeader = ({ subHeader, mainHeader }) => {
  return (
    <div className="text-center mb-5">
      <h3 className="text-gray-500 font-semibold uppercase">{subHeader}</h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </div>
  );
};

export default SectionHeader;
