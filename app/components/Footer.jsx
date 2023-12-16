import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 py-3 mx-auto w-full text-center text-md text-gray-500]">
      &copy; {new Date().getFullYear()} All rights reserved.
    </footer>
  );
};

export default Footer;
