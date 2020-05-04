import React from "react";
import styles from "./HomePage.module.css";
import NavBarOnHome from "../NavBarOnHome/NavBar";

const HomePage = (props) => {
  return (
    <div className={styles.display}>
      <NavBarOnHome></NavBarOnHome>
    </div>
  );
};

export default HomePage;
