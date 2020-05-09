import React, { Component } from "react";
import styles from "./App.module.css";
import Home from "../Home/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../NavBarOnHome/NavBar";

const handleLogin = (event) => {
  event.preventdefault();
  this.setState.isLogged = false;
  console.log(this.props.isLogged);
 
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={Home}
            onHandleLogin={handleLogin}
          />
          <div className={styles.displayBtns}>
            <Route path="/Profile" component={Profile} />
            <Route path="/Settings" component={Settings} />
            <Route
              exact
              path="/LoginPage"
              render={() => (
                <div>
                  <LoginPage></LoginPage>
                </div>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
