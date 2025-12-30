import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { LiaHeadsetSolid } from "react-icons/lia";

const StaticFooter = ({ screenSize, onEnquiryClick }) => {
  const [isSticky, setIsSticky] = useState(false);

  const isLargeScreen = ["xxl", "xl", "lg"].includes(screenSize);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isLargeScreen ? 400 : 700;
      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLargeScreen]);

  const navItems = [
    {
      name: "Enquiry",
      icon: <LiaHeadsetSolid size={26} />,
      isButton: true,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      link: "https://wa.me/919619535535",
    },
    {
      name: "Call",
      icon: <IoCallOutline size={24} />,
      link: "tel:+919619535535",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 111,
        padding: "10px 0",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        boxShadow: isSticky ? "0px -2px 10px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          minWidth: "280px",
          padding: "0 20px",
          margin: 0,
          gap: "5px",
        }}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            style={{
              fontSize: "12px",
              cursor: "pointer",
              borderRadius: "5px",
              textAlign: "center",
              minWidth: "60px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.isButton ? (
              <button
                onClick={onEnquiryClick}
                style={{
                  border: "none",
                  background: "transparent",
                  fontWeight: "bold",
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3px",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: "18px" }}>{item.icon}</div>
                <div>{item.name}</div>
              </button>
            ) : (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "12px",
                  color: "#000",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <div style={{ fontSize: "18px" }}>{item.icon}</div>
                <div>{item.name}</div>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaticFooter;
