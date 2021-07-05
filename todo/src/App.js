import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import React from "react";
import Signin from "./pages/signin"
import Dashboard from "./pages/dashboard"
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
          <Route path="/">
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
