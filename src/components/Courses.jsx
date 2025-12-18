import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

const courses = {
  UG: [
    { name: "B.Com", img: "/courses/bcom.png", link: "https://vidyarishi.com/amity-university/bcom" },
    { name: "BA", img: "/courses/ba.png", link: "https://vidyarishi.com/amity-university/ba" },
    { name: "BCA", img: "/courses/bca.png", link: "https://vidyarishi.com/amity-university/bca" },
    { name: "BBA", img: "/courses/bba.png", link: "https://vidyarishi.com/amity-university/bba" },
  ],
  PG: [
    { name: "MBA", img: "/courses/mba.png", link: "https://vidyarishi.com/amity-university/mba" },
    { name: "MCA", img: "/courses/mca.png", link: "https://vidyarishi.com/amity-university/mca" },
    { name: "MA", img: "/courses/ma.png", link: "https://vidyarishi.com/amity-university/ma" },
    { name: "M.Com", img: "/courses/mcom.png", link: "https://vidyarishi.com/amity-university/mcom" },
    { name: "M.Sc", img: "/courses/msc.png", link: "https://vidyarishi.com/amity-university/msc" },
  ],
};

const Courses = () => {
  const [selected, setSelected] = useState("UG");

  return (
    <section id="course" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-[#002147]">
          Explore Our Online Degree Programs
        </h3>

        {/* UG/PG Filter Buttons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={() => setSelected("UG")}
            className={`px-6 py-3 rounded-lg border font-semibold transition duration-300 ${
              selected === "UG"
                ? "bg-[#002147] text-white border-[#002147]"
                : "bg-white text-[#002147] border-gray-300 hover:border-[#002147]"
            }`}
          >
            UG PROGRAM
          </button>
          <button
            onClick={() => setSelected("PG")}
            className={`px-6 py-3 rounded-lg border font-semibold transition duration-300 ${
              selected === "PG"
                ? "bg-[#002147] text-white border-[#002147]"
                : "bg-white text-[#002147] border-gray-300 hover:border-[#002147]"
            }`}
          >
            PG PROGRAM
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses[selected].map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              {/* Course Image */}
              <div className="w-full h-48 mb-5 overflow-hidden rounded-lg">
                <img
                  src={course.img}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Course Title */}
              <h4 className="text-xl font-semibold mb-4 text-[#002147]">{course.name}</h4>

              {/* Course Description */}
              <p className="text-gray-600 text-sm mb-6 px-2">
                Enroll in Amity’s {course.name} program and enhance your career with flexible, industry-ready learning.
              </p>

              {/* Learn More Button */}
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#002147] text-white px-5 py-2 rounded-full hover:bg-[#1a3a6d] transition-colors duration-300"
              >
                <span>Learn More</span>
                <GoArrowRight className="text-lg" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;