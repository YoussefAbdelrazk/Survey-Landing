export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black  px-10 py-10 text-sm">
      <div className="max-w-6xl mx-auto">
        {/* Logo & Description */}
        <div className="flex flex-col md:flex-row gap-7 text-center md:text-start justify-center  md:justify-between items-center mb-10">
          <div>
            <h2 className="text-xl font-semibold">
              <span className="text-primary-btn dark:text-primary-btn">Survey</span>
              <span className="text-primary-text black:text-primary-text">Land</span>
            </h2>
            <p className="mt-2 text-sm text-secondary-btn dark:text-secondary-btn">
              Make smarter decisions with better data.
              <br />
              Create surveys, gather feedback, and grow.
            </p>
          </div>

          {/* Email input section */}
          <div className="flex items-center h-[40px]  ">
            <input
              type="email"
              placeholder="Stay informed by entering your email"
              className=" rounded-l-lg px-4 py-2 w-72 text-sm bg-disabled-back dark:bg-disabled-back placeholder-disabled-text dark:placeholder-disabled-text outline-none"
            />
            <button className="bg-primary-btn dark:bg-primary-btn text-white px-4 py-2 rounded-r-lg text-sm font-bold">
              Enter
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secndary-text my-6"></div>

        {/* Footer links centered */}
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 lg:gap-x-[142px] text-center text-primary-text dark:text-primary-text">
            {/* Section 1 */}
            <div>
              <h3 className="font-bold pb-2">Home</h3>
              <ul className="flex flex-col gap-2">
                <li>Templates</li>
                <li>Pricing</li>
                <li>Integrations</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-bold pb-2">Help Center</h3>
              <ul className="flex flex-col gap-2">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>FAQs</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-bold pb-2">E-mail us at</h3>
              <p>Support@example.com</p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="font-bold pb-2">Follow us</h3>
              <div className="flex justify-center gap-4">
                <img src="/footer-x.png" alt="X" className="w-3 h-3" />
                <img src="/footer-ln.png" alt="LinkedIn" className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-secndary-text pt-6 text-center mt-10">
          ©2025 SurveyLand. All rights reserved
        </div>
      </div>
    </footer>
  );
};
