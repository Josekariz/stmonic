import React from "react";
import Navbar1 from "../Nav/Navbar1";
import SegmentationLine from "../SegmentationLine";
import ChurchGenInfo from "./ChurchGenInfo";
import "./home.css"; // Import the home.css file
import VideoBackground from "./VideoBackground.js"; // Import the VideoBackground component

const Home = () => {
  return (
    <div className="home-container">
      <Navbar1 />

      <div className="video-container">
        <VideoBackground /> {/* Use the VideoBackground component */}
      </div>
      <div className="content-container">
        <SegmentationLine/>
        <div className="church-gen-info">
         <ChurchGenInfo/>
        </div>
        <SegmentationLine/>
      </div>
      <div className= "location-info">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8183389784645!2d36.97017999999999!3d-1.2828210999999914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6ca47fb1492b%3A0xe05771a17fbc9028!2sACK%20St%20Monica%20Parish%20Utawala!5e0!3m2!1sen!2sus!4v1689942417164!5m2!1sen!2sus"
        width="600"
        height="450"
        title="Church Location"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};

export default Home;
