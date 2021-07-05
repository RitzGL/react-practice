import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>

        <Route path="/dashboard/:myparam">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
