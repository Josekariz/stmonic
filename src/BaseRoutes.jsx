import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./homepage/Home";
import Events from "./Events/Events";
import About from "./About/About";
import Contactus from "./contactus/ContactUs";
import StMonica from "./About/Stmonica";
import Subgroups from "./About/Subgroups";
import Fellowships from "./About/Fellowship";
import MensAssoc from "./About/MensAssoc";
import Blaze from "./About/Blaze";
import Mothers from "./About/Mothers";

const BaseRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<Contactus />} />
      <Route path="/st-monica" element={<StMonica/>}></Route>
      <Route path="/subgroups" element={<Subgroups/>}></Route>
      <Route path="/fellowships" element={<Fellowships/>}></Route>
      <Route path="/blaze" element={<Blaze/>}></Route>
      <Route path="/kama" element={<MensAssoc/>}></Route>
      <Route path="/mothers" element={<Mothers/>}></Route>
    </Routes>
  );
};

export default BaseRouter;
