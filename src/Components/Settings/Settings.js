import React from "react";
import styles from "./Settings.module.css";
import NavBar from "../NavBarOnHome/NavBar";
import PasswordChanger from "../PasswordChanger/PasswordChanger";
import HeaderOnSettings from "../HeaderOnSettings/HeaderOnSettings";

const Settings = () => {
  return (
    <div>
   <HeaderOnSettings></HeaderOnSettings>
      <div className={styles.passwordChangeForm}>
        <PasswordChanger></PasswordChanger>
      </div>
    </div>
  );
};

export default Settings;
