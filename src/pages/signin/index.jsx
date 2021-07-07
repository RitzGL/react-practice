import React, { useState } from "react";
import "./styles.css";
const Signin = (props) => {
  // setting intiail state as 2 users with unique passwords
  const [users, setUser] = useState([
    { username: "admin", password: "admin", id: 1 },
    { username: "ritzie", password: "password", id: 2 },
  ]);

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
    setUsername(e.target.value)
  }
  // handle the submission of the password
  // onChange={(e) => setPassword(e.target.value)}
  function handlePasswordSubmit(e) {
    setPassword(e.target.value)
  }

  // storing the array into local storage for later comparison

  // write a function to get the value from the form
  function getInputFieldValue(e) {
    e.preventDefault();
    console.log(username)
    console.log(password)

  }
  
  return (
    <form>
      <div className="input-wrapper">
        <label>Name</label>
        <input
          min="4"
          placeholder="4+ characters"
          type="text"
          onChange={(e) => handleUsernameSubmit(e)}
        />
      </div>
      <div className="input-wrapper">
        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => handlePasswordSubmit(e)}
        />
      </div>
      <button type="submit"
      onClick={(e) => getInputFieldValue(e) }>Login</button>
    </form>
  );
};

export default Signin;
