import React from "react";

const recognitions = [
  {
    title: "UGC Recognized",
    desc: "Approved by the University Grants Commission (UGC) for offering online degree programs.",
    logo: "/img/ugc.png",
  },
  {
    title: "NAAC Accredited",
    desc: "Amity is accredited by NAAC with an ‘A+’ grade, reflecting academic excellence.",
    logo: "/img/naac.png",
  },
  {
    title: "AICTE Approved",
    desc: "Amity University Online is approved by the All India Council for Technical Education (AICTE).",
    logo: "/img/aicte.png",
  },
  {
    title: "WES Accredited",
    desc: "Recognized by World Education Services (WES) for global acceptance of degrees.",
    logo: "/img/wes.png",
  },
  {
    title: "AIU Recognized",
    desc: "Degrees awarded by Amity University Online are recognized by the Association of Indian Universities (AIU), ensuring global acceptability.",
    logo: "/img/aiu.png",
  },
  {
    title: "NIRF Ranked",
    desc: "Amity University is ranked among the top universities in India according to the National Institutional Ranking Framework (NIRF).",
    logo: "/img/nirf.png",
  },
];

const Accreditations = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-[#002147]">
          Accreditations & Recognitions
        </h3>

        {/* Recognition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recognitions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 shadow-md flex flex-col items-center text-center"
            >
              {/* Logo */}
              <img
                src={item.logo}
                alt={item.title}
                className="h-28 w-auto mb-4 object-contain"
                loading="lazy"
              />

              {/* Title */}
              <h4 className="text-lg font-semibold mb-3 text-[#002147]">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;