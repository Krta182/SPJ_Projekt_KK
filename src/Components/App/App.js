import React, { Component } from "react";
import styles from "./App.module.css";
import Home from "../Home/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "../Router/PrivateRoute";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LoginPage} />

        <PrivateRoute exact path="/Home" component={Home} />
        <PrivateRoute path="/Settings" component={Settings} />
        <PrivateRoute path="/Profile" component={Profile} />
      </Router>
    );
  }
}

export default App;
