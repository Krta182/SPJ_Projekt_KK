import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const user = {
    email,
    password,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    dispatch(setUser(user));
    setEmail("");
    setPassword("");

    if(user.email===email && user.password===password)
    history.push("/Home");
    else{
      alert("Email or password not correct.Please try again")
    }
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
