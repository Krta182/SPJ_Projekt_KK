import React, { useState } from "react";
import styles from "./RegistrationOnLoginPage.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";
import { postUser } from "../../services";

const RegistrationOnLoginPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  const user = {
    name,
    surname,
    email,
    password,
    birthday,
    gender,
  };

  const SubmitNewUsersHandler = async (event) => {
    event.preventDefault();

    try {
      await postUser(user);
    } catch (error) {
      console.log(error);
    }

    alert(
      "Registration is successful! Please refresh your page and now share your experience with friends"
    );

    dispatch(setUser(user));
    setEmail("");
    setPassword("");
    setName("");
    setSurname("");
    setBirthday("");
    setGender("");
  };

  const handleChangeName = async (event) => {
    setName(event.target.value);
    console.log(user);
  };
  const handleChangeSurname = async (event) => {
    setSurname(event.target.value);
    console.log(user);
  };
  const handleChangeEmail = async (event) => {
    setEmail(event.target.value);
    console.log(user);
  };
  const handleChangePassword = async (event) => {
    setPassword(event.target.value);
    console.log(user);
  };
  const handleChangeBirthday = async (event) => {
    setBirthday(event.target.value);
    console.log(user);
  };
  const handleChangeGender = async (event) => {
    setGender(event.target.value);
    console.log(user);
  };

  return (
    <div className={styles.registrationForm}>
      <h2>Create new account</h2>
      <form onSubmit={SubmitNewUsersHandler}>
        <input
          type="text"
          placeholder="Name"
          className={styles.regName}
          value={name}
          onChange={handleChangeName}
          required
        />
        <input
          type="text"
          placeholder="Surname"
          className={styles.regSurname}
          onChange={handleChangeSurname}
          value={surname}
          required
        />
        <br></br>
        <input
          type="email"
          placeholder="E-mail adress"
          className={styles.regMail}
          name="email"
          onChange={handleChangeEmail}
          value={email}
          required
        />
        <br></br>
        <input
          name="password"
          type="password"
          placeholder="New Password"
          className={styles.regPassword}
          value={password}
          onChange={handleChangePassword}
          required
        />
        <br></br>
        <label for="Birthday">Birthday</label>
        <br></br>
        <input
          type="date"
          placeholder="Day/Month/Year"
          className={styles.regBirthday}
          name="birthday"
          value={birthday}
          onChange={handleChangeBirthday}
          required
        />
        <br></br>
        <label for="Gender">Gender</label>
        <br></br>
        <select
          id="Gender"
          className={styles.regGender}
          name="gender"
          value={gender}
          onChange={handleChangeGender}
        >
          <option value="-">-</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br></br>
        <label for="RegistrationTerms" className={styles.registrationTerms}>
          By clicking Sign Up, you agree to our Terms. Learn how we collect,{" "}
          <br></br>use and share your data in our Data Policy and how we use
          cookies<br></br> and similar technology in our Cookies Policy.
          <br></br> You may receive SMS Notifications from us and can opt out
          any time.
        </label>
        <br></br>
        <button className={styles.submitRegistrationUser} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegistrationOnLoginPage;
