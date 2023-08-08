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
      <div className="video-overlay"></div>
      {!videoError ? (
        <video src={vid} autoPlay muted loop onError={handleVideoError} />
      ) : null}
      <div className="text-container">
        <h2 className="churchName">ACK St Monica Utawala</h2>
        <p className="verse-text">Amos 5:14 - "Seek good, not evil, that you may live. Then the Lord God Almighty will be with you, just as you say he is."</p>
      </div>
    </div>
  );
};

export default VideoBackground;
