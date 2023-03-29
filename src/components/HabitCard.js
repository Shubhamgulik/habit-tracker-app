import React from "react";
import { Link } from "react-router-dom";
import "./HabitCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Habit } from "../pages";
function HabitCard() {
  return (
    <div className="habitcard__container">
      <h1 className="habitcard__title">WorkOut</h1>
      <h4 className="habitcard__result">Achieved : 0/7</h4>
      <div className="habitcard__icons">
        <Link to="/habit">
          <VisibilityIcon />
        </Link>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default HabitCard;
