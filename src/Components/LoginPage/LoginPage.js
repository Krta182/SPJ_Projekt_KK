import React from "react";
import styles from "./LoginPage.module.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  };

  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className={styles.loginForm}>
        <div className={styles.background}></div>
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name, and submit:</p>
          <input type="text" onChange={this.myChangeHandler} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
