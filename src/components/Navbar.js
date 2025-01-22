import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white m-0 p-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex justify-end items-center h-16 m-0 p-0">
          {/* Align items to the right */}
          <div className="flex items-center space-x-4 m-0 p-0">
            <Link className="hover:underline hover:text-gray-300" to="/second-page">
              Home
            </Link>
            <Link className="hover:underline hover:text-gray-300" to="/">
              Grid
            </Link>
            <a
              className="hover:underline hover:text-gray-300"
              href="https://www.linkedin.com/in/vivek-kumar-sulaniya-ba8204267/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg m-0 p-0">
          <div className="px-0 pt-0 pb-0 space-y-1 sm:px-0 flex flex-col items-center">
            <Link
              className="block text-white hover:underline hover:text-gray-300"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="block text-white hover:underline hover:text-gray-300"
              to="/grid"
              onClick={() => setIsMenuOpen(false)}
            >
              Grid
            </Link>
            <a
              className="block text-white hover:underline hover:text-gray-300"
              href="https://www.linkedin.com/in/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
