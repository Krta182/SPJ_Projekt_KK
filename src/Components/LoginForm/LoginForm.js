import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.users);

  const user = {
    email,
    password,
  };
  const handleValidation = () => {
    if (
      currentUser.email !== user.email &&
      currentUser.password !== user.password
    ) {
      history.push("/Home");
    } else {
      alert("Wrong email or password!");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setUser(user));
   // handleValidation();
    setEmail("");
    setPassword("");
    history.push("/Home");
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit}>
        <p>
          <span className={styles.usernameAndPasswordEnter}>
            Enter your username and password:
          </span>
        </p>
        <input
          type="email"
          placeholder="E-mail adress"
          value={email}
          onChange={handleChangeEmail}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
          className={styles.password}
          value={password}
          required
        />

        <button type="submit" className={styles.submitUser}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
