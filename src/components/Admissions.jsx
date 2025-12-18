import React from "react";

const Admissions = () => {
  return (
    <section id="admissions" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-6">
          Admission Process
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Getting started with{" "}
          <a
            href="https://vidyarishi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#002147] underline hover:text-yellow-500 transition"
          >
            Amity University Online
          </a>{" "}
          is simple. Follow these easy steps to secure your admission and begin
          your learning journey.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center">
            <div className="text-[#FFCC00] text-3xl font-bold mb-4">01</div>
            <h3 className="font-semibold text-lg mb-2 text-[#002147]">
              Register Online
            </h3>
            <p className="text-gray-600 text-sm">
              Sign up on the admission portal with your basic details to create
              your student account.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center">
            <div className="text-[#FFCC00] text-3xl font-bold mb-4">02</div>
            <h3 className="font-semibold text-lg mb-2 text-[#002147]">
              Fill Application
            </h3>
            <p className="text-gray-600 text-sm">
              Complete the online application form with academic and personal
              information.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center">
            <div className="text-[#FFCC00] text-3xl font-bold mb-4">03</div>
            <h3 className="font-semibold text-lg mb-2 text-[#002147]">
              Upload Documents
            </h3>
            <p className="text-gray-600 text-sm">
              Submit scanned copies of required documents such as mark sheets,
              ID proof, and photographs.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center">
            <div className="text-[#FFCC00] text-3xl font-bold mb-4">04</div>
            <h3 className="font-semibold text-lg mb-2 text-[#002147]">
              Pay Fees & Confirm
            </h3>
            <p className="text-gray-600 text-sm">
              Pay the admission fees online and receive your confirmation along
              with student login details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
