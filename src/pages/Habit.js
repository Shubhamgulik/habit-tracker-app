import React from "react";
import "./Habit.css";
import Daycard from "../components/Daycard";
function Habit() {
  return (
    <div className="habit">
      <h1>Workout</h1>
      <div className="daycards__container">
        <Daycard />
        <Daycard />
        <Daycard />
        <Daycard />
        <Daycard />
        <Daycard />
        <Daycard />
      </div>
    </div>
  );
}

export default Habit;
