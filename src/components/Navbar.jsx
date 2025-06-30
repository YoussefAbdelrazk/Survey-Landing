import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <header className="w-full border-b bg-white dark:bg-[#1E1F24] shadow-sm fixed top-0 left-0 z-[1000] transition-colors">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-cyan-500">Survey</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Land
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl text-gray-800 dark:text-gray-100 md:hidden"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
          >
            Contact Us
          </Link>
          <Link
            to="/faqs"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
          >
            FAQs
          </Link>
          <Link
            to="/pricing"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop Auth & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="text-xl text-gray-700 dark:text-gray-100 hover:text-cyan-500"
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <Link
            to="/sign-in"
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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
        <div className="fixed top-16 left-0 w-full bg-white dark:bg-[#1E1F24] z-[999] px-4 pb-6 shadow-md md:hidden transition-colors">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/faqs"
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/sign-in"
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyan-500"
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

            {/* Dark mode toggle for mobile */}
            <button
              onClick={() => {
                setIsDark((prev) => !prev);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-100"
            >
              {isDark ? <FaSun /> : <FaMoon />} Toggle Theme
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
