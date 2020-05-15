import React from "react";
import styles from "./HomePage.module.css";
import NavBarOnHome from "../NavBarOnHome/NavBar";
import UploadForm from "../UploadForm/UploadForm";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div className={styles.display}>
      <NavBarOnHome></NavBarOnHome>
      {currentUser.isAuth ? (
        <h3 className={styles.Name}>Welcome {currentUser.name}</h3>
      ) : null}
      <UploadForm></UploadForm>
    </div>
  );
};

export default HomePage;
