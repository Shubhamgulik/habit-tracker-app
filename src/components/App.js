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

// App Component
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Selected Habit page */}
          <Route path="/habit/:id" element={<Habit />} />

          {/* Redirect to home page on wrong URL */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
