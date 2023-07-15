import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/blaze">Blaze </Link>
        </li>
        <li>
          <Link to="/events">Events </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar1;
