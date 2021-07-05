import React, {useState} from "react";
import "./styles.css";
const Signin = (props) => {
    // import the state to use in order to get values
    const [user, setUser] = useState();
    // write a function to get the value from the form
    function getFormValue(){

    }
    // write a function to populate array with objects
    function populateUserArray(){

    }
    // write a function to stringify and store the array into local storage
    function storeUsers(){

    }
    // write a function to retrieve array from local storage
    function retrieveUsers(){
        
    }
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