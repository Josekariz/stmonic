// VideoBackground.js
import React, { useState } from "react";
import vid from "./background vid.mp4";
import "./VideoBackground.css"; // Import the VideoBackground.css file

const VideoBackground = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="video-container">
      {!videoError ? (
        <video
          src={vid}
          autoPlay
          muted
          loop
          onError={handleVideoError}
        />
      ) : null}
    </div>
  );
};

export default VideoBackground;
