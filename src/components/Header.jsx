import React, { useState } from "react";
import EnquiryModal from "../contact-details/EnquiryModal";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-6 md:p-6">
      <header className="bg-[#002147] text-white shadow-md w-full rounded-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-12 py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo/amitylogo.png"
              alt="Amity University Logo"
              className="h-10 md:h-12"
            />
          </div>

          {/* Desktop CTA */}
          <nav className="hidden md:flex">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFCC00] text-[#002147] font-semibold rounded-full px-6 py-3 text-sm flex items-center gap-2 hover:bg-yellow-400 transition duration-300"
            >
              <span>Enquire Now</span>
              <GoArrowRight className="text-lg" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none hover:text-yellow-300 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#002147] px-6 pb-4 space-y-4 animate-slideDown">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full bg-[#FFCC00] text-[#002147] font-semibold rounded-full px-6 py-3 text-sm flex items-center justify-center gap-2 hover:bg-yellow-400 transition duration-300"
            >
              <span>Enquire Now</span>
              <GoArrowRight className="text-lg" />
            </button>
          </div>
        )}
      </header>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Header;