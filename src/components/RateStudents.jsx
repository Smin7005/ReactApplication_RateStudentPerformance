//RateStudents.jsx
import React from "react";
import { useState, useContext } from "react";
import RatingBar from "./RatingBar";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function RateStudents() {
  const { user } = useContext(UserContext);
  const [studentName, enterStudentName] = useState("");
  const [comment, writeComment] = useState("");
  const [ratings, setRatings] = useState({
    problemSolving: null,
    adaptation: null,
    teamwork: null,
    communication: null,
    resilience: null,
    professionalSkills: null,
  });

  function submitForm(e) {
    e.preventDefault();
    console.log(comment, ratings);
  }

  const handleRatingChange = (field, value) => {
    setRatings((prevRatings) => ({ ...prevRatings, [field]: value }));
  };

  return (
    <div>
      {/* go back to HomePage */}
      <Link to="/">Back to home page</Link>
      <h1>Rate Students Performance</h1>
      <b>Mentor Account: {user}</b>
      <br />
      <label htmlFor="studentName">
        Please enter the name of this student:
      </label>
      <br />
      <input
        type="text"
        name="studentName"
        id="studentName"
        autoComplete="on"
        placeholder="Enter student name here..."
        value={studentName}
        onChange={(e) => enterStudentName(e.target.value)}
      ></input>
      <p>Please write an overall comment about this student:</p>
      <form>
        <textarea
          name="comment"
          id="comment"
          rows="6"
          cols="60"
          autoComplete="on"
          placeholder="type here..."
          value={comment}
          onChange={(e) => writeComment(e.target.value)}
        />
        <hr />
        <RatingBar
          label="Individual problem solving"
          description="Employers rate workers highly when they demonstrate strong individual problem-solving skills."
          rating={ratings.problemSolving}
          setRating={(value) => handleRatingChange("problemSolving", value)}
        />
        <RatingBar
          label="Rapid adaptation"
          description="Workers who quickly adapt to changing circumstances receive positive ratings from employers."
          rating={ratings.adaptation}
          setRating={(value) => handleRatingChange("adaptation", value)}
        />
        <RatingBar
          label="Team work"
          description="Employers value and rate workers positively who excel in teamwork and collaboration."
          rating={ratings.teamwork}
          setRating={(value) => handleRatingChange("teamwork", value)}
        />
        <RatingBar
          label="Communication"
          description="Effective communication skills of workers lead to higher ratings from employers."
          rating={ratings.communication}
          setRating={(value) => handleRatingChange("communication", value)}
        />
        <RatingBar
          label="Resilience"
          description="Workers who have the ability to bounce back from setbacks are rated more favorably by employers."
          rating={ratings.resilience}
          setRating={(value) => handleRatingChange("resilience", value)}
        />
        <RatingBar
          label="Professional skills"
          description="High proficiency in professional skills results in better ratings from employers for workers."
          rating={ratings.professionalSkills}
          setRating={(value) => handleRatingChange("professionalSkills", value)}
        />
        <button
          id="submitForm"
          name="submitForm"
          type="submit"
          onClick={(e) => submitForm(e)}
        >
          Generate Report.
        </button>
      </form>
    </div>
  );
}
