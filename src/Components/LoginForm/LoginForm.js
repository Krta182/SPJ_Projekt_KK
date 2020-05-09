import React from "react";
import styles from "./LoginForm.module.css";

class LoginForm extends React.Component {
  mySubmitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={styles.loginForm}>
        <form onClick={this.props.onHandleLogin}>
          <p>
            <span className={styles.usernameAndPasswordEnter}>
              Enter your username and password:
            </span>
          </p>
          <input type="email" placeholder="E-mail adress" />

          <input
            type="password"
            placeholder="Password"
            className={styles.password}
          />

          <button
            id="BtnSubmitUser"
            className={styles.submitUser}
           
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
