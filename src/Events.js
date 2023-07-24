import React from "react";
import Navbar1 from "./Nav/Navbar1";
import "./events.css"; // Import the events.css file

const Events = () => {
  return (
    <>
      <Navbar1 />
      <h1>Welcome to the Events Page</h1>
      <div className="calendar-container">
        <iframe
          
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FNairobi&src=c2Vqb2thcml6ekBnbWFpbC5jb20&src=YWIzNzYwMjYxODNlNzY0MmQ1Njc5ZjZlOGNlNGQ5ZmZjMjIyNmQ2ZmE3MzBiY2QwMmMxOWM2ZDJhNjQ5ZGY5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&color=%23AD1457&color=%2333B679&color=%230B8043&color=%230B8043"
          title="Church Events Calendar"
          className="calendar-iframe" // Add the calendar-iframe class
          loading="lazy" // Add loading="lazy" for better page loading performance
        ></iframe>
      </div>
    </>
  );
};

export default Events;
