import React from "react";
import styles from "./Settings.module.css";
import NavBar from "../NavBarOnHome/NavBar";
import PasswordChanger from "../PasswordChanger/PasswordChanger";

const Settings =()=>{


    return (
      <div>
        <div className={styles.passwordChangeForm}>
          <PasswordChanger></PasswordChanger>
        </div>
      </div>
    );
  }

export default Settings;
