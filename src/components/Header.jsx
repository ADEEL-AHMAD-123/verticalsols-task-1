import React, { useState } from "react";
import "../styles/header.scss";
import { FaEnvelope, FaAngleDown } from "react-icons/fa";
import logo from "../assets/Logo.png";
import Navbar from "./Navbar";

const Header = () => {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="topbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="right-items">
          <div className="language-select">
            ENG <FaAngleDown />
          </div>
          <div className="contact-email">
            <FaEnvelope /> INFO@ALTAI.SA
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
