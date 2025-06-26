function AboutLeader() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
        Team <span className="text-[#00B7C1]">Leader</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center  justify-center gap-10">
        <div className=" max-w-[70%]">
          <p className="text-[#00B7C1] font-bold  text2xl md:text-3xl lg:text-4xl text-center pb-3">
            Join the team
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed lg:max-w-[70%] mx-auto text-center">
            We are a team of passionate individuals dedicated to creating the
            best survey experience. Join us in our mission to revolutionize data
            collection.
          </p>
        </div>
        <img
          src="/about-leader.svg"
          alt="Team Leader"
          className="mx-auto mt-6 w-[300px] h-[300px] lg:w-[493px] lg:h-[446px] shadow-sm px-3 py-8 md:px-5 md:py-10 lg:px-6 lg:py-12"
        />
      </div>
    </section>
  );
}

export default AboutLeader;
