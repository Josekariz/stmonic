// ContactUs.js
import React from "react";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import "./ContactUs.css";
import Navbar from "../Nav/Navbar.jsx";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <>

    <Navbar/>
    <div className="contact-container">
    <div className="contact-card">
      <h2>Contact Us</h2>
      <p>We are open every day from Monday to Sunday, from 8 AM to 5 PM.</p>
      <div className="contact-icons">
        <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="tel:+1234567890">
          <FaPhone className="icon" />
        </a>
        <a href="mailto:info@example.com">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://www.youtube.com/youryoutubechannel" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
        <a href="tel:+0987654321">
          <FaPhoneAlt className="icon" />
        </a>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
