import React, { useState } from "react";
import styles from "./PasswordChanger.module.css";
import { useSelector } from "react-redux";
import { updateUser } from "../../services";

const PasswordChanger = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { currentUser } = useSelector((state) => state.users);

  const fetchData = async () => {
    if (currentUser) {
      const json = await updateUser(currentUser, currentUser.id);
      console.log(json);
    } else {
      alert("Password change has been incorrect");
    }
  };

  const userPassword = {
    oldPassword,
    newPassword,
  };

  const handleChangeOldPassword = async (event) => {
    setOldPassword(event.target.value);
    console.log(oldPassword);
  };

  const handleChangeNewPassword = async (event) => {
    setNewPassword(event.target.value);
    console.log(newPassword);
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(currentUser);

    if (currentUser.password !== userPassword.oldPassword) {
      alert("Wrong password input! Please repeat your correct password!");
    } else {
      currentUser.password = userPassword.newPassword;
      fetchData();

      alert("You succesfully changed your password!");
    }

    setOldPassword("");
    setNewPassword("");
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
          onChange={handleChangeOldPassword}
          value={oldPassword}
          required
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
          onChange={handleChangeNewPassword}
          value={newPassword}
          required
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
