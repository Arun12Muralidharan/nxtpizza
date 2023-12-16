import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-3">
      <Link
        className="text-primary font-semibold text-2xl hover:scale-105 transition-all"
        href={"/"}
      >
        NXT Pizza
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link
          className=" hover:text-primary hover:scale-105 transition-all"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className=" hover:text-primary hover:scale-105 transition-all"
          href={"/"}
        >
          Menu
        </Link>
        <Link
          className=" hover:text-primary hover:scale-105 transition-all"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className=" hover:text-primary hover:scale-105 transition-all"
          href={"/contact"}
        >
          Contact
        </Link>
        <nav className="flex gap-2">
          <Link
            href={"/login"}
            className="bg-primary text-white px-7 py-2 rounded-full hover:scale-105 transition-all"
          >
            Login
          </Link>
          <Link
            href={"/register"}
            className="bg-primary text-white px-7 py-2 rounded-full hover:scale-105 transition-all"
          >
            Register
          </Link>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
