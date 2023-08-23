import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./mainnav.css";
import churchLogo from "../Assets/churchlogo2023.png";

function Navbar() {
  const navRef = useRef();
  const [navOpen, setNavOpen] = useState(false);

  const showNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="fixed-nav">
      <div className="logo">
        <img src={churchLogo} alt="Logo" />
      </div>
      <nav ref={navRef} className={navOpen ? "responsive_nav" : ""}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/events">Events</Link>
        </div>
        <div>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <Link to="/contactUs">ContactUs</Link>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
