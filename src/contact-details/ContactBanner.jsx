import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import EnquiryModal from "./EnquiryModal";

const ContactBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#002147] rounded-3xl overflow-hidden relative flex flex-col justify-center items-center p-8 md:p-16 min-h-[400px]">
        {/* Decorative Gradients */}
        <div className="absolute -top-12 -left-20 w-80 h-60 bg-yellow-400 rounded-full opacity-80 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-yellow-400 rounded-full opacity-80 blur-3xl pointer-events-none"></div>

        {/* Content */}
        <div className="text-center items-center flex flex-col max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Connect with Amity Online University
          </h2>
          <p className="text-gray-200 mb-8 text-base sm:text-lg leading-relaxed">
            Get expert support for your academic and career growth. Our team is
            ready to guide you through enrollment, courses, and personalized
            learning paths.
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4 text-gray-200 text-base sm:text-lg">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✔</span>
              Expert Guidance
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✔</span>
              Flexible Programs
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✔</span>
              Global Recognition
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✔</span>
              Career Support
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✔</span>
              Affordable Fees
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✔</span>
              Interactive Learning
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-16 items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-400 text-[#002147] font-semibold rounded-full px-6 py-3 flex items-center gap-2 hover:bg-yellow-300 transition-shadow shadow-md hover:shadow-lg"
            >
              <IoCall className="text-xl" />
              Call Now
            </button>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ContactBanner;
