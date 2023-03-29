import React from "react";
import "./HabitForm.css";
function HabitForm() {
  return (
    <div className="habitform__container">
      <input
        className="habit__input"
        type="text"
        placeholder="Enter new habit..."
      />
      <input className="habit__submit" type="submit" value="Submit" />
    </div>
  );
}

export default HabitForm;
