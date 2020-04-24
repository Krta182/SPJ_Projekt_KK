import React from "react";
import styles from "./HeaderOnLoginPage.module.css";
import LoginForm from "../LoginForm/LoginForm";


  const HeaderOnLoginPage =(props)=> {
    return (
      <div className={styles.Header}>
        <h1>Facebook</h1>
        <LoginForm></LoginForm>
      </div>
    );
  }


export default HeaderOnLoginPage;
