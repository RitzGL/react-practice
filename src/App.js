import "./App.css";
import React from "react";
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
  function getAuth(){
    const auth = JSON.parse(localStorage.getItem("auth"))
    console.log(auth)
    return auth;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {getAuth() ? <Redirect to="/dashboard" /> : <Signin />}
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
