import React from "react";
import Navbar1 from "../Nav/Navbar1";
import SegmentationLine from "../SegmentationLine";
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
        <h1>The Church is the Best</h1>
        {/* Add other content here */}
        <h2>
          lorem ipsum dolor sit amet, consect
        </h2>
      </div>
    </div>
  );
};

export default Home;
