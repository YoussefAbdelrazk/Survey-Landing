const TrendingData = [
  {
    id: 1,
    action: "$45,345,654",
    description: "Total Revenue",
  },
  {
    id: 2,
    action: "$1,234,567",
    description: "Total Users",
  },
  {
    id: 3,
    action: "$12,345",
    description: "New Signups",
  },
];

function AboutTrending() {
  return (
    <section
      className="w-full max-w-4xl  px-4 py-8"
    >
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-start ">
        Trending <span className="text-primary-btn dark:text-primary-btn">Action</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {TrendingData.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 bg-white dark:bg-black rounded-lg px-6 py-4 shadow-sm w-full md:w-[30%]">
            <span className="text-xl md:text-2xl font-semibold text-primary-btn dark:text-primary-btn">
              {item.action}
            </span>
            <span className="text-disabled-btn dark:text-disabled-btn text-base md:text-lg font-medium">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTrending;
