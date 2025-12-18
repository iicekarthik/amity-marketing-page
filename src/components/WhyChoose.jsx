import React from "react";
import { FiMapPin, FiSmartphone } from "react-icons/fi";
import {
  FaRobot,
  FaCertificate,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

const cards = [
  {
    title: "WASC Accreditation (USA)",
    desc: "Recognised by the Western Association of Schools and Colleges (WASC, USA), Amity Online aligns with world-class education benchmarks.",
    img: "/img/wasc.png",
    alt: "WASC",
  },
  {
    title: "WES Recognition",
    desc: "Amity Online degrees are accepted by WES in Canada and the USA, opening global opportunities for higher studies and careers.",
    img: "/img/wes.png",
    alt: "WES",
  },
  {
    title: "QS Ranked Online MBA",
    desc: "Amity’s Online MBA is among the top programs in Asia Pacific as per QS rankings, recognised for academic strength and learner success.",
    img: "/img/qs.png",
    alt: "QS",
  },
  {
    title: "QAA (UK) Accreditation",
    desc: "Accredited by the Quality Assurance Agency (QAA), UK, ensuring globally recognised and trusted academic quality.",
    img: "/img/qaa.png",
    alt: "QAA",
  },
  {
    title: "Times Higher Education Rankings",
    desc: "Featured in global Times Higher Education rankings for graduate employability and academic reputation.",
    img: "/img/the.png",
    alt: "Times Higher Education",
  },
  {
    title: "Pan-India Campus Access",
    desc: "Students can access Amity campuses across India for orientations, meetups, and convocation ceremonies.",
    icon: <FiMapPin className="text-[#002147] text-4xl" />,
  },
  {
    title: "Amigo: Learning On-the-Go",
    desc: "A smart learning app with live classes, study materials, and progress tracking anytime, anywhere.",
    icon: <FiSmartphone className="text-[#002147] text-4xl" />,
  },
  {
    title: "Prof. Ami: AI-Powered Tutor",
    desc: "Get instant academic support with Prof. Ami, an AI-driven learning assistant for doubt-solving and guidance.",
    icon: <FaRobot className="text-[#002147] text-4xl" />,
  },
  {
    title: "Industry Certifications",
    desc: "Earn valuable certifications from leading industry partners to strengthen your professional profile.",
    icon: <FaCertificate className="text-[#002147] text-4xl" />,
  },
  {
    title: "Internship Opportunities",
    desc: "Access curated internships with reputed companies to gain hands-on experience and career exposure.",
    icon: <MdWork className="text-[#002147] text-4xl" />,
  },
  {
    title: "AI-Powered Career Platform",
    desc: "A digital career platform with mock interviews, resume tools, and job search assistance to boost employability.",
    icon: <FaUserGraduate className="text-[#002147] text-4xl" />,
  },
  {
    title: "beSocial App for Campus Life",
    desc: "A vibrant online community to network, join clubs, attend events, and connect with peers worldwide.",
    icon: <FaUsers className="text-[#002147] text-4xl" />,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002147] text-center mb-12">
          Why Choose Amity University Online?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-left"
            >
              {/* Image or Icon with consistent size */}
              <div className="h-16 w-16 mb-4 flex items-center justify-center ">
                {card.img ? (
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="h-16 w-16  object-contain"
                    loading="lazy"
                  />
                ) : (
                  card.icon
                )}
              </div>

              <h3 className="font-semibold text-lg text-[#002147] mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
