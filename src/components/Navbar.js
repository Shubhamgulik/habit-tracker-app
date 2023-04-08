import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Home } from "../pages";

// Navbar Component
function Navbar() {
  return (
    <div className="navbar">
      {/* Link to home page */}
      <Link to="">
        <h1> Habit Tracker App </h1>
      </Link>
    </div>
  );
}

export default Navbar;
