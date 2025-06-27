import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm fixed top-0 left-0 z-[1000]">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-cyan-500">Survey</span>
          <span className="text-2xl font-bold text-gray-900">Land</span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl text-gray-800 md:hidden"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Contact Us
          </Link>
          <Link
            to="/faqs"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            FAQs
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            to="/sign-in"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-md transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white z-[999] px-4 pb-6 shadow-md md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/faqs"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/sign-in"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="text-sm font-medium text-white bg-cyan-500 rounded-md px-4 py-2 hover:bg-cyan-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
