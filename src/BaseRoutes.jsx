import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./homepage/Home.jsx";
import Events from "./Events/Events.jsx";
import About from "./About/About.jsx";
import Contactus from "./contactus/ContactUs.jsx";

const BaseRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<Contactus />} />
    </Routes>
  );
};

export default BaseRouter;
