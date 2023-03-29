import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import { Navbar } from "./";
// Importing Pages
import { Home, Habit } from "../pages";

//Error page
const Error404 = () => {
  return <h1>Error404</h1>;
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/habit" element={<Habit />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
