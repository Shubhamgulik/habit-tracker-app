import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHabitsList, addHabit } from "../features/habitsSlice";
import "./HabitForm.css";
function HabitForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  // Method to handle submit action
  function handleSubmit(e) {
    e.preventDefault();
    if (title === "") return;
    dispatch(addHabit(title));
    setTitle("");
    return;
  }
  return (
    <div className="habitform__container">
      <form onSubmit={handleSubmit}>
        <input
          className="habit__input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Enter new habit..."
        />
        <input className="habit__submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default HabitForm;
