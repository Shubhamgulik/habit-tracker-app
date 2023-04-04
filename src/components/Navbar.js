import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Home } from "../pages";
function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="navbar__container"> */}
      <Link to="">
        <h1> Habit Tracker App </h1>
      </Link>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
