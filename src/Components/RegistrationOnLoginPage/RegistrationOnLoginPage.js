import React from "react";
import styles from "./RegistrationOnLoginPage.module.css";

class RegistrationOnLoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: ""};
    }
  


mySubmitHandler = (event) => {
    event.preventDefault();
  };


render() {
    return (
      <div className={styles.Header}>
        <h1>Izradite novi račun</h1>
        <div className={styles.loginForm}>
          <form onSubmit={this.mySubmitHandler}>
            <input
              type="text"
             
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
              Registration
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationOnLoginPage;
