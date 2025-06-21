import SignUp from "@/pages/SignUp";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-cyan-500">Survey</span>
            <span className="text-2xl font-bold text-gray-900">Land</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Contact Us
            </a>
            <a href="/faqs" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              FAQs
            </a>
            <a href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Login
            </button>
            <Link to={SignUp}>
            <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-md transition-colors">
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
