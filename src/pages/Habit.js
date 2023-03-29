import React from "react";
import { useParams } from "react-router-dom";
import "./Habit.css";
import Daycard from "../components/Daycard";
function Habit() {
  const params = useParams();
  console.log("Parameters : ", params.id);
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
