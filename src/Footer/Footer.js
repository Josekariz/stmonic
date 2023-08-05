import React from "react";
import {
  FaFacebook,
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
        <a href="mailto:example@gmail.com">
          <FaEnvelope />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
          <FaYoutube />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/ackst.monicautawala?igshid=MzRlODBiNWFlZA=="
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/blaze">Blaze</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="footer-contact">
        <FaPhoneAlt />
        <div className="contact-numbers">
          <p>0712345678</p>
          <p>0712345678</p>
        </div>
      </div>
      <hr className="footer-line" />
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} ACK St Monica - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
