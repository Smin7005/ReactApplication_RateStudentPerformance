//RegistrationPage.jsx
import "../styles/RegistrationPage.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

export default function RegistrationPage() {
  // switch of toggle form, default page is sign up.
  const [isToggle, setIsToggle] = useState(true);

  return (
    <div className="registrationContainer">
      {/* go back to HomePage */}
      <Link to="/">Back to home page</Link>
      <div className="toggleButtonContainer">
        <div className="toggleButton">
          <div
            className={isToggle ? "active" : "inactive"}
            onClick={() => setIsToggle(true)}
          >
            Sign Up
          </div>
          <div
            className={!isToggle ? "active" : "inactive"}
            onClick={() => setIsToggle(false)}
          >
            Log In
          </div>
        </div>
      </div>
      {isToggle ? <SignUp /> : <LogIn />}
      {/* close registrationContainer class */}
    </div>
  );
}
