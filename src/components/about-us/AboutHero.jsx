import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full px-6 py-10">
      <div>
        <div className="flex flex-col gap-6 items-center md:items-start mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[rgba(30,31,36,1)]">
            Simple Smart <span className="text-[#00B7C1]">Surveys</span>
          </h1>
          <p className="md:text-lg lg:text-xl max-w-[70%] lg:max-w-[50%]">
            Discover how we empower individuals and organizations to collect,
            analyze, and act on data with ease.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start">
          <Link
            to="/signup"
            className="bg-[#00B7C1] text-white px-5 py-3 rounded-md shadow-md hover:bg-[#0099a0] transition-colors duration-300 w-[200px] h-[40px] flex items-center justify-center"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-5 py-3 rounded-lg border border-[#00B7C1] text-[#00B7C1] hover:bg-[#e0fafa] transition-colors duration-300 h-[40px] w-[200px] flex items-center justify-center"
          >
            <span className="font-bold ">Create</span>
          </Link>
        </div>
      </div>

      <img
        src="/about-hero.svg"
        alt="About Us Hero"
        className="hidden md:block md:w-[350px] md:h-[350px]"
      />
    </section>
  );
}

export default AboutHero;
