import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Home } from "../pages";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="">
        <h1> Habit Tracker App </h1>
      </Link>
    </div>
  );
}

export default Navbar;
