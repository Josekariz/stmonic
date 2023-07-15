import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './Home.js';
import Blaze from './Blaze.js';
import Events from './Events.js';
import About from './About.js';

const BaseRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blaze" element={<Blaze />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default BaseRouter;
