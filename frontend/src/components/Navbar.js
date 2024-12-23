import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 p-4 shadow-xl rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <h1 className="text-white text-3xl font-extrabold tracking-wide cursor-pointer">
          My Blog
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="text-white hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Create Post
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link
            to="/"
            className="text-white hover:text-gray-200 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/create"
            className="text-white hover:text-gray-200 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Create Post
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
