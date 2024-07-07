//HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export default function HomePage() {
  const navigator = useNavigate();
  const handleNavigate = () => {
    // Jumps to the RegistrationPage.jsx component
    navigator("/RP");
  };

  return (
    //   React Fragments: <>...</> These fragments do not add extra DOM node.
    //   Useful when returning multiple elements from a component without adding
    //   extra nodes.
    <>
      <h1>Vite + React</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Introduction</h2>
      <p>
        This project is built with Vite + React. It includes features for mentor
        registration, login, and rating students' performance.The main users of
        this website are mentors. After creating an account, mentors can
        generate reports on student performance by writing overall comments and
        scoring them based on 6 criteria.
      </p>
      <h4>
        Now the front end of the website is working. But I'm still working on
        back end and database. -Shaun
      </h4>

      <div className="card">
        <button onClick={handleNavigate}> Mentor Registration Page </button>
        <p>
          Edit <code>src/components/HomePage.jsx</code> and save to test it.
        </p>
      </div>
    </>
  );
}
