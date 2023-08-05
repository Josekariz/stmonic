import React from "react";
import Navbar from "../Nav/Navbar.jsx";
import img from "../homepage/hills.jpg";
import "./AboutUs.css";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us">
        <div className="about-us-content-1">
          <div className="about-us-text">
            <h2>st Monica Church Utawala</h2>
            <p className="about-us-text-content">
              As an Anglican church, we are deeply rooted in the teachings of
              God’s word and strive to uplift the lives of our community. We
              openly preach the truth of God’s word and serve as a shining
              beacon of hope and guidance, not only to Kenya but to the world at
              large. Our mission is to spread the love and light of God to all
              who seek it, and to provide a welcoming and supportive community
              for all who wish to join us on our journey of faith.
            </p>
          </div>
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="about-us-content-2">
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

        {/* more */}
        <div className="about-us-content-1">
          <div className="about-us-text">
            <h2>Fellowships</h2>
            <p className="about-us-text-content">
              As an Anglican church, we are deeply rooted in the teachings of
              God’s word and strive to uplift the lives of our community. We
              openly preach the truth of God’s word and serve as a shining
              beacon of hope and guidance, not only to Kenya but to the world at
              large. Our mission is to spread the love and light of God to all
              who seek it, and to provide a welcoming and supportive community
              for all who wish to join us on our journey of faith.
            </p>
          </div>
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="about-us-content-2">
          <div className="about-us-text">
            <h2>Blaze Youth.</h2>
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

        {/* more  */}

        <div className="about-us-content-1">
          <div className="about-us-text">
            <h2>KAMA.</h2>
            <p className="about-us-text-content">Mens associatio</p>
          </div>
          <div className="about-us-image">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="about-us-content-2">
          <div className="about-us-text">
            <h2>Mothers Union. </h2>
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
