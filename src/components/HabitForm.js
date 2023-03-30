import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectHabitsList, addHabit } from "../features/habitsSlice";
import "./HabitForm.css";
function HabitForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addHabit(title));
    setTitle("");
    // if (title !== "") {
    //   console.log("Title: ", title);
    // }
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
        <input
          className="habit__submit"
          // onClick={handleSubmit}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default HabitForm;
