import React from "react";
import styles from "./PasswordChanger.module.css";
import NavBar from "../NavBarOnHome/NavBar";

const PasswordChanger = () => {
  const mySubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.passwordChangeForm}>
      <form onSubmit={mySubmitHandler}>
        <p>
          <span className={styles.oldPasswordHeader}>Enter your password:</span>
        </p>
        <input
          type="password"
          placeholder="Password"
          size="40"
          className={styles.oldPasswordInput}
        />
        <p>
          <span className={styles.newPasswordHeader}>
            Enter your new password:
          </span>
        </p>
        <input
          type="password"
          placeholder="New Password"
          className={styles.newPasswordInput}
          size="40"
        />
        <br></br>
        <button
          id="BtnChangePassword"
          className={styles.SubmitNewPassword}
          onSubmit={mySubmitHandler}
        >
          Change password
        </button>
      </form>
    </div>
  );
};

export default PasswordChanger;
