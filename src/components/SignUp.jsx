//SignUp.jsx
import "../styles/RegistrationPage.css";
import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function SignUp() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // 2 tabs on the page, one is for Log in, another one is for Sign up.
  const [account, inputAccount] = useState({
    newAccount: "",
  });
  const [password, inputPassword] = useState({
    newPassword: "",
    passwordAgain: "",
  });

  // submit form button of sign up tab.
  function submitSignUp(e) {
    e.preventDefault();
    if (password.newPassword != password.passwordAgain) {
      console.log(
        "Password does not match.\n" +
          password.newPassword +
          "\n" +
          password.passwordAgain
      );
      return;
    } else {
      setUser(account.newAccount);
      console.log("Account" + account.newAccount + " successfully signed up.");
      navigate("/RS");
    }
  }

  return (
    <div className="registrationContainer">
      {/* tab for sign up. */}
      <div className="signUpContainer">
        <form onSubmit={submitSignUp}>
          <h3>Sign Up</h3>
          {/* create account on Sign up tab*/}
          <div className="inputBox">
            <label htmlFor="accountSignUp">Please create your account: </label>
            <br />
            <input
              type="text"
              name="accountSignUp"
              id="accountSignUp"
              placeholder="create account here..."
              value={account.newAccount}
              onChange={(e) =>
                inputAccount({ ...account, newAccount: e.target.value })
              }
            ></input>
          </div>
          {/* create password on Sign up tab*/}
          <div className="inputBox">
            <label htmlFor="passwordSignUp">
              Please create password for your account:
            </label>
            <br />
            <input
              type="password"
              name="passwordSignUp"
              id="passwordSignUp"
              placeholder="create password here..."
              value={password.newPassword}
              onChange={(e) =>
                inputPassword({ ...password, newPassword: e.target.value })
              }
            ></input>
          </div>
          {/* input password again on Sign up tab*/}
          <div className="inputBox">
            <label htmlFor="passwordAgainSignUp">
              Please enter the password again:
            </label>
            <br />
            <input
              type="password"
              name="passwordAgainSignUp"
              id="passwordAgainSignUp"
              placeholder="Enter password again..."
              value={password.passwordAgain}
              onChange={(e) =>
                inputPassword({ ...password, passwordAgain: e.target.value })
              }
            ></input>
          </div>
          <div className="button">
            <br />
            <button type="submit">create your new account</button>
          </div>
        </form>
        {/* close signUpContainer class */}
      </div>
      {/* close registrationContainer class */}
    </div>
  );
}
