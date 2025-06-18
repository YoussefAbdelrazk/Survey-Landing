import { X, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white">
    

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10 ">
        {/* Brand & Newsletter on one row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Brand */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold">
              <span className="text-[#33b7c1]">Survey</span>Land
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Make smarter decisions with better data.<br />
              Create surveys, gather feedback, and grow.
            </p>
          </div>

          {/* Newsletter */}
          <form className="mt-6 md:mt-0 md:w-1/2 flex justify-end">
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Stay informed by entering your email"
                className="px-4 py-2 text-sm w-full outline-none"
              />
              <button className="bg-[#33b7c1] text-white px-4 py-2 text-sm whitespace-nowrap">
                Enter
              </button>
            </div>
          </form>
        </div>

        {/* Links */}
        <div className="border-t border-gray-200 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-700">
          {/* Col 1 */}
          <div className="space-y-2">
            <a href="#">Home</a><br />
            <a href="#">Templates</a><br />
            <a href="#">Pricing</a><br />
            <a href="#">Integrations</a>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <a href="#">Help Center</a><br />
            <a href="#">Terms of Service</a><br />
            <a href="#">Privacy Policy</a><br />
            <a href="#">Refund Policy</a><br />
            <a href="#">FAQs</a>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <span className="font-medium block">E-mail us at</span>
            <a href="mailto:support@example.com">support@example.com</a>

            <span className="font-medium block mt-4">Follow us</span>
            <div className="flex space-x-4 mt-1">
              <a href="#"><X size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="border-t border-gray-200 text-center text-xs text-gray-500 py-4">
        ©2025 SurveyLand. All rights reserved
      </div>
    </footer>
  );
}
