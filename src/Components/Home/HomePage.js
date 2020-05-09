import React from "react";
import styles from "./HomePage.module.css";
import NavBarOnHome from "../NavBarOnHome/NavBar";
import UploadForm from "../UploadForm/UploadForm";

const HomePage = (props) => {
  return (
    <div className={styles.display}>
      <NavBarOnHome></NavBarOnHome>
      <UploadForm></UploadForm>
    </div>
  );
};

export default HomePage;
