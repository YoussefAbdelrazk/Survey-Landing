import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-16 py-16 md:py-12 gap-8 bg-white dark:bg-black ">
      <div>
        <div className="flex flex-col gap-6 items-center md:items-start mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary-text dark:text-primary-text text-center md:text-left">
            Simple Smart{" "}
            <span className="text-primary-btn black:text-primary-btn">
              Surveys
            </span>
          </h1>
          <p className="md:text-lg lg:text-xl max-w-[70%] lg:max-w-[50%] text-secondary-text dark:text-secondary-text ">
            Discover how we empower individuals and organizations to collect,
            analyze, and act on data with ease.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start">
          <Link
            to="/sign-up"
            className="bg-primary-btn black:primary-btn text-white px-5 py-3 rounded-md shadow-md hover:bg-primary-btn-hover transition-colors duration-300 w-[200px] h-[40px] flex items-center justify-center font-bold"
          >
            Get Started
          </Link>

          <Link
            to="/sign-in"
            className="px-5 py-3 rounded-lg border border-[#00B7C1] text-primary-btn dark:text-primary-btn hover:bg-outline-btn-hover transition-colors duration-300 h-[40px] w-[200px] flex items-center justify-center"
          >
            <span className="font-bold ">Create</span>
          </Link>
        </div>
      </div>

      <img
        src="/about-hero.svg"
        alt="About Us Hero"
        className="hidden md:block w-[250px] h-[250px] lg:w-[350px] md:h-[350px]"
      />
    </section>
  );
}

export default AboutHero;
