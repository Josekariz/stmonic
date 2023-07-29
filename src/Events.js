import React, { useState } from "react";
import Navbar1 from "./Nav/Navbar1";
import "./events.css"; // Import the events.css file

const Events = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false); // Set isLoading to false once the iframe has loaded
  };

  return (
    <>
      <Navbar1 />
      <h1>Welcome to the Events Page</h1>
      <div className="calendar-container">
        {isLoading && <div className="loading-spinner"></div>}
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FNairobi&showTitle=1&showNav=1&src=YWIzNzYwMjYxODNlNzY0MmQ1Njc5ZjZlOGNlNGQ5ZmZjMjIyNmQ2ZmE3MzBiY2QwMmMxOWM2ZDJhNjQ5ZGY5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
          title="Church Events Calendar"
          className={`calendar-iframe ${isLoading ? "hidden" : ""}`} // Hide the iframe when loading
          onLoad={handleIframeLoad} // Call handleIframeLoad once the iframe has loaded
          loading="lazy" // Add loading="lazy" for better page loading performance
        ></iframe>
      </div>
    </>
  );
};

export default Events;
