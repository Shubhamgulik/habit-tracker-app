import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// Importing components
import { Navbar } from "./";
// Importing Pages
import { Home, Habit } from "../pages";

//Error page
const Error404 = () => {
  return <h1>Error404</h1>;
};

function App() {
  // const word = "Hello";

  const [habits, setHabits] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home habits={habits} setHabits={setHabits} />}
          />
          <Route
            path="/habit/:id"
            element={<Habit habits={habits} setHabits={setHabits} />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
