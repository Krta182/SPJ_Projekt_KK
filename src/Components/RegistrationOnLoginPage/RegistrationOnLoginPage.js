import React from "react";
import styles from "./RegistrationOnLoginPage.module.css";

class RegistrationOnLoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={styles.registrationHeader}>
        <div className={styles.registrationForm}>
          <h2>Create new account</h2>
          <form onSubmit={this.mySubmitHandler}>
            <input type="text" placeholder="Name" className={styles.regName} />
            <input
              type="text"
              placeholder="Surname"
              className={styles.regSurame}
            />
            <br></br>
            <input
              type="text"
              placeholder="E-mail adress"
              className={styles.regMail}
            />
            <br></br>
            <input
              type="text"
              placeholder="New Password"
              className={styles.regPassword}
            />
            <br></br>
            <label for="Birthday">Birthday</label>
            <br></br>
            <input
              type="date"
              placeholder="Day/Month/Year"
              className={styles.regBirthday}
            />
            <br></br>
            <label for="Gender">Gender</label>
            <br></br>
            <select id="Gender" className={styles.regGender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <br></br>
            <label for="RegistrationTerms" className={styles.registrationTerms}>
              By clicking Sign Up, you agree to our Terms. Learn how we collect,{" "}
              <br></br>use and share your data in our Data Policy and how we use
              cookies<br></br> and similar technology in our Cookies Policy.
              <br></br> You may receive SMS Notifications from us and can opt
              out any time.
            </label>
            <br></br>
            <button
              className={styles.submitRegistrationUser}
              onSubmit={this.props.mySubmitHandler}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationOnLoginPage;
