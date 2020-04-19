import React from "react";
import styles from "./LoginPage.module.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
  };

  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className={styles.Header}>
        <h1>Facebook</h1>
        <div className={styles.loginForm}>
          <form onSubmit={this.mySubmitHandler}>
            <p>
              <span className={styles.usernameAndPasswordEnter}>
                Enter your username and password:
              </span>
            </p>
            <input
              type="text"
              onChange={this.myChangeHandler}
              placeholder="Username"
            />

            <input
              type="text"
              placeholder="Password"
              className={styles.password}
            />

            <button
              className={styles.submitUser}
              onSubmit={this.props.mySubmitHandler}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
