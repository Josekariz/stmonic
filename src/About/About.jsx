// AboutUs.js
import React from "react";
import Navbar from "../Nav/Navbar.jsx";
import img from "../homepage/hills.jpg";
import "./AboutUs.css"; // We'll create this CSS file in the next step
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us">
        <div className="about-us-content">
          <div className="about-us-text">
            <h2>stMonica</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit neque in tellus volutpat, eu egestas ipsum luctus. Proin
              dictum felis vel semper semper.
            </p>
          </div>
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about-us-content">
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
          <div className="about-us-text">
            <h2>Our Mission</h2>
            <p>
              Nunc non tellus facilisis, pharetra nunc eget, facilisis ex.
              Integer sit amet lacus eu metus commodo facilisis non vitae velit.
            </p>
          </div>
        </div>
        <div className="about-us-content">
          <div className="about-us-text">
            <h2>We have a place for everyone in the church subgroups</h2>
            <p>
              Phasellus eu sagittis purus. Aliquam a nisi velit. Integer eu
              dolor metus. Ut lacinia ipsum nec justo ultricies, eget facilisis
              sapien luctus.
            </p>
          </div>
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about-us-content">
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
          <div className="about-us-text">
            <h2>fellowships</h2>
            <p>
              Duis sit amet lacus nec turpis eleifend feugiat vel ac ex. Etiam
              rhoncus erat eu tellus porttitor volutpat.
            </p>
          </div>
        </div>
        <div className="about-us-content">
          <div className="about-us-text">
            <h2>KAMA</h2>
            <p>
              Vivamus at ex in libero egestas tincidunt. Nulla sit amet felis ut
              nunc pellentesque congue. Fusce sagittis nunc nunc, eget ultricies
              arcu tincidunt eget.
            </p>
          </div>
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about-us-content">
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
          <div className="about-us-text">
            <h2>MOthers union</h2>
            <p>
              Duis sit amet lacus nec turpis eleifend feugiat vel ac ex. Etiam
              rhoncus erat eu tellus porttitor volutpat.
            </p>
          </div>
        </div>
        <div className="about-us-content">
          <div className="about-us-text">
            <h2>BLAZE youth</h2>
            <p>
              Vivamus at ex in libero egestas tincidunt. Nulla sit amet felis ut
              nunc pellentesque congue. Fusce sagittis nunc nunc, eget ultricies
              arcu tincidunt eget.
            </p>
          </div>
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="centered-text">
        <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "24px" }}>
          All are welcome and loved here 😊
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
