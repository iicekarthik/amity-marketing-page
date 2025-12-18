import React from "react";

const AmityStatsAndHighlights = () => {
  const highlights = [
    {
      title: "Emerging Specializations",
      desc:
        "New-age specializations shaping tomorrow's business landscape.",
      img: "/highlights/specialization.png",
      alt: "Emerging Specializations",
    },
    {
      title: "Robust Learning Model",
      desc:
        "550+ hours of video lectures to help you maximize your learning.",
      img: "/highlights/learningmodel.png",
      alt: "Robust Learning Model",
    },
    {
      title: "Personalized Learning",
      desc:
        "Personalized learning through unique option of choice based credit system.",
      img: "/highlights/learning.png",
      alt: "Personalized Learning",
    },
    {
      title: "Real World Projects",
      desc:
        "Real world projects & case studies to help you succeed in your domain.",
      img: "/highlights/project.png",
      alt: "Real World Projects",
    },
  ];

  return (
    <section className="w-full px-6 py-20 bg-gray-50">
      <div className="mx-auto space-y-12">

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="bg-[#FFCC00] text-[#002147] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl md:text-5xl font-extrabold">30+</div>
            <div className="mt-2 font-medium text-sm md:text-base">Years Of Excellence</div>
          </div>
          <div className="bg-[#28a745] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-white text-4xl md:text-5xl font-extrabold">60+</div>
            <div className="mt-2 text-sm md:text-base text-[#002147] font-medium">Programs & Specializations</div>
          </div>
          <div className="bg-[#007bff] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-white text-4xl md:text-5xl font-extrabold">1.60 Lac+</div>
            <div className="mt-2 text-sm md:text-base text-[#002147] font-medium">Learners</div>
          </div>
          <div className="bg-[#e83e8c] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-white text-4xl md:text-5xl font-extrabold">3.5L+</div>
            <div className="mt-2 text-sm md:text-base text-[#002147] font-medium">Strong Alumni Network</div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-[#0f2b54]">
              Program Highlights and Advantages
            </h2>
            <p className="text-gray-600  md:text-right text-base">
              Discover our Online Degree Programs and begin an exciting educational journey.
            </p>
          </div>

          {/* Divider */}
          <hr className="mt-6 mb-8 border-gray-200" />

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h, idx) => (
              <div
                key={h.alt}
                className={`flex flex-col items-center text-center px-6 py-4 ${
                  idx > 0 ? "md:border-l md:border-gray-200" : ""
                }`}
              >
                <img
                  src={h.img}
                  alt={h.alt}
                  className="h-12 w-12 mb-3 object-contain"
                  loading="lazy"
                />
                <h3 className="text-[#0f2b54] font-bold text-lg mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm md:text-base">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AmityStatsAndHighlights;