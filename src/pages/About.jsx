import AboutHero from "../components/about-us/AboutHero";
import AboutLeader from "../components/about-us/AboutLeader";
import AboutMission from "../components/about-us/AboutMission";
import AboutTeam from "../components/about-us/AboutTeam";
import AboutTrending from "../components/about-us/AboutTrending";
import AboutWorks from "../components/about-us/AboutWorks";

const About = () => {
  return (
    <div className="flex flex-col  ">
      <AboutHero />
      <div className="bg-gray-50 flex flex-col items-center justify-center w-full px-4 md:px-16 py-12 gap-8">
        <AboutTrending />
        <AboutMission />
        <AboutTeam />
        <AboutWorks />
        <AboutLeader />
      </div>
    </div>
  );
};

export default About;
