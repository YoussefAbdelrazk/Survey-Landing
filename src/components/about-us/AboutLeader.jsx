import { Link } from "react-router-dom";

function AboutLeader() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-center mb-12">
        Team{" "}
        <span className="text-primary-btn dark:text-primary-btn">Leader</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center  justify-center gap-10 ">
        <div className=" max-w-[70%] flex flex-col  items-center gap-5">
          <h3 className="text-primary-btn dark:text-primary-btn font-bold  text2xl md:text-3xl lg:text-4xl text-center ">
            Join the team
          </h3>
          <p className="text-secondary-text dark:secondary-text text-base md:text-lg leading-relaxed lg:max-w-[70%] mx-auto text-center lg:text-left">
            We are a team of passionate individuals dedicated to creating the
            best survey experience. Join us in our mission to revolutionize data
            collection.
          </p>
          <Link
            to="/"
            className="w-[230px] h-[60px] bg-primary-btn text-white flex items-center justify-center rounded-lg  hover:bg-primary-btn-hover font-bold"
          >
            Browse Open Roles
          </Link>
        </div>
        <img
          src="/about-leader.svg"
          alt="Team Leader"
          className=" w-full md:w-[350px] md:h-[350px] lg:w-[493px] lg:h-[446px] shadow-sm "
        />
      </div>
    </section>
  );
}

export default AboutLeader;
