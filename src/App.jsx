//App.jsx
import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RateStudents from "./components/RateStudents.jsx";
import HomePage from "./components/HomePage.jsx";
import RegistrationPage from "./components/RegistrationPage.jsx";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          //Default route
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/RP" element={<RegistrationPage />} />
          <Route exact path="/RS" element={<RateStudents />} />
        </Routes>
      </Router>
    </div>
  );
}
