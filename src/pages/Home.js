import React from "react";
import "./Home.css";
import { HabitForm, HabitCard } from "../components";
function Home() {
  return (
    <div className="home">
      <HabitForm />
      <div className="habitcards__container">
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
}

export default Home;
