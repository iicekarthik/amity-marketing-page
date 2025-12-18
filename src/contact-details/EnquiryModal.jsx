import React, { useEffect } from "react";
import EnquiryForm from "./EnquiryForm";

const EnquiryModal = ({ isOpen, onClose }) => {
  // Stop background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose} // close when clicking outside the modal
    >
      <div
        className="relative w-full max-w-lg rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <EnquiryForm onClose={onClose} showClose={false} />
      </div>
    </div>
  );
};

export default EnquiryModal;
