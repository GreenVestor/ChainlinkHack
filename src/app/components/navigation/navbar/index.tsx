import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-40 bg-green-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-start h-full pt-9">
            <p className="text-2xl uppercase text-white">Greenvestor</p>
            <ul className="hidden md:flex gap-x-8 text-white pt-1 pr-80" text-xl>
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact Us</p>
                </Link>
              </li>
              <li className="w-0">
                <input
                  type="text"
                  className="w-40 h-6 px-4 pr-10 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none"
                  placeholder="Search term..."
                />
              </li>
            </ul>
            <ul className="text-white pt-1">
              <li>
                <Link href="/signup">
                  <p>Sign Up</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
