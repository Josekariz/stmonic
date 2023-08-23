import React, { useState } from "react";
import Navbar from "../Nav/Navbar";
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
        <h1 className="welcome-text">Welcome to Events Page</h1>
        <p className="click-text">Click a date to see the events.</p>
        <div className="calendar-container">
          {isLoading && <div className="loading-spinner"></div>}
          <iframe
            // add link to the iframe of the calendar you want to share here
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FNairobi&showPrint=0&showTabs=0&showCalendars=1&showTz=0&src=YWIzNzYwMjYxODNlNzY0MmQ1Njc5ZjZlOGNlNGQ5ZmZjMjIyNmQ2ZmE3MzBiY2QwMmMxOWM2ZDJhNjQ5ZGY5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23AD1457&color=%230B8043"
            title="Events Calendar"
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
