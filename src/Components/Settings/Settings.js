import React from "react";
import styles from "./Settings.module.css";
import NavBar from "../NavBarOnHome/NavBar";
import PasswordChanger from "../PasswordChanger/PasswordChanger";

class Settings extends React.Component {
  mySubmitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        
        <div className={styles.passwordChangeForm}>
         <PasswordChanger></PasswordChanger>
        </div>
      </div>
    );
  }
}

export default Settings;
