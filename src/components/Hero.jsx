import React, { useState } from "react";
import EnquiryForm from "../contact-details/EnquiryForm";
import EnquiryModal from "../contact-details/EnquiryModal";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full px-6">
      <section
        className="relative bg-cover bg-center rounded-xl overflow-hidden flex items-center min-h-[80vh] sm:min-h-[85vh] lg:min-h-[calc(100vh-250px)]"
        style={{ backgroundImage: "url('/logo/amity.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Empowering Education Through Online Learning
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200">
              Join{" "}
              <a
                href="https://vidyarishi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-300 transition"
              >
                Amity University Online
              </a>{" "}
              and pursue globally recognized programs with flexibility,
              world-class faculty, and industry-relevant curriculum.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-[#002147] font-semibold rounded-full px-6 py-3 text-sm md:text-base flex items-center justify-center gap-2 hover:bg-yellow-400 transition"
              >
                <FaDownload />
                Download Brochure
              </button>

              <a
                href="https://vidyarishi.com/amity-university"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-[#002147] font-semibold rounded-full px-6 py-3 text-sm md:text-base text-center hover:bg-yellow-400 transition"
              >
                Explore Courses
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md ">
            <EnquiryForm />
          </div>
        </div>

        {/* Modal */}
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </div>
  );
};

export default Hero;
