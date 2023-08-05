import React, { useState } from "react";
import Navbar from "../Nav/Navbar.jsx";
import "./events.css";
import Footer from "../Footer/Footer";

const Events = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="events-container">
        <h1>Welcome to the Events Page</h1>
        <p>Click on a date to see the events of that day.</p>
        <div className="calendar-container">
          {isLoading && <div className="loading-spinner"></div>}
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FNairobi&showTitle=1&showNav=1&src=YWIzNzYwMjYxODNlNzY0MmQ1Njc5ZjZlOGNlNGQ5ZmZjMjIyNmQ2ZmE3MzBiY2QwMmMxOWM2ZDJhNjQ5ZGY5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
            title="Church Events Calendar"
            className={`calendar-iframe ${isLoading ? "hidden" : ""}`}
            onLoad={handleIframeLoad}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
