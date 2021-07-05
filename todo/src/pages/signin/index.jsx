import React from "react";
import "./styles.css"
const Signin = (props) => {
  return (
    <form>
      <div className="input-wrapper">
        <label>name</label>
        <input placeholder="4+ characters" type="text" />
      </div>
      <div className="input-wrapper">
        <label>password</label>
        <input placeholder="password" type="password" />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

export default Signin;