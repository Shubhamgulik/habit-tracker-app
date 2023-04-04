import React, { useState, useEffect } from "react";
import "./Home.css";
import { HabitForm, HabitCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { selectHabitsList } from "../features/habitsSlice";
function Home({ setHabits }) {
  const dispatch = useDispatch();

  const habits = useSelector(selectHabitsList);

  return (
    <div className="home">
      <HabitForm />
      <div className="habitcards__container">
        {habits.map((habit, index) => {
          return <HabitCard habit={habit} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Home;
