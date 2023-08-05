import React from "react";
import {
  FaFacebook,
  FaInstagram,
  // FaPhone,
  FaEnvelope,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import "./ContactUs.css";
import Navbar from "../Nav/Navbar.jsx";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p>We are open every day from Monday to Sunday, from 8 AM to 5 PM.</p>
          <div className="contact-icons">
            {/* Phone */}
            <div className="icon-container">
              <a href="tel:+2540101079451">
                <FaPhoneAlt className="icon" />
              </a>
              <span className="icon-label">Phone</span>
            </div>

            {/* Gmail */}
            <div className="icon-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/?view=cm&to=sejokariz@gmail.com"
              >
                <FaEnvelope className="icon" />
              </a>
              <span className="icon-label">Email</span>
            </div>

            {/* Facebook */}
            <div className="icon-container">
              <a
                href="https://web.facebook.com/ackstmonicautawala"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" />
              </a>
              <span className="icon-label">Facebook</span>
            </div>
            {/* Instagram */}
            <div className="icon-container">
              <a
                href="https://instagram.com/ackst.monicautawala?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
              <span className="icon-label">Instagram</span>
            </div>

            {/* Youtube */}
            <div className="icon-container">
              <a
                href="https://www.youtube.com/c/ACKSTMONICAPARISHUTAWALA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icon" />
              </a>
              <span className="icon-label">YouTube</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
