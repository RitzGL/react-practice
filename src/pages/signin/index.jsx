import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./styles.css";
// import Dashboard from "../dashboard"
const Signin = (props) => {
  // setting intiail state as 2 users with unique passwords
  const [users, setUser] = useState([
    { username: "admin", password: "admin" },
    { username: "ritzie", password: "password" },
  ]);

  // universally available all over the component's scope
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // write a function to stringify and store the array into local storage
  function storeUsers() {
    localStorage.setItem("users", JSON.stringify(users));
  }

  // write a function to retrieve array from local storage
  function retrieveUsers() {
    const users = JSON.parse(localStorage.getItem("users"));
    return users;
  }

  storeUsers();
  // handle the submission of the username
  // onChange={(e) => setUsername(e.target.value)}
  function handleUsernameSubmit(e) {
    // value is scanned for on every keystroke because onChange
    // hence the alert firing off when user begins to type
    // could i copy the value into a separate variable?
    setUsername(e.target.value);
  }
  // handle the submission of the password
  // onChange={(e) => setPassword(e.target.value)}
  function handlePasswordSubmit(e) {
    setPassword(e.target.value);
  }

  // storing the array into local storage for later comparison
  // write a function to get the value from the form
  function signIn(e) {
    // getting users array in order to do comparison
    if (username.length <= 4)
      alert("Username must be longer than 4 characters!");
    const users = retrieveUsers();
    // need to think of better way to authenticate a user with their password
    // will push these changes, progress has been made!
    const inputLogin = { username: username, password: password };
    console.log(inputLogin);

    const found = users.some(
      (user) =>
        user.username === inputLogin.username &&
        user.password === inputLogin.password
    );

    e.preventDefault();
    // I could try and implement useContext, but this spaghetti code is 
    // too far gone at this point
    localStorage.setItem("auth", JSON.stringify(found))

  }

  return (
    <form>
      <div className="input-wrapper">
        <label>Name</label>
        <input
          min="4"
          placeholder="4+ characters"
          type="text"
          // keeping the setUsername wrapped, for validation
          onChange={(e) => handleUsernameSubmit(e)}
        />
      </div>
      <div className="input-wrapper">
        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          // Perhaps the password can stay wrapped too
          onChange={(e) => handlePasswordSubmit(e)}
        />
      </div>
      <button
        type="submit"
        onClick={(e) => {
          signIn(e);
        }}
      >
        Login
      </button>
    </form>
  );
};

export default Signin;
