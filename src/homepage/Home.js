import React, { useState } from "react";
import Navbar1 from "../Nav/Navbar1";
import hillsImage from "./hills.jpg";
import vid from "./background vid.mp4";
import "./home.css"; // Import the home.css file

const Home = () => {
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <Navbar1 />
      <div className="video-container">
        {!videoError ? (
          <video
            src={vid}
            autoPlay
            muted
            loop
            onError={handleVideoError}
          />
        ) : (
          <img
            src={hillsImage}
            alt=""
            onError={handleImageError}
          />
        )}
      </div>
      <h1>Welcome to the Home Page</h1>
    </>
  );
};

export default Home;
