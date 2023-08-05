import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./mainnav.css";
import churchLogo from "../Assets/churchlogo2023.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="fixed-nav">
      <div className="logo">
        <img src={churchLogo} alt="Logo" />
      </div>
      <nav ref={navRef}>
        <a href="/">
          <Link to="/">Home</Link>
        </a>
        <a href="/events">
        <Link to="/events">Events</Link>
        </a>
        <a href="/about">
        <Link to="/about">About Us</Link>
          
        </a>
        <a href="/contactUs">
          
          <Link to="/contactUs">ContactUs</Link>
        </a>
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
