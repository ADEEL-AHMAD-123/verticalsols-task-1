import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "LIVE SCORES | UPDATES", path: "/live-scores" },
  { name: "TEAM", path: "/team" },
  { name: "TICKETS", path: "/tickets" },
  { name: "HISTORY & ACHIEVEMENTS", path: "/history" },
  { name: "STATS & ANALYTICS", path: "/stats" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link.name);
    navigate(link.path);
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className={`nav-link ${activeLink === link.name ? "active" : ""}`}
              onClick={() => handleLinkClick(link)}
            >
              {link.name}
            </div>
          ))}
        </div>
        {!isOpen && <div className="active-nav-link">{activeLink}</div>}
      </div>
    </nav>
  );
};

export default Navbar;
