import AboutHero from "../components/about-us/AboutHero";
import AboutLeader from "../components/about-us/AboutLeader";
import AboutMission from "../components/about-us/AboutMission";
import AboutTeam from "../components/about-us/AboutTeam";
import AboutTrending from "../components/about-us/AboutTrending";
import AboutWorks from "../components/about-us/AboutWorks";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white ">
      <AboutHero />
      <AboutTrending />
      <AboutMission />
      <AboutTeam />
      <AboutWorks />
      <AboutLeader />
    </div>
  );
};

export default About;
