import React, { Component } from "react";
import styles from"./App.module.css";
import HeaderOnLoginPage from "../HeaderOnLoginPage/HeaderOnLoginPage";
import RegistrationOnLoginPage from "../RegistrationOnLoginPage/RegistrationOnLoginPage";
import Home from "../Home/HomePage";

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      TestUser:[{
        id:1,
        Email:"kristijan.krtalic-@hotmail.com",
        password:"Test123"
      }]
    }
  }

  render() {
    return (
      <div className={App}>
        <div className={styles.body}>
        <HeaderOnLoginPage></HeaderOnLoginPage>
        <RegistrationOnLoginPage></RegistrationOnLoginPage>
        </div>
      </div>
    );
  }
}

export default App;
