import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./homepage/Home.js";
import Events from "./Events.js";
import About from "./About.js";
import Contactus from "./ContactUs.js";

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
