import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white  px-10 py-10 text-[#62636C] text-sm">
      <div className="max-w-6xl mx-auto">
        {/* Logo & Description */}
        <div className="flex justify-between items-start mb-10">
          <div>
          <h2 className="text-xl font-semibold">
            <span className="text-[#00B7C1]">Survey</span><span className="text-black">Land</span>
            </h2>
            <p className="mt-2 text-sm">
              Make smarter decisions with better data.
              <br />
              Create surveys, gather feedback, and grow.
            </p>
          </div>

          {/* Email input section */}
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Stay informed by entering your email"
              className="border border-gray-300 rounded px-4 py-2 w-72 text-sm"
            />
            <button className="bg-[#00B7C1] text-white px-4 py-2 rounded text-sm">
              Enter
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Footer links centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-x-[142px]"> {/* زودي gap هنا */}
            {/* Section 1 */}
            <div>
              <h3 className="font-medium text-center pb-[10px]">Home</h3>
              <ul className="flex flex-col gap-[10px] text-center">
                <li>Templates</li>
                <li>Pricing</li>
                <li>Integrations</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-medium text-center pb-[10px]">Help Center</h3>
              <ul className="flex flex-col gap-[10px] text-center">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>FAQs</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-medium text-center pb-[10px]">E-mail us at</h3>
              <p className="text-center">Support@example.com</p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="font-medium text-center pb-[10px]">Follow us</h3>
              <div className="flex justify-center gap-[10px]">
                <span>X</span>
                <span>in</span>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom line */}
        <div className="border-t border-gray-300 pt-6 text-center mt-10">
          ©2025 SurveyLand. All rights reserved
        </div>
      </div>
    </footer>
  );
};


