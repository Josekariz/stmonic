import React from "react";
import Footer from "../Footer/Footer";
import Navbar1 from "../Nav/Navbar";
import SegmentationLine from "../Segmentation/SegmentationLine";

import ChurchGenInfo from "./ChurchGenInfo";
import "./home.css";
import img from "./hills.jpg";
import VideoBackground from "./VideoBackground";
import TestimonialSlider from "./Testimonials";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar1 />

      {/* BAKCGROUND VIDEO */}

      <div className="video-container">
        <VideoBackground />
      </div>
      <SegmentationLine />

      {/* SIMPLE ABOUT SECTION  */}

      <div className="simple-about">
        <div className="card-container">
          <div className="card-image">
            {/* Replace 'YOUR_IMAGE_URL' with the actual URL of the image */}
            <img src={img} alt="" />
          </div>
          <div className="card-content">
            <div className="purple-box">
              <p>
                St. Monica is a wonderful place to grow and learn, and be with
                people and socialize. Our motto is having a home for anyone.
              </p>
              <p>Amos 5:14</p>
            </div>
          </div>
        </div>
      </div>
      <SegmentationLine />

      {/* ORDER OF SERVICE SECTION */}
      <div className="content-container">
        <div className="intro-text">
          <p>Order Of Service.</p>
        </div>
        <div className="church-gen-info">
          <ChurchGenInfo />
        </div>
      </div>
      <SegmentationLine />


      {/* testimonial slider */}
      <div>
        <TestimonialSlider />
      </div>
      <SegmentationLine />
      <div className="location-container">
        <p className="location-text">We are located here</p>
        <span role="img" aria-label="Location Pin" className="location-pin">
          📍
        </span>
      </div>

      <div className="location-info">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8183389784645!2d36.97017999999999!3d-1.2828210999999914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6ca47fb1492b%3A0xe05771a17fbc9028!2sACK%20St%20Monica%20Parish%20Utawala!5e0!3m2!1sen!2sus!4v1689942417164!5m2!1sen!2sus"
          width="600"
          height="450"
          title="Church Location"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <SegmentationLine />

      {/* FOOTER */}

      <Footer />
    </div>
  );
};

export default Home;
