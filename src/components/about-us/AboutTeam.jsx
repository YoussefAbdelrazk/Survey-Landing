import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const teamData = [
  {
    id: 1,
    title: "Jay Choi",
    position: "CEO & Founder",
    image: "/about-team-1.png",
  },
  { id: 2, title: "Sarah Lee", position: "CTO", image: "/about-team-2.png" },
  { id: 3, title: "Michael Kim", position: "CFO", image: "/about-team-3.png" },
  { id: 4, title: "Emily Park", position: "COO", image: "/about-team-4.png" },
  { id: 5, title: "David Choi", position: "CMO", image: "/about-team-5.png" },
  {
    id: 6,
    title: "Lisa Kim",
    position: "Head of Design",
    image: "/about-team-6.png",
  },
  {
    id: 7,
    title: "John Doe",
    position: "Lead Developer",
    image: "/about-team-7.png",
  },
  {
    id: 8,
    title: "Jane Smith",
    position: "Marketing Manager",
    image: "/about-team-8.png",
  },
];

function AboutTeam() {
  return (
    <section className="px-6 py-12">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6">
        Our leadership <span className="text-[#00B7C1]">team</span>
      </h2>

      {/* Subheading + CTA */}
      <div className="flex justify-between items-center mb-8">
        <h4 className="text-xl md:text-2xl font-bold text-gray-800">
          Leader<span className="text-[#00B7C1]">ship</span>
        </h4>

        <Link
          to="/team"
          className="flex items-center gap-2  hover:underline font-medium"
        >
          View All <FaLongArrowAltRight />
        </Link>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamData.map((member) => (
          <div
            key={member.id}
            className=" bg-white shadow-md rounded-xl p-6 flex flex-col gap-3 items-center text-center"
          >
            <img
              src={member.image}
              alt={member.title}
              className="w-32 h-32 rounded-full  object-cover"
            />
            <h3 className="text-xl font-semibold text-[#00B7C1]">
              {member.title}
            </h3>
            <p className="text-gray-600">{member.position}</p>
            <Link
              to="/"
              className="w-[200px] h-[40px] bg-[#00B7C1] text-white flex items-center justify-center rounded-lg  hover:bg-[#00a3b0] font-bold"
            >
              join team
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeam;
