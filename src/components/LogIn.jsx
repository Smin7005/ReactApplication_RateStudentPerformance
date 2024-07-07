//LogIn.jsx
import "../styles/RegistrationPage.css";
import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function LogIn() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // 2 tabs on the page, one is for Log in, another one is for Sign up.
  const [account, inputAccount] = useState({
    existingAccount: "",
  });
  const [password, inputPassword] = useState({
    existingPassword: "",
  });

  // submit form button of log in tab.
  function submitLogIn(e) {
    e.preventDefault();
    setUser(account.existingAccount);
    console.log(
      "Account:" + account.existingAccount + " successfully loggeed in."
    );
    navigate("/RS");
  }

  return (
    <div className="registrationContainer">
      {/* tab for log in. */}
      <div className="logInContainer">
        <form onSubmit={submitLogIn}>
          <h3>Log In</h3>
          {/* input existing account on log in tab. */}
          <div className="inputBox">
            <label htmlFor="accountLogIn">Please enter your account:</label>
            <br />
            <input
              type="text"
              name="accountLogIn"
              id="accountLogIn"
              placeholder="Enter your account here..."
              value={account.existingAccount}
              onChange={(e) =>
                inputAccount({ ...account, existingAccount: e.target.value })
              }
            ></input>
          </div>
          {/* input existing password on log in tab. */}
          <div className="inputBox">
            <label htmlFor="passwordLogIn">Please enter your password:</label>
            <br />
            <input
              type="password"
              name="passwordLogIn"
              id="passwordLogIn"
              placeholder="Enter your password here..."
              value={password.existingPassword}
              onChange={(e) =>
                inputPassword({ ...password, existingPassword: e.target.value })
              }
            ></input>
          </div>
          <div className="button">
            <br />
            <button type="submit">log in my account</button>
          </div>
        </form>
        {/* close logInContainer class */}
      </div>
      {/* close registrationContainer class */}
    </div>
  );
}
