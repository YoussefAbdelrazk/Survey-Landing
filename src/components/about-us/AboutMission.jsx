import React from "react";
import { Link } from "react-router-dom";

function AboutMission() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-10 px-6">
      {/* Left side images */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[300px] md:w-[400px]">
          <img
            src="/about-mission-rectangle.png"
            alt="Mission Background"
            className="w-full h-auto z-10"
          />
          <img
            src="/about-mission.png"
            alt="Mission Accent"
            className="absolute bottom-4 w-[90%] z-20 top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 "
          />
        </div>
      </div>

      {/* Right side text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6">
        <h2 className="text-2xl md:text-3xl  text-gray-800  font-medium">
          Our <span className="text-[#00B7C1]">mission</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed lg:max-w-[70%]">
          At Typeform, we give forms a better look and feel—so our customers can
          get more out of them. Historically, forms haven't been great, but
          businesses need them and people can’t avoid them.
        </p>
        <Link
          to="/mood"
          className="flex justify-center items-center font-bold bg-[#00B7C1]  text-white transition-all py-3 px-5 h-[60px] w-[230px] rounded-lg"
        >
          End our Mood
        </Link>
      </div>
    </section>
  );
}

export default AboutMission;
