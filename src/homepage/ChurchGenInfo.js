import React from "react";
import "./ChurchGenInfo.css"; // Create a separate CSS file for your styles if you haven't already.

function ChurchGenInfo() {
  return (
    <div className="church-gen-info">
      <div className="upper-text">
        <h2>You'll fit right in</h2>
        <div className="white-underline"></div>
        <p className="italic-text">Join us for an awesome worship experience</p>
      </div>
      <div className="schedule-container">
        <div className="day-container">
          <h3>SUNDAY</h3>
          <ul>
            <li>Youth Service 8:00am - 9:30am</li>
            <li>English Service 9:30am - 11:00am</li>
            <li>Swahili Service 11:30am - 1:00pm</li>
          </ul>
        </div>
        <div className="day-container">
          <h3>TUESDAY</h3>
          <ul>
            <li>Fellowship 7:00pm - 8:00pm</li>
          </ul>
        </div>
        <div className="day-container">
          <h3>THURSDAY</h3>
          <ul>
            <li>Encountering God 7:00pm - 8:00pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChurchGenInfo;
