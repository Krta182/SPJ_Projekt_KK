import React from "react";
import styles from "./LoginPage.module.css";
import RegistrationOnLoginPage from "../RegistrationOnLoginPage/RegistrationOnLoginPage";
import HeaderOnLoginPage from "../HeaderOnLoginPage/HeaderOnLoginPage";

const LoginPage = (props) => {
  return (
    <div className={styles.cont}>
      <HeaderOnLoginPage></HeaderOnLoginPage>
      <RegistrationOnLoginPage></RegistrationOnLoginPage>
    </div>
  );
};

export default LoginPage;
