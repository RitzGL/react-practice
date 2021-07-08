import "./App.css";
import React, { useState } from "react";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// functionally similar to a main()
function App() {
  const [auth, setAuth] = useState(false)
  function getAuth(){
    const auth = JSON.parse(localStorage.getItem("auth"))
    console.log(auth)
    if(auth){setAuth(auth)} 
  }
  getAuth();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {auth ? <Redirect to="/dashboard" /> : <Signin />}
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
