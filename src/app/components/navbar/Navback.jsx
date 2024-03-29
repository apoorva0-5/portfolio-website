"use client";
import React, { useState } from "react";
import { CgBot } from "react-icons/cg";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="#" className="text-white text-xl font-semibold flex items-center gap-3"><CgBot className='text-3xl'/>Apoorva Dubey</Link>
        {/* <a
          href="#"
          className="text-white text-xl font-semibold flex items-center gap-3"
        >
          <img
            src="images/ricardo.gif"
            className="w-[50px] object-contain border-xl"
            alt=""
          />
          Utkarsh Pandey
        </a> */}

        {/* Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none md:hidden"
          id="burger-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <div className="hidden md:flex flex-grow items-center justify-end space-x-4">
          <Link
            href="#"
            className="text-white hover:text-blue-700 focus:text-red-600"
          >
            Home
          </Link>
          {/* <a href="#" className="text-white hover:text-blue-700 ocus:text-red-600">About</a> */}
          <Link
            href="https://github.com/apoorva0-5?tab=repositories"
            className="text-white hover:text-blue-700 ocus:text-red-600"
          >
            Projects
          </Link>
          {/* <Link
            href="#"
            className="text-white hover:text-blue-700 ocus:text-red-600"
          >
            Contact
          </Link> */}
          <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800">
            <Link href="https://drive.usercontent.google.com/u/0/uc?id=1EcALtWo4LQaP88t0Vl32TYSwcYjgrgZ9&export=download">Download Resume</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={isMobileMenuOpen ? "md:hidden block" : "md:hidden hidden"}
        id="mobile-menu"
      >
        <Link href="#" className="block py-2 px-4 text-white hover:bg-gray-800">
          Home
        </Link>
        <Link href="#" className="block py-2 px-4 text-white hover:bg-gray-800">
          Projects
        </Link>
        <Link href="#" className="block py-2 px-4 text-white hover:bg-gray-800">
          Contact
        </Link>
        <button className="block bg-gray-900 text-white py-2 px-4 rounded-lg mt-4">
          Download Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
