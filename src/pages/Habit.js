import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Habit.css";
import Daycard from "../components/Daycard";
import { selectHabitsList, addHabit } from "../features/habitsSlice";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../features/habitsSlice";

// Method to get formatted date DD/MM/YYYY
function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return day + "/" + month + "/" + year;
}

// Habit Component
function Habit() {
  const [currentHabit, setCurrentHabit] = useState({});
  const habits = useSelector(selectHabitsList);
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch(); // To dispatching actions

  // This will run on every change in habits list
  useEffect(() => {
    const index = habits.findIndex((habit) => habit.id == id);
    setCurrentHabit(habits[index]);
  }, [habits]);

  // Getting date and day
  const week = [];
  const days = [
    "Sunday", // 0
    "Monday", // 1
    "Tuesday", // 2
    "Wednesday", // 3
    "Thursday", // 4
    "Friday", // 5
    "Saturday", // 6
  ];

  const date = new Date();

  for (let i = 6; i >= 0; i--) {
    const weekDay = {
      day: days[date.getDay()],
      date: getFormattedDate(date),
    };
    date.setDate(date.getDate() - 1);
    week.push(weekDay);
  }

  // Update status of the day card
  const updateStatuss = (habit, newArray) => {
    dispatch(
      updateStatus({
        habit,
        newArray,
      })
    );
  };
  return (
    <div className="habit">
      <h1>{currentHabit.title}</h1>

      <div className="daycards__container">
        {week?.map((item, index) => (
          <Daycard
            habit={currentHabit}
            day={item}
            index={index}
            weekStatus={currentHabit.weekStatus}
            updateStatus={updateStatuss}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Habit;
