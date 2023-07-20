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
      </div>
    </div>
  );
};

export default Home;
