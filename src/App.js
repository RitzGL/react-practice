import "./App.css";
import React from "react";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// functionally similar to a main()
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
