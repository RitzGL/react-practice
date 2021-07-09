import "./App.css";
import React, { useState } from "react";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// functionally similar to a main()
function App() {
  // * Looking inside the global store wrapping this app
  const auth = useSelector(state => state.auth)
  console.log(auth)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {auth.value ? <Redirect to="/dashboard" /> : <Signin />}
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
