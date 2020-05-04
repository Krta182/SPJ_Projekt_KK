import React, { Component } from "react";
import styles from "./App.module.css";
import HeaderOnLoginPage from "../HeaderOnLoginPage/HeaderOnLoginPage";
import RegistrationOnLoginPage from "../RegistrationOnLoginPage/RegistrationOnLoginPage";
import Home from "../Home/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import Profile from "../Profile/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TestUser: [
        {
          id: 1,
          Email: "kristijan.krtalic-@hotmail.com",
          password: "Test123",
        },
      ],
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
  };

  myHandleChanger = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <Router>
        <div>
          <Home>
            <div className={styles.displayBtns}>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Profile" component={Profile} />
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
          </Home>
        </div>
      </Router>
    );
  }
}

export default App;
