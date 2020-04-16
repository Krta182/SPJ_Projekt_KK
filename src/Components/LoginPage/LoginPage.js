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
        <div className={styles.loginForm}>
          <form onSubmit={this.mySubmitHandler}>
            <input type="text" onChange={this.myChangeHandler} />
            <input type="text" />
            <br></br>
            <button className={styles.submitUser} onSubmit={this.props.mySubmitHandler}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
