import React from "react";

const testimonials = [
  {
    name: "Ajimsha Puthur Abdul Hameed",
    course: "MBA, Student",
    text: "I'm Ajimsha from Oman, and completing my MBA from Amity Online was an incredible journey. Despite initial COVID concerns, the transition was seamless with excellent support. I'm proud to have referred two friends from Oman too.",
    img: "/placement/s1.webp",
  },
  {
    name: "Himanshu Chhabra",
    course: "BBA, Student",
    text: "Studying at Amity Online has been transformative. The flexibility and global exposure prepared me for my career journey.",
    img: "/placement/s2.webp",
  },
];

const StudentTestimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#002147] mb-4">
          Hear From Our Students and Their Achievements
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-base md:text-lg">
          Discover how our students and alumni have transformed their careers with Amity Online’s supportive learning environment.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-28 h-28 mb-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full rounded-full object-cover border-4 border-[#FFCC00] shadow-sm"
                />
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 text-sm md:text-base leading-relaxed">
                “{t.text}”
              </p>

              {/* Name and Course */}
              <div>
                <h4 className="font-semibold text-lg text-[#002147] mb-1">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
